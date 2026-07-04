import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;

/**
 * JsonUtil - Minimal JSON helpers for parsing request bodies and
 * building response strings without any external dependencies.
 */
public class JsonUtil {

    // ── Parsing ────────────────────────────────────────────────────────────

    /**
     * Extract the string value for a given key from a flat JSON object.
     * Handles basic escape sequences (\\, \", \n, \r, \t, uXXXX).
     */
    public static String getString(String json, String key) {
        if (json == null || key == null) return null;

        String search = "\"" + key + "\"";
        int idx = json.indexOf(search);
        if (idx < 0) return null;

        idx += search.length();

        // Skip whitespace and colon
        while (idx < json.length() && (json.charAt(idx) == ' ' || json.charAt(idx) == '\t'
                || json.charAt(idx) == ':' || json.charAt(idx) == '\n' || json.charAt(idx) == '\r')) {
            idx++;
        }

        if (idx >= json.length() || json.charAt(idx) != '"') return null;
        idx++; // skip opening quote

        StringBuilder sb = new StringBuilder();
        while (idx < json.length()) {
            char c = json.charAt(idx);
            if (c == '\\') {
                idx++;
                if (idx >= json.length()) break;
                char esc = json.charAt(idx);
                switch (esc) {
                    case '"':  sb.append('"');  break;
                    case '\\': sb.append('\\'); break;
                    case '/':  sb.append('/');  break;
                    case 'n':  sb.append('\n'); break;
                    case 'r':  sb.append('\r'); break;
                    case 't':  sb.append('\t'); break;
                    case 'u':
                        if (idx + 4 < json.length()) {
                            try {
                                String hex = json.substring(idx + 1, idx + 5);
                                sb.append((char) Integer.parseInt(hex, 16));
                                idx += 4;
                            } catch (NumberFormatException ignored) {}
                        }
                        break;
                    default: sb.append(esc);
                }
            } else if (c == '"') {
                break; // end of string
            } else {
                sb.append(c);
            }
            idx++;
        }
        return sb.toString();
    }

    /**
     * Extract an integer value for a given key from a flat JSON object.
     */
    public static int getInt(String json, String key, int defaultValue) {
        if (json == null || key == null) return defaultValue;

        String search = "\"" + key + "\"";
        int idx = json.indexOf(search);
        if (idx < 0) return defaultValue;

        idx += search.length();
        while (idx < json.length() && (json.charAt(idx) == ' ' || json.charAt(idx) == ':' || json.charAt(idx) == '\t')) {
            idx++;
        }

        int start = idx;
        while (idx < json.length() && (Character.isDigit(json.charAt(idx)) || json.charAt(idx) == '-')) {
            idx++;
        }

        if (idx == start) return defaultValue;
        try {
            return Integer.parseInt(json.substring(start, idx));
        } catch (NumberFormatException e) {
            return defaultValue;
        }
    }

    // ── Building ───────────────────────────────────────────────────────────

    /**
     * Escape a string value for embedding in JSON.
     */
    public static String escapeJson(String s) {
        if (s == null) return "";
        StringBuilder sb = new StringBuilder();
        for (char c : s.toCharArray()) {
            switch (c) {
                case '"':  sb.append("\\\""); break;
                case '\\': sb.append("\\\\"); break;
                case '\n': sb.append("\\n");  break;
                case '\r': sb.append("\\r");  break;
                case '\t': sb.append("\\t");  break;
                default:
                    if (c < 0x20) {
                        sb.append(String.format("\\u%04x", (int) c));
                    } else {
                        sb.append(c);
                    }
            }
        }
        return sb.toString();
    }

    /** Build a JSON error response. */
    public static String error(String message) {
        return "{\"error\":\"" + escapeJson(message) + "\"}";
    }

    /** Wrap a questions JSON array in a response object. */
    public static String questionsResponse(String questionsJsonArray) {
        return "{\"questions\":" + questionsJsonArray + "}";
    }

    // ── I/O ────────────────────────────────────────────────────────────────

    /** Read all bytes from an InputStream and return as UTF-8 String. */
    public static String readBody(InputStream is) throws IOException {
        return new String(is.readAllBytes(), StandardCharsets.UTF_8);
    }

    // ── Gemini response parser ─────────────────────────────────────────────

    /**
     * Extract the value of the first "text" field from a Gemini API JSON response.
     * Properly handles all JSON escape sequences to reconstruct the original string.
     */
    public static String extractGeminiText(String json) {
        if (json == null) return null;

        String marker = "\"text\"";
        int idx = json.indexOf(marker);
        if (idx < 0) return null;

        idx += marker.length();

        // Skip whitespace and colon
        while (idx < json.length() && (json.charAt(idx) == ' ' || json.charAt(idx) == ':'
                || json.charAt(idx) == '\t' || json.charAt(idx) == '\n' || json.charAt(idx) == '\r')) {
            idx++;
        }

        if (idx >= json.length() || json.charAt(idx) != '"') return null;
        idx++; // skip opening quote

        StringBuilder sb = new StringBuilder();
        while (idx < json.length()) {
            char c = json.charAt(idx);
            if (c == '\\') {
                idx++;
                if (idx >= json.length()) break;
                char esc = json.charAt(idx);
                switch (esc) {
                    case '"':  sb.append('"');  break;
                    case '\\': sb.append('\\'); break;
                    case '/':  sb.append('/');  break;
                    case 'n':  sb.append('\n'); break;
                    case 'r':  sb.append('\r'); break;
                    case 't':  sb.append('\t'); break;
                    case 'u':
                        if (idx + 4 < json.length()) {
                            try {
                                String hex = json.substring(idx + 1, idx + 5);
                                sb.append((char) Integer.parseInt(hex, 16));
                                idx += 4;
                            } catch (NumberFormatException ignored) {}
                        }
                        break;
                    default: sb.append(esc);
                }
            } else if (c == '"') {
                break;
            } else {
                sb.append(c);
            }
            idx++;
        }

        return sb.length() > 0 ? sb.toString() : null;
    }
}

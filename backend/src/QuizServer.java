import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpServer;

import java.io.IOException;
import java.io.OutputStream;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;

/**
 * QuizServer — Main entry point.
 * Starts a lightweight HTTP server on port 8080.
 * Routes:
 *   POST /api/generate  — calls Gemini AI, returns 15 MCQ questions
 *   GET  /api/health    — health check
 */
public class QuizServer {

    private static final int PORT = 8080;

    public static void main(String[] args) throws Exception {
        loadEnv();
        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        ApiHandler handler = new ApiHandler();
        server.createContext("/api/generate", handler::handleGenerate);
        server.createContext("/api/health",   handler::handleHealth);

        server.setExecutor(null); // default executor
        server.start();

        System.out.println("╔══════════════════════════════════════════╗");
        System.out.println("║   Yours Quiz Java Server — running!      ║");
        System.out.println("║   http://localhost:" + PORT + "                  ║");
        System.out.println("╚══════════════════════════════════════════╝");
        System.out.println("Endpoints:");
        System.out.println("  POST http://localhost:" + PORT + "/api/generate");
        System.out.println("  GET  http://localhost:" + PORT + "/api/health");
    }

    /**
     * Send an HTTP response with CORS headers.
     */
    static void sendResponse(HttpExchange exchange, int status, String body, String contentType)
            throws IOException {
        byte[] bytes = body.getBytes(StandardCharsets.UTF_8);
        exchange.getResponseHeaders().set("Content-Type", contentType + "; charset=utf-8");
        exchange.getResponseHeaders().add("Access-Control-Allow-Origin",  "*");
        exchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        exchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type");
        exchange.sendResponseHeaders(status, bytes.length);
        try (OutputStream os = exchange.getResponseBody()) {
            os.write(bytes);
        }
    }

    private static void loadEnv() {
        try {
            java.io.File file = new java.io.File(".env");
            if (file.exists()) {
                java.nio.file.Files.readAllLines(file.toPath()).forEach(line -> {
                    line = line.trim();
                    if (!line.isEmpty() && !line.startsWith("#")) {
                        int index = line.indexOf('=');
                        if (index > 0) {
                            String key = line.substring(0, index).trim();
                            String value = line.substring(index + 1).trim();
                            if (value.startsWith("\"") && value.endsWith("\"") && value.length() > 1) {
                                value = value.substring(1, value.length() - 1);
                            }
                            System.setProperty(key, value);
                        }
                    }
                });
                System.out.println("Loaded .env file.");
            }
        } catch (Exception e) {
            System.err.println("Could not load .env file: " + e.getMessage());
        }
    }

    public static String getGeminiApiKey() {
        String key = System.getenv("GEMINI_API_KEY");
        if (key == null || key.trim().isEmpty()) {
            key = System.getProperty("GEMINI_API_KEY");
        }
        return key;
    }
}

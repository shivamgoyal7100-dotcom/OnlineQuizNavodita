import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.Duration;

/**
 * GeminiClient — Calls Google Gemini 2.0 Flash API to generate quiz questions.
 * Uses java.net.http.HttpClient (built into Java 11+, zero external dependencies).
 */
public class GeminiClient {

    private static final String API_URL_2_0 =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent";

    private static final String API_URL_1_5 =
            "https://generativelanguage.googleapis.com/v1beta/models/gemini-flash-latest:generateContent";

    private static final HttpClient HTTP_CLIENT = HttpClient.newBuilder()
            .connectTimeout(Duration.ofSeconds(15))
            .build();

    /**
     * Generate quiz questions by calling the Gemini API.
     *
     * @param topic      The quiz topic entered by the user
     * @param difficulty "easy", "medium", or "hard"
     * @param apiKey     The user's Gemini API key
     * @param count      Number of questions to generate (min 15)
     * @return A JSON array string of question objects
     * @throws Exception on API errors or parse failures
     */
    public static String generateQuiz(String topic, String difficulty, String apiKey, int count)
            throws Exception {

        String prompt   = buildPrompt(topic, difficulty, count);
        String reqBody  = buildRequestJson(prompt);

        System.out.println("[GeminiClient] Generating " + count + " questions for topic: \"" + topic
                + "\" | difficulty: " + difficulty);

        // Try Gemini 2.0 first
        try {
            System.out.println("[GeminiClient] Trying Gemini 2.5 Flash...");
            return callApi(API_URL_2_0, reqBody, apiKey);
        } catch (Exception e) {
            String errorMsg = e.getMessage();
            System.out.println("[GeminiClient] Gemini 2.5 failed: " + errorMsg + ". Retrying with Gemini Flash Latest...");
            try {
                return callApi(API_URL_1_5, reqBody, apiKey);
            } catch (Exception ex) {
                System.out.println("[GeminiClient] Gemini 1.5 also failed: " + ex.getMessage());
                throw new Exception("Gemini API call failed. Details: " + ex.getMessage());
            }
        }
    }

    private static String callApi(String endpoint, String reqBody, String apiKey) throws Exception {
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create(endpoint))
                .header("Content-Type", "application/json")
                .header("x-goog-api-key", apiKey.trim())
                .timeout(Duration.ofSeconds(60))
                .POST(HttpRequest.BodyPublishers.ofString(reqBody))
                .build();

        HttpResponse<String> response = HTTP_CLIENT.send(request, HttpResponse.BodyHandlers.ofString());

        System.out.println("[GeminiClient] Response status: " + response.statusCode());

        if (response.statusCode() == 400) {
            throw new Exception("Invalid API key or bad request (400). Please check your Gemini API key.");
        }
        if (response.statusCode() == 429) {
            throw new Exception("Rate limit exceeded (429). Please wait a moment or try a different key.");
        }
        if (response.statusCode() != 200) {
            throw new Exception("API returned HTTP " + response.statusCode() + ": " + response.body());
        }

        // Extract the text content from Gemini's response
        String rawText = JsonUtil.extractGeminiText(response.body());
        if (rawText == null || rawText.isBlank()) {
            throw new Exception("Gemini returned an empty response.");
        }

        // Strip markdown code fences if Gemini wrapped the JSON in them
        String cleaned = rawText
                .replaceAll("(?s)```json\\s*", "")
                .replaceAll("(?s)```\\s*",     "")
                .trim();

        // The cleaned string should be a JSON array — validate it starts/ends correctly
        if (!cleaned.startsWith("[")) {
            int start = cleaned.indexOf('[');
            int end   = cleaned.lastIndexOf(']');
            if (start >= 0 && end > start) {
                cleaned = cleaned.substring(start, end + 1);
            } else {
                throw new Exception("Response was not in the expected JSON array format.");
            }
        }

        System.out.println("[GeminiClient] Successfully extracted questions (" + cleaned.length() + " chars)");
        return cleaned;
    }

    // ── Private helpers ────────────────────────────────────────────────────

    private static String buildPrompt(String topic, String difficulty, int count) {
        String difficultyDesc;
        switch (difficulty.toLowerCase()) {
            case "easy":
                difficultyDesc = "Use basic, fundamental concepts suitable for beginners.";
                break;
            case "hard":
                difficultyDesc = "Use advanced, nuanced concepts requiring deep expertise.";
                break;
            default:
                difficultyDesc = "Use intermediate concepts requiring some prior knowledge.";
        }

        return "You are an expert quiz generator. Generate exactly " + count
                + " unique multiple-choice questions about the topic: \"" + topic + "\".\n\n"
                + "Difficulty level: " + difficulty + "\n"
                + difficultyDesc + "\n\n"
                + "Rules:\n"
                + "- Each question must have exactly 4 options.\n"
                + "- Only one option is correct.\n"
                + "- Questions must be factually accurate and relevant to the topic.\n"
                + "- Vary the question types (definition, application, comparison, example, etc.).\n"
                + "- Do NOT repeat similar questions.\n\n"
                + "Respond ONLY with a valid JSON array (no markdown, no code fences, no extra text):\n"
                + "[\n"
                + "  {\n"
                + "    \"question\": \"Question text here?\",\n"
                + "    \"options\": [\"Option A\", \"Option B\", \"Option C\", \"Option D\"],\n"
                + "    \"correctIndex\": 0,\n"
                + "    \"explanation\": \"Brief explanation of why this answer is correct.\"\n"
                + "  }\n"
                + "]\n"
                + "correctIndex is 0-based (0 = first option, 1 = second, etc.).";
    }

    private static String buildRequestJson(String prompt) {
        // Manually build the Gemini API request JSON
        return "{"
                + "\"contents\":[{\"parts\":[{\"text\":\"" + JsonUtil.escapeJson(prompt) + "\"}]}],"
                + "\"generationConfig\":{"
                + "\"temperature\":0.7,"
                + "\"topK\":40,"
                + "\"topP\":0.95,"
                + "\"maxOutputTokens\":8192"
                + "},"
                + "\"safetySettings\":["
                + "{\"category\":\"HARM_CATEGORY_HARASSMENT\",\"threshold\":\"BLOCK_NONE\"},"
                + "{\"category\":\"HARM_CATEGORY_HATE_SPEECH\",\"threshold\":\"BLOCK_NONE\"},"
                + "{\"category\":\"HARM_CATEGORY_SEXUALLY_EXPLICIT\",\"threshold\":\"BLOCK_NONE\"},"
                + "{\"category\":\"HARM_CATEGORY_DANGEROUS_CONTENT\",\"threshold\":\"BLOCK_NONE\"}"
                + "]"
                + "}";
    }
}

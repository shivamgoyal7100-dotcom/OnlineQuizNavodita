import com.sun.net.httpserver.HttpExchange;
import java.io.IOException;

/**
 * ApiHandler — Handles all /api/* HTTP routes.
 *
 * Routes:
 *   POST /api/generate  — Calls GeminiClient to generate quiz questions
 *   GET  /api/health    — Returns server health status
 */
public class ApiHandler {

    // ── /api/generate ──────────────────────────────────────────────────────

    /**
     * Handle POST /api/generate
     *
     * Request body (JSON):
     *   "topic":      "JavaScript",
     *   "difficulty": "medium",
     *   "count":      15          (optional, default 15)
     * }
     *
     * Response (JSON):
     * {
     *   "questions": [ { "question": "...", "options": [...], "correctIndex": 0, "explanation": "..." }, ... ]
     * }
     */
    public void handleGenerate(HttpExchange exchange) throws IOException {
        // Handle CORS preflight
        if ("OPTIONS".equals(exchange.getRequestMethod())) {
            QuizServer.sendResponse(exchange, 204, "", "text/plain");
            return;
        }

        // Only POST allowed
        if (!"POST".equals(exchange.getRequestMethod())) {
            QuizServer.sendResponse(exchange, 405,
                    JsonUtil.error("Method not allowed. Use POST."), "application/json");
            return;
        }

        try {
            // Read and parse request body
            String body = JsonUtil.readBody(exchange.getRequestBody());

            String topic      = JsonUtil.getString(body, "topic");
            String difficulty = JsonUtil.getString(body, "difficulty");
            int    count      = JsonUtil.getInt(body, "count", 15);

            // Validate required fields
            if (topic == null || topic.trim().isEmpty()) {
                QuizServer.sendResponse(exchange, 400,
                        JsonUtil.error("'topic' is required."), "application/json");
                return;
            }
            
            String apiKey = QuizServer.getGeminiApiKey();
            if (apiKey == null || apiKey.trim().isEmpty()) {
                QuizServer.sendResponse(exchange, 500,
                        JsonUtil.error("API key is not configured on the server. Please add GEMINI_API_KEY to .env file."), "application/json");
                return;
            }

            // Default difficulty
            if (difficulty == null || difficulty.trim().isEmpty()) {
                difficulty = "medium";
            }

            // Clamp count to reasonable range
            count = Math.max(10, Math.min(20, count));

            System.out.println("[ApiHandler] /api/generate | topic=" + topic
                    + " | difficulty=" + difficulty + " | count=" + count);

            // Call Gemini
            String questionsJson = GeminiClient.generateQuiz(
                    topic.trim(), difficulty.trim(), apiKey.trim(), count);

            // Return wrapped response
            QuizServer.sendResponse(exchange, 200,
                    JsonUtil.questionsResponse(questionsJson), "application/json");

        } catch (Exception e) {
            System.err.println("[ApiHandler] Error in /api/generate: " + e.getMessage());
            int statusCode = e.getMessage() != null && e.getMessage().contains("API key") ? 401 : 500;
            QuizServer.sendResponse(exchange, statusCode,
                    JsonUtil.error(e.getMessage() != null ? e.getMessage() : "An unexpected error occurred."),
                    "application/json");
        }
    }

    // ── /api/health ────────────────────────────────────────────────────────

    /**
     * Handle GET /api/health
     * Simple liveness check so the React app can confirm the Java server is running.
     */
    public void handleHealth(HttpExchange exchange) throws IOException {
        if ("OPTIONS".equals(exchange.getRequestMethod())) {
            QuizServer.sendResponse(exchange, 204, "", "text/plain");
            return;
        }
        QuizServer.sendResponse(exchange, 200,
                "{\"status\":\"ok\",\"server\":\"QuizAI Java Backend\",\"version\":\"1.0\"}",
                "application/json");
    }
}

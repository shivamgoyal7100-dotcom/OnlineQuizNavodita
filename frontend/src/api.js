/**
 * api.js — Frontend API client for the QuizAI Java backend.
 *
 * Calls the Java HTTP server (port 8080) via Vite's dev proxy (configured in vite.config.js).
 * In production, all requests go to the same origin.
 *
 * Replaces gemini.js — same exported interface so App.jsx needs only its import updated.
 */

const API_BASE = '/api';

/**
 * Generate quiz questions via the Java backend (which calls Gemini AI).
 *
 * @param {string} topic      - The quiz topic
 * @param {string} difficulty - 'easy' | 'medium' | 'hard'
 * @param {number} count      - Number of questions (default 15)
 * @returns {Promise<Array>}  - Array of validated question objects
 */
export async function generateQuiz(topic, difficulty, count = 15) {
  if (!topic || !topic.trim()) {
    throw new Error('Please enter a topic to generate quiz questions.');
  }

  let response;
  try {
    response = await fetch(`${API_BASE}/generate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        topic:      topic.trim(),
        difficulty: difficulty || 'medium',
        count,
      }),
    });
  } catch (networkErr) {
    throw new Error(
      'Cannot connect to the Java backend. Make sure you ran compile.bat and run.bat first (port 8080).'
    );
  }

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const message = errorData?.error || `Server error: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();

  if (!data.questions || !Array.isArray(data.questions)) {
    throw new Error('Invalid response from server. Please try again.');
  }

  // Validate and normalise each question
  const validated = data.questions
    .filter(
      (q) =>
        q.question &&
        Array.isArray(q.options) &&
        q.options.length === 4 &&
        typeof q.correctIndex === 'number'
    )
    .map((q, i) => ({
      id:           i,
      question:     String(q.question).trim(),
      options:      q.options.map((o) => String(o).trim()),
      correctIndex: Math.max(0, Math.min(3, Math.round(q.correctIndex))),
      explanation:  q.explanation ? String(q.explanation).trim() : 'No explanation provided.',
    }));

  if (validated.length < 10) {
    throw new Error(
      `Only ${validated.length} valid questions were generated. Please try again.`
    );
  }

  return validated;
}

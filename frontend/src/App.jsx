import { useState, useEffect, useRef, useCallback } from 'react';
import { questionsDb } from './questionsDb';
import { generateQuiz } from './api';

// ─── Constants ────────────────────────────────────────────────────────────────
const DIFFICULTIES = [
  { value: 'easy',   label: 'Easy',   icon: '🌱', desc: 'Fundamentals' },
  { value: 'medium', label: 'Medium', icon: '⚡', desc: 'Intermediate' },
  { value: 'hard',   label: 'Hard',   icon: '🔥', desc: 'Advanced' },
];

const POPULAR_TOPICS = [
  'JavaScript', 'Python', 'React', 'General Science', 'World History'
];

const SCREENS = { HOME: 'home', LOADING: 'loading', QUIZ: 'quiz', RESULT: 'result' };

// ─── Score badge helper ───────────────────────────────────────────────────────
function getBadge(pct) {
  if (pct >= 90) return { label: 'Genius! 🏆', cls: 'badge-gold',    msg: 'Outstanding performance! You nailed it!' };
  if (pct >= 75) return { label: 'Expert! 🥈', cls: 'badge-silver',  msg: 'Great job! You really know your stuff.' };
  if (pct >= 60) return { label: 'Good! 🥉',   cls: 'badge-bronze',  msg: 'Solid effort! A little more practice and you\'ll ace it.' };
  if (pct >= 40) return { label: 'Learning 📚', cls: 'badge-blue',   msg: 'Keep going! Review the explanations to improve.' };
  return              { label: 'Try Again 💪', cls: 'badge-gray',    msg: 'Don\'t give up! Every expert started as a beginner.' };
}

// ─── Loading dots ─────────────────────────────────────────────────────────────
function LoadingDots() {
  return <span className="loading-dots"><span/><span/><span/></span>;
}

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  // Quiz state
  const [screen, setScreen]       = useState(SCREENS.HOME);
  const [topic, setTopic]         = useState('');
  const [difficulty, setDifficulty] = useState('medium');
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers]     = useState({});   // { questionIndex: selectedOptionIndex }
  const [revealed, setRevealed]   = useState({});   // answers shown after submit
  const [currentQ, setCurrentQ]   = useState(0);
  const [error, setError]         = useState('');
  const [loadingMsg, setLoadingMsg] = useState('');
  const [quizTopic, setQuizTopic] = useState('');
  const [quizDifficulty, setQuizDifficulty] = useState('medium');

  // Timer
  const [elapsed, setElapsed]   = useState(0);
  const timerRef                = useRef(null);
  const inputRef                = useRef(null);

  // Open API key modal if they attempt custom generation and key is missing

  // Timer logic — starts when quiz begins
  useEffect(() => {
    if (screen === SCREENS.QUIZ) {
      setElapsed(0);
      timerRef.current = setInterval(() => setElapsed(s => s + 1), 1000);
    } else {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [screen]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  // ── Generate quiz ─────────────────────────────────────────────────────────
  const handleGenerate = useCallback(async () => {
    const trimmedTopic = topic.trim();
    if (!trimmedTopic) { setError('Please enter a topic first.'); return; }

    const cleanTopic = trimmedTopic.toLowerCase();
    let categoryKey = null;

    // Check if topic matches a built-in category
    if (cleanTopic.includes('javascript') || cleanTopic === 'js') {
      categoryKey = 'javascript';
    } else if (cleanTopic.includes('python') || cleanTopic === 'py') {
      categoryKey = 'python';
    } else if (cleanTopic.includes('react')) {
      categoryKey = 'react';
    } else if (cleanTopic.includes('science') || cleanTopic.includes('physics') || cleanTopic.includes('chemistry') || cleanTopic.includes('biology')) {
      categoryKey = 'science';
    } else if (cleanTopic.includes('history') || cleanTopic.includes('world') || cleanTopic.includes('war') || cleanTopic.includes('rome') || cleanTopic.includes('egypt') || cleanTopic.includes('geography')) {
      categoryKey = 'history';
    }

    if (categoryKey) {
      // Local Offline mode
      setError('');
      setScreen(SCREENS.LOADING);
      setLoadingMsg('Locating offline questions…');

      const msgs = [
        'Configuring difficulty…',
        'Loading explanations…',
        'Readying the board…',
      ];
      let mi = 0;
      const interval = setInterval(() => {
        mi = (mi + 1) % msgs.length;
        setLoadingMsg(msgs[mi]);
      }, 300);

      setTimeout(() => {
        clearInterval(interval);
        const diffKey = difficulty.toLowerCase();
        const questionsList = questionsDb[categoryKey][diffKey] || questionsDb[categoryKey]['medium'];

        const shuffled = [...questionsList]
          .sort(() => Math.random() - 0.5)
          .map((q, i) => ({
            id: i,
            ...q
          }));

        setQuestions(shuffled);
        setQuizTopic(trimmedTopic);
        setQuizDifficulty(difficulty);
        setAnswers({});
        setRevealed({});
        setCurrentQ(0);
        setScreen(SCREENS.QUIZ);
      }, 1000);

    } else {
      // Custom topic requires Gemini API

      setError('');
      setScreen(SCREENS.LOADING);
      setLoadingMsg('Connecting to Gemini AI…');

      const msgs = [
        'Analyzing custom topic…',
        'Crafting unique questions…',
        'Checking accuracy…',
        'Adding explanations…',
        'Almost ready…',
      ];
      let mi = 0;
      const interval = setInterval(() => {
        mi = (mi + 1) % msgs.length;
        setLoadingMsg(msgs[mi]);
      }, 1800);

      try {
        const qs = await generateQuiz(trimmedTopic, difficulty, 15);
        clearInterval(interval);
        setQuestions(qs);
        setQuizTopic(trimmedTopic);
        setQuizDifficulty(difficulty);
        setAnswers({});
        setRevealed({});
        setCurrentQ(0);
        setScreen(SCREENS.QUIZ);
      } catch (err) {
        clearInterval(interval);
        setError(err.message || 'Something went wrong. Please try again.');
        setScreen(SCREENS.HOME);
      }
    }
  }, [topic, difficulty]);

  // ── Handle Enter key on topic input ──────────────────────────────────────
  const handleKeyDown = (e) => { if (e.key === 'Enter') handleGenerate(); };

  // ── Select answer ─────────────────────────────────────────────────────────
  const selectAnswer = (qIdx, optIdx) => {
    if (revealed[qIdx] !== undefined) return; // don't allow change after reveal
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  // ── Navigate questions ────────────────────────────────────────────────────
  const goNext = () => setCurrentQ(q => Math.min(q + 1, questions.length - 1));
  const goPrev = () => setCurrentQ(q => Math.max(q - 1, 0));

  // ── Submit quiz ───────────────────────────────────────────────────────────
  const submitQuiz = () => {
    // Reveal all answers
    const rev = {};
    questions.forEach((_, i) => { rev[i] = true; });
    setRevealed(rev);
    setScreen(SCREENS.RESULT);
  };

  // ── Compute results ───────────────────────────────────────────────────────
  const score     = questions.filter((q, i) => answers[i] === q.correctIndex).length;
  const total     = questions.length;
  const pct       = total > 0 ? Math.round((score / total) * 100) : 0;
  const badge     = getBadge(pct);
  const answered  = Object.keys(answers).length;

  // ── Reset to home ──────────────────────────────────────────────────────────
  const goHome = () => {
    setScreen(SCREENS.HOME);
    setQuestions([]);
    setAnswers({});
    setRevealed({});
    setCurrentQ(0);
    setError('');
  };

  // ── Retry same topic ──────────────────────────────────────────────────────
  const retry = () => {
    setTopic(quizTopic);
    setDifficulty(quizDifficulty);
    goHome();
  };

  // ─── Render ───────────────────────────────────────────────────────────────
  return (
    <>
      <div className="app">
        {/* ── Nav ── */}
        <nav className="nav">
          <button className="nav-logo" onClick={goHome} id="nav-logo">
            <span className="logo-icon">⚡</span>
            <span>Yours Quiz</span>
          </button>
          <div className="nav-actions">
            {screen === SCREENS.QUIZ && (
              <div className="nav-timer" aria-live="polite">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                {formatTime(elapsed)}
              </div>
            )}
          </div>
        </nav>

        {/* ════════════════════════════════════════
            HOME SCREEN
        ════════════════════════════════════════ */}
        {screen === SCREENS.HOME && (
          <main className="home-screen">
            {/* Hero */}
            <section className="hero">
              <div className="hero-badge">✨ Dynamic AI &amp; Offline Modes</div>
              <h1 className="hero-title">
                Quiz yourself on<br />
                <span className="gradient-text">anything, instantly</span>
              </h1>
              <p className="hero-sub">
                Type any topic — from Quantum Physics to Ancient Rome — and get 15 hand-crafted questions with instant AI grading.
              </p>

              {/* Topic input */}
              <div className="search-card">
                <div className="search-input-wrap">
                  <svg className="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                  </svg>
                  <input
                    ref={inputRef}
                    id="topic-input"
                    type="text"
                    value={topic}
                    onChange={e => { setTopic(e.target.value); setError(''); }}
                    onKeyDown={handleKeyDown}
                    placeholder="Enter any topic (e.g. Black Holes, React Hooks, WW2…)"
                    autoFocus
                    autoComplete="off"
                  />
                  {topic && (
                    <button className="clear-btn" onClick={() => { setTopic(''); inputRef.current?.focus(); }} aria-label="Clear">
                      ✕
                    </button>
                  )}
                </div>

                {/* Difficulty selector */}
                <div className="difficulty-row">
                  <span className="difficulty-label">Difficulty:</span>
                  <div className="difficulty-pills">
                    {DIFFICULTIES.map(d => (
                      <button
                        key={d.value}
                        id={`difficulty-${d.value}`}
                        className={`pill ${difficulty === d.value ? 'pill-active' : ''}`}
                        onClick={() => setDifficulty(d.value)}
                      >
                        <span>{d.icon}</span>
                        <span>{d.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {error && (
                  <div className="error-banner" role="alert">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {error}
                  </div>
                )}

                <button
                  id="generate-quiz-btn"
                  className="btn-primary generate-btn"
                  onClick={handleGenerate}
                  disabled={!topic.trim()}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" width="20" height="20" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                  </svg>
                  Generate Quiz
                </button>
              </div>

              {/* Popular topics */}
              <div className="popular">
                <span className="popular-label">Popular topics:</span>
                <div className="popular-chips">
                  {POPULAR_TOPICS.map(t => (
                    <button
                      key={t}
                      className="chip"
                      id={`topic-chip-${t.replace(/\s+/g, '-').toLowerCase()}`}
                      onClick={() => { setTopic(t); setError(''); }}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </section>

            {/* Feature cards */}
            <section className="features">
              {[
                { icon: '⚡', title: 'Instant Results', desc: 'Get your score and per-question explanations the moment you submit.' },
                { icon: '🎯', title: '15 Questions', desc: 'A perfect length — comprehensive enough to test, short enough to finish.' },
                { icon: '📊', title: '3 Difficulty Levels', desc: 'Easy, Medium, or Hard — tailored to your expertise level.' },
              ].map(f => (
                <div className="feature-card" key={f.title}>
                  <div className="feature-icon">{f.icon}</div>
                  <h3>{f.title}</h3>
                  <p>{f.desc}</p>
                </div>
              ))}
            </section>
          </main>
        )}

        {/* ════════════════════════════════════════
            LOADING SCREEN
        ════════════════════════════════════════ */}
        {screen === SCREENS.LOADING && (
          <main className="loading-screen">
            <div className="loading-card">
              <div className="spinner-wrap">
                <div className="spinner" />
                <div className="spinner-inner" />
              </div>
              <h2>Generating your quiz…</h2>
              <p className="loading-topic">Topic: <strong>{topic}</strong> · {DIFFICULTIES.find(d => d.value === difficulty)?.icon} {difficulty}</p>
              <p className="loading-msg">{loadingMsg}<LoadingDots /></p>
              <div className="loading-steps">
                {['Connecting to Gemini', 'Writing 15 questions', 'Adding explanations', 'Final check'].map((s, i) => (
                  <div key={s} className="loading-step" style={{ animationDelay: `${i * 0.4}s` }}>
                    <div className="step-dot" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </main>
        )}

        {/* ════════════════════════════════════════
            QUIZ SCREEN
        ════════════════════════════════════════ */}
        {screen === SCREENS.QUIZ && questions.length > 0 && (
          <main className="quiz-screen">
            {/* Header */}
            <div className="quiz-top">
              <div className="quiz-meta">
                <h2 className="quiz-title">{quizTopic}</h2>
                <div className="quiz-tags">
                  <span className="tag">{DIFFICULTIES.find(d => d.value === quizDifficulty)?.icon} {quizDifficulty}</span>
                  <span className="tag">📝 {questions.length} questions</span>
                  <span className="tag">✅ {answered}/{questions.length} answered</span>
                </div>
              </div>
              <button className="btn-ghost" id="quit-quiz" onClick={goHome}>✕ Quit</button>
            </div>

            {/* Progress bar */}
            <div className="progress-bar-wrap" aria-label={`Progress: ${currentQ + 1} of ${questions.length}`}>
              <div className="progress-bar" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>

            {/* Question card */}
            <div className="question-area">
              <div className="q-number">Question {currentQ + 1} of {questions.length}</div>
              <h3 className="q-text">{questions[currentQ].question}</h3>

              <div className="options-grid">
                {questions[currentQ].options.map((opt, oi) => {
                  const selected = answers[currentQ] === oi;
                  return (
                    <button
                      key={oi}
                      id={`option-${currentQ}-${oi}`}
                      className={`option-btn ${selected ? 'option-selected' : ''}`}
                      onClick={() => selectAnswer(currentQ, oi)}
                    >
                      <span className="option-letter">{String.fromCharCode(65 + oi)}</span>
                      <span className="option-text">{opt}</span>
                      {selected && (
                        <svg className="option-check" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" width="16" height="16" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Navigation */}
              <div className="q-nav">
                <button
                  className="btn-ghost"
                  id="prev-question"
                  onClick={goPrev}
                  disabled={currentQ === 0}
                >
                  ← Previous
                </button>

                <div className="q-dots">
                  {questions.map((_, i) => (
                    <button
                      key={i}
                      className={`q-dot ${i === currentQ ? 'dot-active' : ''} ${answers[i] !== undefined ? 'dot-answered' : ''}`}
                      onClick={() => setCurrentQ(i)}
                      aria-label={`Go to question ${i + 1}`}
                      id={`goto-q-${i + 1}`}
                    />
                  ))}
                </div>

                {currentQ < questions.length - 1 ? (
                  <button className="btn-primary" id="next-question" onClick={goNext}>
                    Next →
                  </button>
                ) : (
                  <button
                    className="btn-primary btn-submit"
                    id="submit-quiz"
                    onClick={submitQuiz}
                    disabled={answered < questions.length}
                    title={answered < questions.length ? `Answer all questions first (${questions.length - answered} remaining)` : ''}
                  >
                    {answered < questions.length
                      ? `Submit (${questions.length - answered} left)`
                      : '🚀 Submit Quiz'}
                  </button>
                )}
              </div>

              {answered < questions.length && currentQ === questions.length - 1 && (
                <p className="unanswered-hint">
                  ⚠️ You have {questions.length - answered} unanswered question{questions.length - answered !== 1 ? 's' : ''}. Use the dots above to navigate back.
                </p>
              )}
            </div>
          </main>
        )}

        {/* ════════════════════════════════════════
            RESULT SCREEN
        ════════════════════════════════════════ */}
        {screen === SCREENS.RESULT && (
          <main className="result-screen">
            {/* Score card */}
            <div className="result-hero">
              <div className={`result-badge ${badge.cls}`}>{badge.label}</div>
              <div className="score-circle-wrap">
                <svg className="score-svg" viewBox="0 0 120 120">
                  <circle cx="60" cy="60" r="52" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="8"/>
                  <circle
                    cx="60" cy="60" r="52" fill="none"
                    stroke="url(#scoreGrad)" strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 52}`}
                    strokeDashoffset={`${2 * Math.PI * 52 * (1 - pct / 100)}`}
                    transform="rotate(-90 60 60)"
                    style={{ transition: 'stroke-dashoffset 1.2s cubic-bezier(.4,0,.2,1)' }}
                  />
                  <defs>
                    <linearGradient id="scoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#a78bfa"/>
                      <stop offset="100%" stopColor="#38bdf8"/>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="score-text">
                  <span className="score-num">{pct}%</span>
                  <span className="score-frac">{score}/{total}</span>
                </div>
              </div>
              <p className="result-msg">{badge.msg}</p>
              <div className="result-meta-row">
                <span className="result-meta-chip">📚 {quizTopic}</span>
                <span className="result-meta-chip">{DIFFICULTIES.find(d => d.value === quizDifficulty)?.icon} {quizDifficulty}</span>
                <span className="result-meta-chip">⏱ {formatTime(elapsed)}</span>
              </div>

              <div className="result-actions">
                <button className="btn-primary" id="retry-quiz" onClick={retry}>🔄 Try Again</button>
                <button className="btn-secondary" id="new-topic" onClick={goHome}>🏠 New Topic</button>
              </div>
            </div>

            {/* Detailed breakdown */}
            <div className="breakdown">
              <h3 className="breakdown-title">Question Breakdown</h3>
              <div className="breakdown-stats">
                <div className="bstat bstat-correct">
                  <span className="bstat-num">{score}</span>
                  <span>Correct</span>
                </div>
                <div className="bstat bstat-wrong">
                  <span className="bstat-num">{total - score}</span>
                  <span>Wrong</span>
                </div>
                <div className="bstat bstat-pct">
                  <span className="bstat-num">{pct}%</span>
                  <span>Score</span>
                </div>
              </div>

              <div className="q-breakdown-list">
                {questions.map((q, i) => {
                  const userAns = answers[i];
                  const correct = userAns === q.correctIndex;
                  const skipped = userAns === undefined;
                  return (
                    <div
                      key={i}
                      className={`qr-card ${correct ? 'qr-correct' : skipped ? 'qr-skipped' : 'qr-wrong'}`}
                    >
                      <div className="qr-header">
                        <span className="qr-num">Q{i + 1}</span>
                        <span className="qr-status">
                          {skipped ? '⏭ Skipped' : correct ? '✅ Correct' : '❌ Wrong'}
                        </span>
                      </div>
                      <p className="qr-question">{q.question}</p>
                      <div className="qr-options">
                        {q.options.map((opt, oi) => {
                          const isCorrect = oi === q.correctIndex;
                          const isUser    = oi === userAns;
                          return (
                            <div
                              key={oi}
                              className={`qr-option ${isCorrect ? 'qro-correct' : isUser && !isCorrect ? 'qro-wrong' : ''}`}
                            >
                              <span className="qro-letter">{String.fromCharCode(65 + oi)}</span>
                              <span>{opt}</span>
                              {isCorrect && <span className="qro-badge">✓ Correct</span>}
                              {isUser && !isCorrect && <span className="qro-badge qro-badge-wrong">✗ Your answer</span>}
                            </div>
                          );
                        })}
                      </div>
                      <div className="qr-explanation">
                        <strong>💡 Explanation:</strong> {q.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bottom-actions">
                <button className="btn-primary" id="retry-bottom" onClick={retry}>🔄 Try Same Topic</button>
                <button className="btn-secondary" id="new-topic-bottom" onClick={goHome}>🏠 Choose New Topic</button>
              </div>
            </div>
          </main>
        )}
      </div>
    </>
  );
}

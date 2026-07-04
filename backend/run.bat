@echo off
echo ╔══════════════════════════════════════════╗
echo ║      QuizAI — Starting Java Server       ║
echo ╚══════════════════════════════════════════╝
echo.

:: Check compiled classes exist
if not exist out\QuizServer.class (
    echo ERROR: Server not compiled yet. Run 'compile.bat' first.
    pause
    exit /b 1
)

echo  Server starting at http://localhost:8080
echo  Press Ctrl+C to stop.
echo.

java -cp out QuizServer

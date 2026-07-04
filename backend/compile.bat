@echo off
echo ╔══════════════════════════════════════════╗
echo ║      QuizAI — Compiling Java Server      ║
echo ╚══════════════════════════════════════════╝
echo.

:: Check Java is installed
java -version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Java is not installed or not in PATH.
    echo Download Java 11+ from https://adoptium.net
    pause
    exit /b 1
)

:: Create output directory
if not exist out mkdir out

:: Compile all Java source files
javac -d out src\QuizServer.java src\GeminiClient.java src\ApiHandler.java src\JsonUtil.java

if %errorlevel% == 0 (
    echo.
    echo  Compilation successful!
    echo  Run 'run.bat' to start the server.
) else (
    echo.
    echo  Compilation FAILED. Check errors above.
    pause
    exit /b 1
)
echo.
pause

@echo off
echo ========================================
echo Safarihoo Website - GitHub Deployment
echo ========================================
echo.

echo Step 1: Checking if Git is installed...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git is not installed!
    echo Please download and install Git from: https://git-scm.com/download/win
    echo Then run this script again.
    pause
    exit /b 1
)
echo Git is installed ✓
echo.

echo Step 2: Initializing Git repository...
git init
echo.

echo Step 3: Adding all files to Git...
git add .
echo.

echo Step 4: Creating initial commit...
git commit -m "Initial commit - Safarihoo travel website"
echo.

echo ========================================
echo NEXT STEPS:
echo ========================================
echo 1. Create a GitHub repository at: https://github.com
echo 2. Name it: safarihoo-website
echo 3. Make it PUBLIC (required for free hosting)
echo 4. Copy the repository URL
echo 5. Run these commands (replace YOUR_USERNAME):
echo.
echo    git remote add origin https://github.com/YOUR_USERNAME/safarihoo-website.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 6. Enable GitHub Pages in repository settings
echo.
echo Your website will be live at: https://YOUR_USERNAME.github.io/safarihoo-website
echo ========================================
pause 
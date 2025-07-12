Write-Host "Starting Safarihoo Website Development Server..." -ForegroundColor Green
Write-Host ""
Write-Host "The website will be available at: http://localhost:8000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""
try {
    python -m http.server 8000
}
catch {
    Write-Host "Error: Python is not installed or not in PATH" -ForegroundColor Red
    Write-Host "Please install Python 3.7+ and try again" -ForegroundColor Red
    Read-Host "Press Enter to exit"
} 
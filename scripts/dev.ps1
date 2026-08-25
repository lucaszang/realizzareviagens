# Inicia o site e abre o navegador automaticamente
$ErrorActionPreference = "Stop"

$projectRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
Set-Location (Join-Path $projectRoot "..")

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  $env:PATH += ";C:\Program Files\nodejs"
}

if (-not (Get-Command npm -ErrorAction SilentlyContinue)) {
  Write-Host ""
  Write-Host "Node.js/npm nao encontrado no PATH." -ForegroundColor Red
  Write-Host "Instale em https://nodejs.org ou adicione C:\Program Files\nodejs ao PATH." -ForegroundColor Yellow
  exit 1
}

$port = 3003
$url = "http://localhost:$port"

$existing = Get-NetTCPConnection -LocalPort $port -State Listen -ErrorAction SilentlyContinue
foreach ($conn in $existing) {
  Stop-Process -Id $conn.OwningProcess -Force -ErrorAction SilentlyContinue
  Write-Host "Servidor antigo encerrado (porta $port)." -ForegroundColor Yellow
}

Write-Host ""
Write-Host "Realizzare Viagens" -ForegroundColor Magenta
Write-Host "Iniciando em $url ..." -ForegroundColor Cyan
Write-Host "Para parar o servidor: Ctrl+C" -ForegroundColor DarkGray
Write-Host ""

Start-Job -ScriptBlock {
  param($target)
  for ($i = 0; $i -lt 30; $i++) {
    Start-Sleep -Seconds 1
    try {
      $response = Invoke-WebRequest -Uri $target -UseBasicParsing -TimeoutSec 2
      if ($response.StatusCode -eq 200) {
        Start-Process $target
        return
      }
    } catch {
      continue
    }
  }
} -ArgumentList $url | Out-Null

npm run dev

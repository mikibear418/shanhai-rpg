# Windows PowerShell 5.1. OneCore voice tokens are read only; no registry changes.
$ErrorActionPreference = 'Stop'
$lines = Get-Content -LiteralPath (Join-Path $PSScriptRoot 'voice-lines.json') -Raw -Encoding UTF8 | ConvertFrom-Json
foreach ($line in $lines) {
  $voice = New-Object -ComObject SAPI.SpVoice
  $token = New-Object -ComObject SAPI.SpObjectToken
  $token.SetId('HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech_OneCore\Voices\Tokens\MSTTS_V110_zhTW_' + $line.voice + 'M')
  $voice.Voice = $token
  $voice.Rate = [int]$line.rate
  $voice.Volume = 100
  $stream = New-Object -ComObject SAPI.SpMemoryStream
  $stream.Format.Type = 22
  $voice.AudioOutputStream = $stream
  $text = [Security.SecurityElement]::Escape($line.text)
  $xml = '<pitch middle="' + $line.pitch + '">' + $text + '</pitch>'
  $voice.Speak($xml,8) | Out-Null
  $record = @{ id=$line.id; data=[Convert]::ToBase64String($stream.GetData()); format='pcm22050mono16' }
  ConvertTo-Json -InputObject $record -Compress
  [Runtime.InteropServices.Marshal]::ReleaseComObject($stream) | Out-Null
  [Runtime.InteropServices.Marshal]::ReleaseComObject($voice) | Out-Null
}

$ErrorActionPreference = 'Stop'

$ffmpeg = Get-ChildItem "$env:LOCALAPPDATA\Microsoft\WinGet\Packages\Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe" -Recurse -Filter ffmpeg.exe |
    Select-Object -First 1 -ExpandProperty FullName

if (-not $ffmpeg) {
    throw 'FFmpeg executable was not found.'
}

$root = Split-Path -Parent $PSScriptRoot
$assets = Join-Path $root 'reel\assets'
$segments = Join-Path $root 'reel\segments'
$output = Join-Path $root 'reel\fromis9-editorial-reel.mp4'

New-Item -ItemType Directory -Force -Path $segments | Out-Null

function New-StillSegment {
    param(
        [string]$InputFile,
        [string]$OutputFile,
        [double]$Duration,
        [string]$Filter
    )

    & $ffmpeg -y -loglevel error -loop 1 -i (Join-Path $assets $InputFile) `
        -t $Duration -vf "$Filter,fps=30,format=yuv420p" `
        -an -c:v libx264 -preset medium -crf 17 -movflags +faststart `
        (Join-Path $segments $OutputFile)
}

$verticalCrop = 'crop=506:900:45:0,scale=1080:1920:flags=lanczos'
$desktopFrame = 'scale=1080:675:flags=lanczos,pad=1080:1920:0:622:color=0xf4f1ea'
$verticalFrame = 'scale=1080:1920:flags=lanczos'

New-StillSegment 'intro.png' '00-intro.mp4' 0.9 $verticalFrame
New-StillSegment 'home-desktop-01.png' '01-member.mp4' 0.32 $verticalCrop
New-StillSegment 'home-desktop-02.png' '02-member.mp4' 0.32 $verticalCrop
New-StillSegment 'home-desktop-03.png' '03-member.mp4' 0.32 $verticalCrop
New-StillSegment 'home-desktop-04.png' '04-member.mp4' 0.32 $verticalCrop
New-StillSegment 'home-mobile.png' '05-mobile.mp4' 1.2 $verticalFrame
New-StillSegment 'home-desktop-01.png' '06-grid.mp4' 1.1 $desktopFrame

& $ffmpeg -y -loglevel error -framerate 10 -start_number 0 `
    -i (Join-Path $assets 'hover-%02d.png') -t 1.2 `
    -vf "$desktopFrame,fps=30,format=yuv420p" -an -c:v libx264 -preset medium -crf 17 `
    (Join-Path $segments '07-hover.mp4')

New-StillSegment 'about.png' '08-about.mp4' 1.1 $desktopFrame
New-StillSegment 'fantube.png' '09-fantube.mp4' 0.9 $desktopFrame
New-StillSegment 'discography.png' '10-discography.mp4' 0.6 $desktopFrame
New-StillSegment 'outro.png' '11-outro.mp4' 2.2 $verticalFrame

$segmentFiles = Get-ChildItem $segments -Filter '*.mp4' | Sort-Object Name
$concatFile = Join-Path $segments 'concat.txt'
$segmentFiles | ForEach-Object { "file '$($_.FullName.Replace("'", "''"))'" } |
    Set-Content -Path $concatFile -Encoding ascii

& $ffmpeg -y -loglevel error -f concat -safe 0 -i $concatFile `
    -an -c:v libx264 -preset medium -crf 17 -pix_fmt yuv420p -movflags +faststart $output

if ($LASTEXITCODE -ne 0) {
    throw "FFmpeg concat failed with exit code $LASTEXITCODE."
}

Write-Output $output

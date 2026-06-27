# fromis_9 Editorial Reel

## Final export

- `fromis9-editorial-reel.mp4`
- 1080 × 1920 (9:16)
- H.264 / 30 fps / no audio
- 10.53 seconds

## Timeline

- 00.00–00.90: editorial title card
- 00.90–02.18: randomized featured-member cuts
- 02.18–03.38: mobile editorial layout
- 03.38–04.48: desktop grid overview
- 04.48–05.68: hover image transition
- 05.68–08.28: about, fantube, and discography cuts
- 08.28–10.53: developer/tech-stack end card

## Source assets

- `assets/`: captured stills and hover animation frames
- `clips/home-hover-interaction.mp4`: isolated hover interaction
- `preview-contact-sheet.jpg`: one-frame-per-second overview

## Rebuild

```powershell
node scripts/capture-reel.mjs
powershell.exe -ExecutionPolicy Bypass -File scripts/build-reel.ps1
```

Add music inside Instagram so the reel can use platform audio and retain a clean master export.

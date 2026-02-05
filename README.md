# EmotionTunes

EmotionTunes is a static web app that detects facial expressions locally in your browser and plays mood-based song previews across Hindi, English, Tamil, Malayalam, Telugu, Kannada, and Punjabi.

## Features
- Facial-expression detection with face-api.js (runs in the browser, no uploads).
- Manual mood override for quick testing.
- Multilingual playlists with audio previews per mood.
- Spotify-inspired dark UI with responsive layout.

## How to run locally
1. Open a terminal in this repo:
   ```bash
   cd /workspace/WTFDEENS_Stem
   ```
2. Start a simple static server:
   ```bash
   python -m http.server 8000
   ```
3. Open the app in your browser:
   ```
   http://localhost:8000/
   ```

## How to stop the local server
- In the same terminal window, press **Ctrl + C** to stop the server.

> Tip: If the camera permission prompt does not appear, use the manual mood selector in the sidebar.

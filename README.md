# 24 Moments With You ❤️

A romantic, interactive frontend-only Valentine experience: one emotional step per photo, smooth scroll storytelling, love letter, reasons cards, secret message, and optional music.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173). Your photos in the **`pics/`** folder are served automatically in dev; for **production** they are copied into `public/pics` when you run `npm run build`.

## Personalization

- **Captions & text**  
  Edit `src/data/moments.js`:  
  - `MOMENTS` — one caption per of the 24 moments (phases: attraction → moments → deeper → climax).  
  - `REASONS_I_LOVE_YOU` — “Reasons I love you” card texts.  
  - `LOVE_LETTER` — full love letter (typing animation).  
  - `SECRET_MESSAGE` — text revealed after “Open my heart”.

- **Photos**  
  Place your images in **`pics/`**. The app uses 24 “moments” and cycles over your files (e.g. 12 photos used twice). To map specific photos to specific moments, change the `PHOTOS` array and/or `getPhotoForMoment` in `src/data/moments.js`.

- **Music**  
  In `src/components/MusicPlayer.jsx`, set `MUSIC_URL` to your own instrumental track (e.g. soft piano, lo-fi). Keep a mute toggle; the component already has one.

## Build & deploy

```bash
npm run build
```

Output is in **`dist/`**. Deploy that folder to Netlify (drag-and-drop) or Vercel for a live link.

## Stack

- React 18 + Vite  
- Tailwind CSS (romantic theme: blush, rose, gold, dark background)  
- Framer Motion (scroll-triggered and interaction animations)  
- Fonts: Playfair Display + Poppins (via Google Fonts)

Enjoy building your story.

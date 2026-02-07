import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// File in public folder – use base URL so it works in dev and production
const AUDIO_FILENAME = 'WIZ_BOYY_TEEYAH_Nigeria_-_Lovinjitis_(mp3.pm).mp3';
const MUSIC_URL = (() => {
  const base = import.meta.env.BASE_URL;
  return base.endsWith('/') ? `${base}${AUDIO_FILENAME}` : `${base}/${AUDIO_FILENAME}`;
})();

export default function MusicPlayer() {
  const audioRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      const playPromise = audio.play();
      if (playPromise && typeof playPromise.catch === 'function') {
        playPromise.catch((err) => {
          console.warn('Audio play failed:', err);
        });
      }
      setPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        id="romantic-music"
        src={MUSIC_URL}
        loop
        preload="metadata"
        onEnded={() => setPlaying(false)}
        onError={(e) => console.warn('Audio load error:', e)}
      />
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button
          type="button"
          onClick={toggle}
          className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-romantic-deeper/80 backdrop-blur-md border border-romantic-rose/30 text-romantic-blush hover:bg-romantic-rose/20 hover:border-romantic-rose/50 transition-all shadow-romantic-soft"
          aria-label={playing ? 'Pause music' : 'Play music'}
        >
          <AnimatePresence mode="wait">
            {playing ? (
              <motion.span key="on" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                ♫ Playing
              </motion.span>
            ) : (
              <motion.span key="off" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                ♪ Play
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </motion.div>
    </>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECRET_MESSAGE } from '../data/moments';
import HeartExplosion from './HeartExplosion';

export default function SecretRevealSection({ onHeartBurst }) {
  const [revealed, setRevealed] = useState(false);

  const handleOpen = () => {
    setRevealed(true);
    onHeartBurst?.();
  };

  return (
    <section className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg px-6 py-20 overflow-hidden">
      <HeartExplosion trigger={revealed} centerX="50%" centerY="50%" />
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button"
            className="flex flex-col items-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.25 }}
          >
            <motion.p
              className="font-sans text-romantic-blush/80 text-center text-sm md:text-base max-w-xs"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              There’s something I don’t say enough.
            </motion.p>
            <motion.button
              type="button"
              onClick={handleOpen}
              className="px-8 py-4 rounded-full font-display text-lg text-white bg-romantic-rose/40 border-2 border-romantic-rose/60 hover:bg-romantic-rose/50 hover:border-romantic-rose shadow-romantic-glow transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Open my heart ♥
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="message"
            className="max-w-md text-center relative z-10"
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          >
            <p className="font-display text-2xl md:text-3xl text-romantic-blush leading-relaxed">
              {SECRET_MESSAGE}
            </p>
            <motion.div
              className="flex justify-center gap-2 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="text-romantic-rose text-xl"
                  animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                >
                  ♥
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

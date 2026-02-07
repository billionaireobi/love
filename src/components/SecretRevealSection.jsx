import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SECRET_MESSAGE } from '../data/moments';
import { getPhotoForMoment } from '../data/moments';
import HeartExplosion from './HeartExplosion';

// Background image for the revealed message (use a special one — e.g. first or middle)
const SECRET_BG_PHOTO_INDEX = 0;

export default function SecretRevealSection({ onHeartBurst }) {
  const [revealed, setRevealed] = useState(false);

  const handleOpen = () => {
    setRevealed(true);
    onHeartBurst?.();
  };

  const bgSrc = getPhotoForMoment(SECRET_BG_PHOTO_INDEX);

  return (
    <section className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg px-6 py-20 overflow-hidden">
      <HeartExplosion trigger={revealed} centerX="50%" centerY="50%" />

      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="button"
            className="flex flex-col items-center gap-8 relative z-10"
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
            key="message-wrap"
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Background image behind the message */}
            {bgSrc && (
              <>
                <img
                  src={bgSrc}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover"
                  aria-hidden
                />
                <div
                  className="absolute inset-0 bg-black/55"
                  aria-hidden
                />
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Message card pops in on top of background */}
      <AnimatePresence>
        {revealed && (
          <motion.div
            key="message"
            className="relative z-10 max-w-lg w-full mx-auto px-6"
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              type: 'spring',
              stiffness: 320,
              damping: 24,
              mass: 0.8,
            }}
          >
            <motion.div
              className="rounded-3xl p-8 md:p-10 bg-black/40 backdrop-blur-md border border-romantic-rose/30 shadow-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <p className="font-display text-2xl md:text-3xl text-romantic-blush leading-relaxed">
                {SECRET_MESSAGE}
              </p>
              <motion.div
                className="flex justify-center gap-2 mt-8"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    className="text-romantic-rose text-2xl"
                    animate={{ y: [0, -6, 0], opacity: [0.7, 1, 0.7], scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                  >
                    ♥
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

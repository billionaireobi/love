import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TOTAL_MOMENTS, getPhotoForMoment } from '../data/moments';

// Number of photos to cycle in hero background (first N from your pics)
const HERO_CAROUSEL_COUNT = Math.min(6, TOTAL_MOMENTS);
const CAROUSEL_INTERVAL_MS = 4500;
const CROSSFADE_DURATION = 1.4;

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function IntroSlide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % HERO_CAROUSEL_COUNT);
    }, CAROUSEL_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg px-6 overflow-hidden">
      {/* Background photo carousel - clearly visible */}
      <div className="absolute inset-0 z-0" aria-hidden>
        {Array.from({ length: HERO_CAROUSEL_COUNT }, (_, i) => {
          const src = getPhotoForMoment(i);
          if (!src) return null;
          return (
            <motion.div
              key={i}
              className="absolute inset-0"
              initial={false}
              animate={{
                opacity: i === currentIndex ? 1 : 0,
              }}
              transition={{
                duration: CROSSFADE_DURATION,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              style={{ pointerEvents: 'none' }}
            >
              <img
                src={src}
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          );
        })}
      </div>

      {/* Light overlay so photos show through but text stays readable */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/50 via-black/40 to-black/60"
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1] pointer-events-none opacity-70"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 30%, transparent 0%, rgba(18, 8, 12, 0.4) 70%, rgba(18, 8, 12, 0.7) 100%)',
        }}
        aria-hidden
      />

      <motion.div
        className="relative z-10 text-center max-w-2xl mx-auto"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Top accent line */}
        <motion.div
          className="mx-auto w-16 h-px bg-gradient-to-r from-transparent via-romantic-gold/70 to-transparent mb-8"
          variants={item}
        />

        <motion.span
          className="block font-sans text-romantic-gold/90 text-xs md:text-sm tracking-[0.35em] uppercase mb-4"
          variants={item}
        >
          A little journey
        </motion.span>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-romantic-blush font-medium tracking-tight leading-[1.1]"
          variants={item}
        >
          <span className="block drop-shadow-[0_0_30px_rgba(232,180,188,0.25)]">
            {TOTAL_MOMENTS} Moments
          </span>
          <span className="block mt-1 text-romantic-rose/90">With You</span>
        </motion.h1>

        <motion.p
          className="font-sans text-romantic-blush/80 mt-8 text-base md:text-lg max-w-sm mx-auto"
          variants={item}
        >
          Scroll to begin our story
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2"
          variants={item}
        >
          <motion.span
            className="text-romantic-rose/70 text-xs tracking-widest uppercase"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            Scroll
          </motion.span>
          <motion.div
            className="w-px h-10 rounded-full bg-gradient-to-b from-romantic-rose/60 to-transparent"
            animate={{ y: [0, 6, 0], opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        {/* Decorative hearts */}
        <motion.div
          className="flex justify-center gap-3 mt-10"
          variants={item}
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="text-romantic-rose/40 text-xl md:text-2xl"
              animate={{
                y: [0, -6, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                delay: i * 0.2,
                ease: 'easeInOut',
              }}
            >
              ♥
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

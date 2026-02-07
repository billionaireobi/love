import { motion } from 'framer-motion';
import { TOTAL_MOMENTS } from '../data/moments';

export default function IntroSlide() {
  return (
    <section className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg romantic-gradient-bg px-6 overflow-hidden">
      <motion.div
        className="text-center max-w-xl relative z-10"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <motion.span
          className="block font-sans text-romantic-blush/70 text-sm tracking-widest uppercase mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A little journey
        </motion.span>
        <motion.h1
          className="font-display text-4xl md:text-6xl text-romantic-blush font-medium tracking-tight drop-shadow-romantic-soft"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {TOTAL_MOMENTS} Moments With You
        </motion.h1>
        <motion.p
          className="font-sans text-romantic-gold/90 mt-6 text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Scroll to begin
        </motion.p>
        <motion.div
          className="mt-10 w-10 h-12 rounded-full border-2 border-romantic-rose/40 flex items-start justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-romantic-rose/80 text-sm">↓</span>
        </motion.div>
        <motion.div
          className="flex justify-center gap-1 mt-6"
          animate={{ opacity: [0.4, 0.9, 0.4] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-romantic-rose/60 text-lg">♥</span>
          <span className="text-romantic-rose/50 text-lg">♥</span>
          <span className="text-romantic-rose/60 text-lg">♥</span>
        </motion.div>
      </motion.div>
    </section>
  );
}

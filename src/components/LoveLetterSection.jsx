import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LOVE_LETTER } from '../data/moments';

const TYPING_SPEED_MS = 32;

export default function LoveLetterSection() {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (displayed.length >= LOVE_LETTER.length) {
      setDone(true);
      return;
    }
    const t = setTimeout(() => {
      setDisplayed(LOVE_LETTER.slice(0, displayed.length + 1));
    }, TYPING_SPEED_MS);
    return () => clearTimeout(t);
  }, [displayed]);

  return (
    <section className="journey-section relative flex items-center justify-center min-h-screen bg-romantic-bg romantic-gradient-bg px-6 py-16">
      <motion.div
        className="relative max-w-lg w-full rounded-2xl p-8 md:p-10 bg-white/[0.06] border border-romantic-rose/20 shadow-romantic-glow"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.5 }}
      >
        <div className="absolute -top-1 left-8 w-12 h-0.5 bg-romantic-gold/60 rounded-full" />
        <h2 className="font-display text-2xl md:text-3xl text-romantic-gold mb-6">
          A letter for you
        </h2>
        <div className="font-sans text-romantic-blush/95 leading-relaxed whitespace-pre-wrap min-h-[260px] text-[15px]">
          {displayed}
          {!done && (
            <motion.span
              className="text-romantic-rose"
              animate={{ opacity: [1, 0.3] }}
              transition={{ duration: 0.6, repeat: Infinity }}
            >
              |
            </motion.span>
          )}
        </div>
      </motion.div>
    </section>
  );
}

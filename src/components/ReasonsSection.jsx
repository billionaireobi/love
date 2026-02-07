import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REASONS_I_LOVE_YOU } from '../data/moments';

const container = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 * i },
  }),
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ReasonsSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg romantic-gradient-bg px-6 py-16">
      <motion.h2
        className="font-display text-3xl md:text-4xl text-romantic-blush text-center mb-4"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Reasons I love you
      </motion.h2>
      <motion.p
        className="font-sans text-romantic-gold/80 text-center text-sm mb-12 max-w-sm"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.15 }}
      >
        Tap a card to reveal
      </motion.p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {REASONS_I_LOVE_YOU.map((reason, i) => (
          <motion.div key={i} variants={item} className="relative">
            <motion.button
              type="button"
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left rounded-2xl border border-romantic-rose/25 bg-white/5 hover:bg-romantic-rose/10 hover:border-romantic-rose/40 transition-all duration-200 py-4 px-5 min-h-[72px] flex items-center shadow-romantic-soft"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <AnimatePresence mode="wait">
                {openIndex === i ? (
                  <motion.p
                    key="text"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    className="font-sans text-romantic-blush text-sm md:text-base leading-relaxed pr-8"
                  >
                    {reason}
                  </motion.p>
                ) : (
                  <motion.span
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="font-sans text-romantic-gold/70 text-sm flex items-center gap-2"
                  >
                    <motion.span
                      className="text-romantic-rose"
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                    >
                      ♥
                    </motion.span>
                    Reason {i + 1}
                  </motion.span>
                )}
              </AnimatePresence>
              <span className="absolute top-4 right-4 text-romantic-rose/50 text-lg leading-none">
                {openIndex === i ? '×' : '+'}
              </span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

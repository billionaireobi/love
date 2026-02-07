import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { REASONS_I_LOVE_YOU } from '../data/moments';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
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
        className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl w-full"
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
              className="w-full text-left rounded-2xl border border-romantic-rose/25 bg-white/5 hover:bg-romantic-rose/10 hover:border-romantic-rose/40 transition-colors duration-200 py-5 px-5 min-h-[80px] flex items-center gap-4 shadow-romantic-soft overflow-hidden"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Character / emoji — always visible, animates when open */}
              <motion.span
                className="text-2xl md:text-3xl flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-romantic-rose/15 border border-romantic-rose/20"
                animate={
                  openIndex === i
                    ? { scale: [1, 1.2, 1.1], rotate: [0, 5, -5, 0] }
                    : { scale: 1, rotate: 0 }
                }
                transition={{
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 260,
                  damping: 18,
                }}
              >
                {reason.emoji}
              </motion.span>

              <div className="flex-1 min-w-0 pr-8">
                <AnimatePresence mode="wait">
                  {openIndex === i ? (
                    <motion.p
                      key="text"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 8 }}
                      transition={{ duration: 0.3 }}
                      className="font-sans text-romantic-blush text-sm md:text-base leading-relaxed"
                    >
                      {reason.text}
                    </motion.p>
                  ) : (
                    <motion.span
                      key="placeholder"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="font-sans text-romantic-gold/70 text-sm flex items-center gap-2"
                    >
                      <span className="text-romantic-rose/80">Reason {i + 1}</span>
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <motion.span
                className="absolute top-4 right-4 text-romantic-rose/50 text-lg leading-none"
                animate={{ rotate: openIndex === i ? 90 : 0 }}
                transition={{ duration: 0.25 }}
              >
                {openIndex === i ? '×' : '+'}
              </motion.span>
            </motion.button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

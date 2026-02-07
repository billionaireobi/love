import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { getPhotoForMoment, TOTAL_MOMENTS } from '../data/moments';
import HeartExplosion from './HeartExplosion';

export default function EndingSection({ onHeartBurst }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 });
  const [burstDone, setBurstDone] = useState(false);
  const lastIndex = TOTAL_MOMENTS - 1;
  const lastPhoto = getPhotoForMoment(lastIndex);

  useEffect(() => {
    if (isInView && !burstDone) {
      setBurstDone(true);
      onHeartBurst?.();
    }
  }, [isInView, burstDone, onHeartBurst]);

  if (!lastPhoto) return null;

  return (
    <section
      ref={ref}
      className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg overflow-hidden"
    >
      <HeartExplosion trigger={burstDone ? 1 : null} centerX="50%" centerY="45%" />
      {/* Full image, no crop, no zoom */}
      <div className="absolute inset-0 flex items-center justify-center p-0">
        <img
          src={lastPhoto}
          alt="Our story"
          className="max-w-full max-h-full w-auto h-auto object-contain"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40 pointer-events-none" />
      <motion.div
        className="relative z-10 text-center px-6 py-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <motion.p
          className="font-display text-3xl md:text-5xl text-romantic-blush leading-tight max-w-2xl mx-auto drop-shadow-lg"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          I’d choose you again. Every time. ♥
        </motion.p>
        <motion.p
          className="font-sans text-romantic-gold/95 mt-8 text-base md:text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Happy Valentine’s Day — {TOTAL_MOMENTS} moments with you, and forever more.
        </motion.p>
      </motion.div>
    </section>
  );
}

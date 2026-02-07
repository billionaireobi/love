import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { getPhotoForMoment, TOTAL_MOMENTS } from '../data/moments';

export default function PhotoSlide({ index, caption }) {
  const ref = useRef(null);
  const isActive = useInView(ref, { amount: 0.35 });
  const src = getPhotoForMoment(index);
  if (!src) return null;

  return (
    <section
      ref={ref}
      className="journey-section relative flex flex-col items-center justify-center min-h-screen bg-romantic-bg"
    >
      <div className="absolute inset-0 flex items-center justify-center p-0">
        <motion.img
          src={src}
          alt={`Moment ${index + 1}`}
          className="max-w-full max-h-full w-auto h-auto object-contain"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          loading="lazy"
          decoding="async"
        />
      </div>
      <div className="absolute bottom-0 left-0 right-0 pt-24 pb-8 px-6 bg-gradient-to-t from-black/85 via-black/50 to-transparent pointer-events-none" />
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-10 pt-4 text-center"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: isActive ? 1 : 0.6, y: isActive ? 0 : 8 }}
        transition={{ duration: 0.4 }}
      >
        <span className="block font-sans text-romantic-gold/80 text-xs tracking-widest uppercase mb-1">
          {index + 1} of {TOTAL_MOMENTS}
        </span>
        <p className="font-display text-xl md:text-2xl text-romantic-blush leading-snug max-w-xl mx-auto drop-shadow-lg">
          {caption}
        </p>
      </motion.div>
    </section>
  );
}

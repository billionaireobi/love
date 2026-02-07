import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const HEART_COUNT = 28;
const COLORS = ['#e8b4bc', '#be4d6b', '#f8a5b8', '#d4a574', '#ff9a9e'];

function createBurstHearts() {
  return Array.from({ length: HEART_COUNT }, (_, i) => {
    const angle = (i / HEART_COUNT) * 360 + Math.random() * 40;
    const rad = (angle * Math.PI) / 180;
    const distance = 120 + Math.random() * 180;
    return {
      id: i,
      x: Math.cos(rad) * distance,
      y: Math.sin(rad) * distance,
      scale: 0.6 + Math.random() * 0.8,
      delay: Math.random() * 0.15,
      duration: 1 + Math.random() * 0.4,
      color: COLORS[i % COLORS.length],
      rotation: (Math.random() - 0.5) * 360,
    };
  });
}

export default function HeartExplosion({ trigger, centerX = '50%', centerY = '50%' }) {
  const [hearts, setHearts] = useState([]);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (trigger != null && trigger !== false) {
      setHearts(createBurstHearts());
      setKey((k) => k + 1);
      const t = setTimeout(() => setHearts([]), 2000);
      return () => clearTimeout(t);
    }
  }, [trigger]);

  if (hearts.length === 0) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[100] flex items-center justify-center"
      style={{ left: 0, top: 0 }}
      aria-hidden
    >
      <div
        className="absolute w-4 h-4"
        style={{ left: centerX, top: centerY, transform: 'translate(-50%, -50%)' }}
      >
        {hearts.map((h) => (
          <motion.span
            key={`${key}-${h.id}`}
            className="absolute left-0 top-0 text-heart"
            style={{
              color: h.color,
              fontSize: 14 + h.scale * 12,
              filter: 'drop-shadow(0 0 6px rgba(232, 180, 188, 0.5))',
            }}
            initial={{ x: 0, y: 0, scale: 0, opacity: 1, rotate: 0 }}
            animate={{
              x: h.x,
              y: h.y,
              scale: h.scale,
              opacity: [1, 0.9, 0],
              rotate: h.rotation,
            }}
            transition={{
              duration: h.duration,
              delay: h.delay,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            ♥
          </motion.span>
        ))}
      </div>
    </div>
  );
}

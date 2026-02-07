import { motion } from 'framer-motion';

const COLORS = ['#e8b4bc', '#be4d6b', '#f8a5b8', '#d4a574'];
const HEARTS = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  left: `${5 + (i * 6.5) % 90}%`,
  delay: i * 0.5 + Math.random() * 2,
  size: 12 + Math.random() * 14,
  duration: 11 + Math.random() * 5,
  color: COLORS[i % COLORS.length],
  sway: 15 + Math.random() * 25,
}));

export default function FloatingHearts() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {HEARTS.map(({ id, left, delay, size, duration, color, sway }) => (
        <motion.div
          key={id}
          className="absolute"
          style={{
            left,
            top: '102%',
            width: size,
            height: size,
            color,
            fontSize: size,
            textShadow: `0 0 12px ${color}40`,
            filter: 'drop-shadow(0 0 4px rgba(232, 180, 188, 0.3))',
          }}
          initial={{ y: 0, rotate: 0, opacity: 0, x: 0 }}
          animate={{
            y: '-110vh',
            x: [0, sway, -sway * 0.5, sway * 0.3, 0],
            rotate: [0, 15, -10, 20, 0],
            opacity: [0, 0.35, 0.4, 0.35, 0],
          }}
          transition={{
            duration,
            delay: delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ♥
        </motion.div>
      ))}
    </div>
  );
}

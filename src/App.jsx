import { useState, useEffect } from 'react';
import FloatingHearts from './components/FloatingHearts';
import MusicPlayer from './components/MusicPlayer';
import HeartExplosion from './components/HeartExplosion';
import IntroSlide from './components/IntroSlide';
import PhotoSlide from './components/PhotoSlide';
import LoveLetterSection from './components/LoveLetterSection';
import ReasonsSection from './components/ReasonsSection';
import SecretRevealSection from './components/SecretRevealSection';
import EndingSection from './components/EndingSection';
import { MOMENTS, TOTAL_MOMENTS } from './data/moments';

const photoIndices = Array.from({ length: TOTAL_MOMENTS }, (_, i) => i);
const batch1 = photoIndices.slice(0, 4);
const batch2 = photoIndices.slice(4, 8);
const batch3 = photoIndices.slice(8, 11);
const batch4 = photoIndices.slice(11, 13);

const JOURNEY_ORDER = [
  'intro',
  ...batch1.map((i) => ({ type: 'photo', index: i })),
  'loveLetter',
  ...batch2.map((i) => ({ type: 'photo', index: i })),
  'reasons',
  ...batch3.map((i) => ({ type: 'photo', index: i })),
  'secret',
  ...batch4.map((i) => ({ type: 'photo', index: i })),
  'ending',
];

const PERIODIC_BURST_INTERVAL_MS = 22000;

export default function App() {
  const [periodicBurst, setPeriodicBurst] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setPeriodicBurst((k) => k + 1);
    }, PERIODIC_BURST_INTERVAL_MS);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-romantic-bg romantic-gradient-bg">
      <FloatingHearts />
      <HeartExplosion trigger={periodicBurst >= 1 ? periodicBurst : null} centerX="50%" centerY={`${30 + (periodicBurst % 3) * 20}%`} />
      <main className="journey-container relative z-10">
        {JOURNEY_ORDER.map((item) => {
          if (item === 'intro') return <IntroSlide key="intro" />;
          if (item === 'loveLetter') return <LoveLetterSection key="loveLetter" />;
          if (item === 'reasons') return <ReasonsSection key="reasons" />;
          if (item === 'secret') return <SecretRevealSection key="secret" />;
          if (item === 'ending') return <EndingSection key="ending" />;
          if (item.type === 'photo') {
            const m = MOMENTS[item.index];
            if (!m) return null;
            return (
              <PhotoSlide
                key={`photo-${item.index}`}
                index={item.index}
                caption={m.caption}
              />
            );
          }
          return null;
        })}
      </main>
      <MusicPlayer />
    </div>
  );
}

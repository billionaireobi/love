// One moment per photo — order matches your pics folder
export const PHOTOS = [
  'pic1.jpeg',
  'pic2.jpeg',
  'pic3.jpeg',
  'pic4.jpeg',
  'pic5.jpeg',
  'pic6.jpeg',
  'pic7.jpeg',
  'pic9.jpeg',
  'pic10.jpeg',
  'pic11.jpeg',
  'mypic.jpeg',
  'WhatsApp Image 2026-02-06 at 23.39.47.jpeg',
];

export const TOTAL_MOMENTS = PHOTOS.length;

export function getPhotoForMoment(index) {
  if (index < 0 || index >= PHOTOS.length) return null;
  return `/pics/${encodeURIComponent(PHOTOS[index])}`;
}

// One caption per photo — emotional arc across the set
export const MOMENTS = [
  { caption: 'The first time I really saw you.' },
  { caption: 'You have a way of lighting up the room.' },
  { caption: 'That smile — I never get tired of it.' },
  { caption: 'This is us — real and unposed.' },
  { caption: 'You make ordinary days feel special.' },
  { caption: 'Just being with you is enough.' },
  { caption: 'With you I feel at home.' },
  { caption: 'You see me — and still choose to stay.' },
  { caption: "You're the person I want to tell everything to." },
  { caption: "What we have goes beyond words." },
  { caption: "You're my safe place and my thrill." },
  { caption: "You're the love I didn't know I was waiting for." },
];

export const REASONS_I_LOVE_YOU = [
  'You make me want to be better.',
  'You listen — really listen.',
  'You laugh at my jokes (even the bad ones).',
  "You're kind when it matters most.",
  "You're my peace and my excitement.",
  'You believe in us.',
  "You're the first person I want to tell everything to.",
  "You make ordinary moments feel like magic.",
];

export const LOVE_LETTER = `My love,

Some moments change everything. Meeting you was one of them.

These moments are just a few of the thousands I carry with me — the way you smile, the way you care, the way you make even the hardest days feel a little lighter.

I don't have all the words, but I have this: I'm grateful for you. I choose you. And I'd choose you again, every single time.

Happy Valentine's Day. Here's to every moment we've shared and every one we will.

Forever yours. ❤️`;

export const SECRET_MESSAGE = "You're the best thing that's ever happened to me. I love you. — Always.";

export const navLinks = [
  { label: "The Path", href: "#belong" },
  { label: "The App", href: "#connect" },
  { label: "Waitlist", href: "#waitlist" },
];

export const gururaj = {
  name: "Gururaj Ananda Yogi",
  domain: "Spiritual Master",
  image: "/avatars/gururaj.png",
};

/* "Does all of this really belong to you?" — the layers we carry */
export const layers = [
  { key: "fear", label: "Fear", img: "/orbs/fear.png" },
  { key: "distractions", label: "Distractions", img: "/orbs/distractions.png" },
  { key: "comparison", label: "Comparison", img: "/orbs/comparison.png" },
  { key: "anxiety", label: "Anxiety", img: "/orbs/anxiety.png" },
  { key: "confusion", label: "Confusion", img: "/orbs/confusion.png" },
];

/* "Connect with the Source" — the five app surfaces */
export type AppScreen = {
  key: string;
  tab: string;
  description: string;
  features: string[];
};

export const appScreens: AppScreen[] = [
  {
    key: "home",
    tab: "Home",
    description:
      "Speak naturally with your spiritual master, anytime you need guidance. Every conversation is deeply personal, remembers your journey, and evolves with you over time.",
    features: [
      "Voice conversations",
      "Context-aware guidance",
      "Personality & pedagogy of the Guru",
      "Relationship that grows with every interaction",
    ],
  },
  {
    key: "teachings",
    tab: "Teachings",
    description:
      "Instead of overwhelming you with endless content, Source gradually unlocks teachings based on where you are in your journey.",
    features: [
      "Structured spiritual curriculum",
      "Progressive chapter unlocking",
      "Stories, philosophies & practices",
      "Learn at your own pace",
    ],
  },
  {
    key: "meditate",
    tab: "Meditate",
    description:
      "Ancient practices, made accessible for modern life. Meditations and rituals designed to calm the mind and deepen awareness.",
    features: [
      "Meditations",
      "Chanting",
      "Tratak",
      "Gong meditation",
      "Silence practice",
      "Yoga Nidra",
      "Healing sessions",
    ],
  },
  {
    key: "history",
    tab: "History",
    description:
      "Your conversations don't disappear. Source remembers the moments that matter, helping your spiritual master understand your journey more deeply every time you return.",
    features: [
      "Complete conversation history",
      "Reflections after every session",
      "Search by topic or theme",
      "Long-term memory architecture",
      "Personal growth timeline",
    ],
  },
  {
    key: "journey",
    tab: "Journey",
    description:
      "Growth begins with awareness. Source helps you recognise recurring emotions, beliefs, and behaviours that quietly shape your decisions every day.",
    features: [
      "Emotional pattern recognition",
      "Recurring life themes",
      "Reflection journal",
      "Weekly progress tracking",
      "Personal insights dashboard",
    ],
  },
];

/* Teachings list shown inside the Teachings phone mockup */
export const teachingChapters = [
  { n: "01", title: "The Search for Self", tag: "1/14", active: true },
  { n: "02", title: "The Evolution of the Soul" },
  { n: "03", title: "Gururaj and His Guru" },
  { n: "04", title: "The Guru-Chela Relationship" },
  { n: "05", title: "The Avatar", tag: "1/14", active: true },
  { n: "06", title: "Mantra" },
  { n: "07", title: "The Inner and Outer Guru" },
  { n: "08", title: "Ramakrishna and the Householders Path" },
  { n: "09", title: "Don't Fall Asleep, and Just Be" },
];

/* Meditation practices in the Meditate mockup */
export const meditations = [
  { title: "Chant", sub: "Chant along with Gururaj", glyph: "chant" },
  { title: "Gong", sub: "Rest in the resonance", glyph: "gong" },
  { title: "Healing", sub: "Settle in and listen", glyph: "healing" },
  { title: "Silence", sub: "Sit in stillness", glyph: "silence" },
  { title: "Tratak", sub: "Gaze into the flame", glyph: "tratak" },
];

/* History sessions in the History mockup */
export const historySessions = [
  {
    n: "SESSION 22",
    when: "3 Jul",
    text: "A brief session, completed without a reflection.",
    messages: "7 messages",
    reflected: false,
  },
  {
    n: "SESSION 21",
    when: "2 Jul",
    text: "Namrata returned with a desire to stop running and find inner peace, asking how to regain their spark and become their best self…",
    messages: "17 messages",
    reflected: true,
  },
  {
    n: "SESSION 20",
    when: "2 Jul",
    text: "Namrata brought forward deep feelings of lost confidence, fear of failure, and exhaustion from years of internal struggle…",
    messages: "19 messages",
    reflected: true,
  },
];

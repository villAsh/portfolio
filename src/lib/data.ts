import type { TExperienceCard } from "@/components/sections/experience";

export const SOCIALS = [
  {
    id: 0,
    src: "/github.svg",
    title: "Github",
    link: "https://github.com/villAsh",
  },
  {
    id: 1,
    src: "/linkedin.svg",
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/vilas-chauvhan-4609391aa/",
  },
  {
    id: 2,
    src: "/leetcode.svg",
    title: "Leetcode",
    link: "https://leetcode.com/u/vilas_chauvhan",
  },
  {
    id: 3,
    src: "/x.svg",
    title: "X",
    link: "https://x.com/vilas_dev_x",
  },
  {
    id: 4,
    src: "/mail.svg",
    title: "Email",
    link: "mailto:chavhanvilas02@gmail.com",
  },
];

export const EXPERIENCE: TExperienceCard[] = [
  {
    organization: "Seaflux Technologies",
    img: "/seaflux.svg",
    url: "https://www.seaflux.tech/",
    linkedIn: "https://www.linkedin.com/company/seaflux-tech/",
    instagram: "https://www.instagram.com/seaflux.tech/",
    position: "Software Engineer",
    start: "Sept 2024",
    end: "Present",
    location: "Ahmedabad, India",
    description: [
      `Owned the end-to-end frontend architecture for a high-frequency crypto trading platform, building the system from scratch with a strong focus on performance and scalability enabling multi-exchange real-time trading.`,
      `Led frontend development efforts across the full product lifecycle, collaborating closely with product managers and backend engineers while executing Agile/Scrum workflows.`,
      `Developed and shipped a production-grade React Native application to the Apple App Store and Google Play Store, supporting 1M+ global doctors with optimized rendering, efficient data fetching, and a reliable location-based discovery experience.`,
      `Contributed to an open-source microservices platform, building and maintaining features in a distributed system.`,
      `Mentored interns, conducting code reviews, improving training plans with the current frontend technologies and patterns.`,
    ],
    isWorking: true,
  },
  {
    organization: "Seaflux Technologies",
    url: "https://www.seaflux.tech/",
    linkedIn: "https://www.linkedin.com/company/seaflux-tech/",
    instagram: "https://www.instagram.com/seaflux.tech/",
    img: "/seaflux.svg",
    position: "Junior Software Engineer",
    start: "Sept 2023",
    end: "Sept 2024",
    location: "Ahmedabad, India",
    description: [
      `Delivered a high-performance React Native app by significantly improving speed, stability, and UX; reduced app bundle size by ~2–4 MB, which led to an expanded project scope where the client entrusted our team with web and backend development within the first few months.`,
      `Built a fully responsive, production-grade web dashboard using Next.js, revamping the entire UI and improving usability, navigation flow, and accessibility, resulting in an estimated 30–40% improvement in user engagement.`,
      `Integrated multiple backend APIs to enable real-time, data-driven user experiences, optimizing data fetching and state management for faster page loads and smoother interactions.`,
      `Designed and implemented a scalable backend service from scratch using NestJS, following clean architecture and RESTful best practices, supporting secure authentication, business logic, and API integrations.`,
      `Contributed as a full-stack engineer early in tenure, working across mobile (React Native), web (Next.js), and backend (Node.js / NestJS), accelerating feature delivery and reducing cross-team dependencies.`,
    ],
  },
  {
    organization: "Seaflux Technologies",
    url: "https://www.seaflux.tech/",
    linkedIn: "https://www.linkedin.com/company/seaflux-tech/",
    instagram: "https://www.instagram.com/seaflux.tech/",
    img: "/seaflux.svg",
    position: "Software Engineering Intern",
    start: "Jun 2023",
    end: "Sept 2023",
    location: "Ahmedabad, India",
    description: [
      `Applied and followed best software development practices, including clean code, component reusability, and performance optimization.`,
      `Developed cross-platform mobile applications for Android and iOS using React Native, ensuring consistency and performance across devices.`,
      `Designed and developed new features while enhancing existing functionality to improve performance and user experience.`,
      `Built dynamic, smooth, and responsive user interfaces using React.js and Next.js, focusing on scalability and modern UI/UX principles.`,
    ],
  },
];

export const TECH_DATA = {
  frontend: [
    { name: "HTML5", slug: "html5", color: "#E34F26" },
    { name: "CSS", slug: "css", color: "#1572B6" },
    { name: "JavaScript", slug: "javascript", color: "#F7DF1E" },
    { name: "Tailwind CSS", slug: "tailwindcss", color: "#06B6D4" },
    { name: "React", slug: "react", color: "#61DAFB" },
    { name: "Next.js", slug: "nextdotjs", color: "#000000" },
    { name: "TanStack Query", slug: "reactquery", color: "#FF4154" },
    {
      name: "TanStack Router",
      slug: "tanstack",
      color: "#FF4154",
    },
    { name: "motion dev", slug: "/framer-motion.svg", color: "#FFF312" },
    { name: "GSAP", slug: "gsap", color: "#88CE02" },
  ],
  app: [
    { name: "React Native", slug: "react", color: "#61DAFB" },
    { name: "Expo", slug: "expo", color: "#000020" },
    { name: "Xcode", slug: "xcode", color: "#147EFB" },
    { name: "Android Studio", slug: "androidstudio", color: "#3DDC84" },
  ],
  backend: [
    { name: "Node.js", slug: "nodedotjs", color: "#339933" },
    { name: "Express.js", slug: "express", color: "#000000" },
    { name: "PostgreSQL", slug: "postgresql", color: "#4169E1" },
    { name: "Docker", slug: "docker", color: "#2496ED" },
    { name: "AWS", slug: "/aws.svg", color: "#FF9900" },
  ],
  tools: [
    { name: "Git", slug: "git", color: "#F05032" },
    { name: "GitHub", slug: "github", color: "#181717" },
    { name: "GitLab", slug: "gitlab", color: "#FC6D26" },
    { name: "Cursor", slug: "cursor", color: "#51A1FF" },
    { name: "Figma", slug: "figma", color: "#F24E1E" },
  ],
};

export const QUOTES = [
  {
    text: "Don’t be sorry. Be better.",
    author: "Kratos",
    source: "God of War",
    mood: "dark",
  },
  {
    text: "No matter how weak you feel, set your heart ablaze.",
    author: "Rengoku",
    source: "Demon Slayer",
    mood: "motivational",
  },
  {
    text: "The world is cruel, but also very beautiful.",
    author: "Mikasa Ackerman",
    source: "Attack on Titan",
    mood: "philosophical",
  },
  {
    text: "Wake up to reality. Nothing ever goes as planned.",
    author: "Madara",
    source: "Naruto",
    mood: "dark",
  },
  {
    text: "Hatred is where a man who can’t stand sadness goes.",
    author: "Godot",
    source: "Berserk",
    mood: "dark",
  },
  {
    text: "If you don’t fight, you can’t win.",
    author: "Eren Yeager",
    source: "Attack on Titan",
    mood: "motivational",
  },
  {
    text: "Struggle. Endure. Contend.",
    author: "Berserk",
    source: "Berserk",
    mood: "motivational",
  },
  {
    text: "The moment people come to know love, they run the risk of carrying hate.",
    author: "Obito",
    source: "Naruto",
    mood: "philosophical",
  },
  {
    text: "Love is the most twisted curse of all.",
    author: "Suguru Geto",
    source: "JJK",
    mood: "philosophical",
  },
  {
    text: "A man must live true to himself.",
    author: "Kratos",
    source: "God of War",
    mood: "philosophical",
  },
  {
    text: "If you’re always worried about crushing ants, you won’t be able to walk.",
    author: "Guts",
    source: "Berserk",
    mood: "dark",
  },
  {
    text: "Stand up and walk. Keep moving forward.",
    author: "Kratos",
    source: "God of War",
    mood: "motivational",
  },
  {
    text: "If you don’t take risks, you can’t create a future.",
    author: "Monkey D. Luffy",
    source: "One Piece",
    mood: "philosophical",
  },
  {
    text: "A sword wields no strength unless the hand that holds it has courage.",
    author: "Kratos",
    source: "God of War",
    mood: "philosophical",
  },
  {
    text: "The quieter you become, the more you can hear.",
    author: "Unknown",
    source: "Zen",
    mood: "philosophical",
  },
  {
    text: "You have the right to work, but never to the fruit of work.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 2.47",
    mood: "motivational",
  },
  {
    text: "Perform your duty and abandon all attachment to success or failure.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 2.48",
    mood: "motivational",
  },
  {
    text: "A man is made by his belief. As he believes, so he becomes.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 17.3",
    mood: "motivational",
  },
  {
    text: "Let a man lift himself by himself; let him not degrade himself.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 6.5",
    mood: "motivational",
  },
  {
    text: "Stay steady in success and failure – that is Yoga.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 2.48",
    mood: "philosophical",
  },

  {
    text: "For one who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his very mind will be the greatest enemy.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 6.35",
    mood: "dark",
  },
  {
    text: "When meditation is mastered, the mind is unwavering like the flame of a lamp in a windless place.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 6.19",
    mood: "dark",
  },
  {
    text: "For one who has conquered the mind, the mind is the best of friends.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 6.6",
    mood: "philosophical",
  },
  {
    text: "Do your duty, for action is better than inaction.",
    author: "Shri Krishna",
    source: "Bhagavad Gita 3.8",
    mood: "dark",
  },

  {
    text: "Love is the one thing we're capable of perceiving that transcends time and space.",
    author: "Brand",
    source: "Interstellar",
    mood: "philosophical",
  },
  {
    text: "Get busy living, or get busy dying.",
    author: "Andy Dufresne",
    source: "The Shawshank Redemption",
    mood: "motivational",
  },
  {
    text: "Hope is a good thing, maybe the best of things.",
    author: "Andy Dufresne",
    source: "The Shawshank Redemption",
    mood: "philosophical",
  },
  {
    text: "Fear can hold you prisoner. Hope can set you free.",
    author: "Narrator",
    source: "The Shawshank Redemption",
    mood: "philosophical",
  },
  {
    text: "If you’re going to push a machine to its limits, you better know where those limits are.",
    author: "Carroll Shelby",
    source: "Ford v Ferrari",
    mood: "philosophical",
  },
  {
    text: "Why do we fall? So we can learn to pick ourselves up.",
    author: "Alfred",
    source: "Batman Begins",
    mood: "motivational",
  },
  {
    text: "You either die a hero, or you live long enough to see yourself become the villain.",
    author: "Harvey Dent",
    source: "The Dark Knight",
    mood: "dark",
  },
  {
    text: "It’s not who I am underneath, but what I do that defines me.",
    author: "Batman",
    source: "Batman Begins",
    mood: "philosophical",
  },
  {
    text: "Blessed are the forgetful, for they get the better even of their blunders.",
    author: "Mary",
    source: "Eternal Sunshine of the Spotless Mind",
    mood: "philosophical",
  },
  {
    text: "What a loss to spend that much time with someone, only to find out that she’s a stranger.",
    author: "Joel",
    source: "Eternal Sunshine of the Spotless Mind",
    mood: "dark",
  },
  {
    text: "Just because she likes the same bizarro crap you do doesn’t mean she’s your soulmate.",
    author: "Narrator",
    source: "500 Days of Summer",
    mood: "philosophical",
  },
  {
    text: "Despite knowing the journey and where it leads, I embrace it.",
    author: "Louise",
    source: "Arrival",
    mood: "philosophical",
  },
  {
    text: "Fate rarely calls upon us at a moment of our choosing.",
    author: "Optimus Prime",
    source: "Transformers",
    mood: "dark",
  },
  {
    text: "Honor to the end.",
    author: "Optimus Prime",
    source: "Transformers",
    mood: "dark",
  },
  {
    text: "One shall stand. One shall fall.",
    author: "Optimus Prime",
    source: "Transformers",
    mood: "dark",
  },
];

export const LABS_PARALLAX = [
  "Experimentation",
  "Innovation",
  "Creativity",
  "Prototypes",
  "Experimentation",
  "Innovation",
];

export const FRONTEND = TECH_DATA.frontend.map((t) => t.name);
export const APP = TECH_DATA.app.map((t) => t.name);
export const BACKEND = TECH_DATA.backend.map((t) => t.name);
export const SERVICES = TECH_DATA.tools.map((t) => t.name);
export const TOOLS = TECH_DATA.tools.map((t) => t.name);

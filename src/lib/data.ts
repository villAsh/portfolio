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

export const FRONTEND = TECH_DATA.frontend.map((t) => t.name);
export const APP = TECH_DATA.app.map((t) => t.name);
export const BACKEND = TECH_DATA.backend.map((t) => t.name);
export const SERVICES = TECH_DATA.tools.map((t) => t.name);
export const TOOLS = TECH_DATA.tools.map((t) => t.name);

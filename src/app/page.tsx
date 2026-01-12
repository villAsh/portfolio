import BottomFade from "@/components/bottom-fade/bottom-fade";
import AboutMe from "@/components/sections/about-me";
import Experience from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";
import Quote from "@/components/sections/quote";
import type { Metadata } from "next";
import PersonalLife from "@/components/sections/personal-life";

export const metadata: Metadata = {
  title: "Vilas Chauvhan | Full-Stack Developer & Software Engineer",
  description:
    "Vilas Chauvhan - Experienced Full-Stack Software Engineer specializing in React, Next.js, Node.js, and PostgreSQL. Building scalable web applications with exceptional UI/UX design and smooth animations using Framer Motion and GSAP.",
  keywords: [
    "Vilas Chauvhan",
    "Full-Stack Developer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "Web Developer",
    "Frontend Developer",
    "Backend Developer",
    "UI/UX Designer",
    "JavaScript",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Framer Motion",
    "GSAP",
    "Portfolio",
    "Software Development",
    "Web Applications",
    "Open Source Contributor",
  ],
  authors: [{ name: "Vilas Chauvhan" }],
  creator: "Vilas Chauvhan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://vilaschauvhan.vercel.app",
    title: "Vilas Chauvhan | Full-Stack Developer & Software Engineer",
    description:
      "Experienced Full-Stack Software Engineer specializing in React, Next.js, and modern web technologies. Building exceptional user experiences.",
    siteName: "Vilas Chauvhan Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilas Chauvhan | Full-Stack Developer & Software Engineer",
    description:
      "Experienced Full-Stack Software Engineer specializing in React, Next.js, and modern web technologies.",
    creator: "@vilas_dev_x",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function Home() {
  return (
    <main className="w-screen mx-auto max-md:px-10 relative pb-10">
      <HeroSection />
      <Experience />
      <Projects />
      <AboutMe />
      <TechStack />
      <PersonalLife />
      <Quote />
      <BottomFade />
    </main>
  );
}

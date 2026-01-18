import BottomFade from "@/components/bottom-fade/bottom-fade";
import AboutMe from "@/components/sections/about-me";
import Experience from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";
import Projects from "@/components/sections/projects";
import TechStack from "@/components/sections/tech-stack";
import Quote from "@/components/sections/quote";
import type { Metadata } from "next";
import PersonalLife from "@/components/sections/personal-life";
import GithubGraph from "@/components/sections/github-graph";

export default function Home() {
  return (
    <main className="w-screen mx-auto max-md:px-10 relative pb-10">
      <HeroSection />
      <Experience />
      <Projects />
      <AboutMe />
      <GithubGraph />
      <TechStack />
      {/* <PersonalLife /> */}
      <Quote />
      <BottomFade />
    </main>
  );
}

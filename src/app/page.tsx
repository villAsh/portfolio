import BottomFade from "@/components/bottom-fade/bottom-fade";
import Experience from "@/components/sections/experience";
import HeroSection from "@/components/sections/hero";

export default function Home() {
  return (
    <main className="w-screen mx-auto max-md:px-10 relative">
      <HeroSection />
      <Experience />
      <BottomFade />
    </main>
  );
}

import GridAbout from "@/components/grid-about/grid-about";
import GridExperience from "@/components/grid-exp/grid-experience";
import GridProject from "@/components/grid-projects/grid-projects";
import GridSocial from "@/components/grid-socials/grid-socials";
import GridTheme from "@/components/grid-theme/grid-theme";
import TechStack from "@/components/tech-stack/tech-stack";
import { ThemeProvider } from "@/providers/theme-provider";

export default function Home() {
  return (
    <ThemeProvider
      defaultTheme="dark"
      attribute={"class"}
      enableSystem
      disableTransitionOnChange
    >
      <section className="w-screen min-h-screen p-6">
        <div className="max-w-6xl h-screen mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 grid-rows-8">
          {/* Tech Stack - Large vertical card */}
          <div className="col-span-1 md:row-span-7">
            <TechStack />
          </div>

          {/* Profile Card - Medium horizontal card */}
          <div className="col-span-2 row-span-3">
            <GridAbout />
          </div>

          {/* Links Card - Small square card */}
          <div className="col-span-1 row-span-2">
            <GridTheme />
          </div>

          {/* Project Card - Medium square card */}
          <div className="col-span-1 row-span-3">
            <GridProject />
          </div>

          {/* Daily Tools - Large vertical card */}
          <div className="col-span-5 col-start-2 col-end-4 row-span-3">
            <GridExperience />
          </div>

          {/* Social Card - Medium square card */}
          <div className="col-span-1 row-span-2">
            <GridSocial />
          </div>

          {/* Quote Card - Small square card */}
          <div className="col-span-1"></div>
        </div>
      </section>
    </ThemeProvider>
  );
}

import Header from "@/components/page/header";
import { ProjectCard } from "@/components/sections/project-card";
import { ContributionCard } from "@/components/sections/contribution-card";
import { CONTRIBUTIONS, PROJECTS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description: "A showcase of my recent work, including web applications, mobile apps, and open-source contributions.",
};

const page = () => {
  return (
    <main
      id="experience-page"
      className="mt-20 max-w-3xl mx-auto w-full pb-16 max-md:px-10"
    >
      <section>
        <Header
          subTitle="Featured work"
          title="Projects"
          description="A selection of projects where I've applied my technical skills to
        solve real-world problems."
        />
      </section>
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </section>
      <section className="mt-20">
        <Header
          subTitle="Featured work"
          title="Open Source Contributions"
          description="A collection of open-source projects where I’ve contributed features, fixed bugs, and enhanced performance in production-grade software."
        />
        <div className="mt-12 space-y-4">
          {CONTRIBUTIONS.map((item) => (
            <ContributionCard key={item.id} {...item} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default page;

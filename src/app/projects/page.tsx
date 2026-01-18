import Header from "@/components/page/header";
import { ProjectCard } from "@/components/sections/project-card";
import { PROJECTS } from "@/lib/data";

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
    </main>
  );
};

export default page;

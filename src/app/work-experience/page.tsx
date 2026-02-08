import Experience from "@/components/page/experience";
import Header from "@/components/page/header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description: "Explore my professional journey as a Software Engineer, including roles, key responsibilities, and major achievements.",
};

const page = () => {
  return (
    <section
      id="experience-page"
      className="mt-20 max-w-3xl mx-auto w-full pb-10 max-md:px-5"
    >
      <Header
        subTitle="Professional Journey"
        title="Experience"
        description="My professional background and the impact I've made in the companies
          I've worked with."
      />
      <div className="mt-14 flex flex-col gap-y-8">
        <Experience />
      </div>
    </section>
  );
};

export default page;

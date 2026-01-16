import Experience from "@/components/page/experience";
import Header from "@/components/page/header";

const page = () => {
  return (
    <section
      id="experience-page"
      className="mt-20 max-w-3xl mx-auto w-full pb-16 max-md:px-10"
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

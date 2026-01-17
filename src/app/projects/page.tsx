import Header from "@/components/page/header";

const page = () => {
  return (
    <section
      id="experience-page"
      className="mt-20 max-w-3xl mx-auto w-full pb-16 max-md:px-10"
    >
      <Header
        subTitle="Featured work"
        title="Projects"
        description="A selection of projects where I've applied my technical skills to
          solve real-world problems."
      />
    </section>
  );
};

export default page;

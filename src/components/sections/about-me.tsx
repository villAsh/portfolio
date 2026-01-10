import Image from "next/image";

const AboutMe = () => {
  return (
    <section className="mt-10 max-w-2xl mx-auto w-full">
      <h1 className="text-2xl font-semibold text-neutral-900 dark:text-neutral-200">
        About Me
      </h1>
      <div className="mt-5 flex flex-col gap-y-2">
        <div className="flex flex-row items-start justify-start gap-x-4 max-md:flex-col">
          <div className="bg-yellow-300 w-fit px-4 pt-4 rounded-[8px] dark:bg-neutral-500 transition-colors duration-500">
            <Image
              src={"/goku.png"}
              width={500}
              height={500}
              alt="profile"
              className="object-contain w-fit h-fit max-md:w-[30vw] max-md:h-1/2"
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <h1 className="pt-4 text-2xl font-semibold tracking-wide text-neutral-800 dark:text-neutral-100 max-md:pt-6">
              Vilas Chauvhan
            </h1>
            <p className="text-base font-medium tracking-wide text-neutral-500 dark:text-neutral-400">
              I’m a Full-Stack Web Developer with a strong frontend focus and an
              Open-Source Contributor. I build visually engaging, user-centric
              web applications that feel great to use and scale effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

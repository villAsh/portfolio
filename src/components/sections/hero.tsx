import Image from "next/image";
import { Button } from "../ui/button";
import { CV } from "../ui/icons";

type TTechIcon = {
  icon: string;
  text: string;
};

export const ProfileBadge = () => {
  return (
    <div className="absolute h-5 w-5 transition-colors hover:transition-transform hover:duration-300 duration-500 bg-slate-300 outline-[1.5px] hover:scale-110 outline-slate-300 border-white border-6 rounded-full bottom-1 right-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-slate-950 dark:outline dark:outline-slate-500" />
  );
};

export const TechIcon = ({ icon, text }: TTechIcon) => {
  return (
    <span className="bg-slate-50 inline-flex flex-row items-center justify-center gap-x-2 rounded-[8px] w-fit px-2 py-1 surface-inset outline-neutral-300 outline outline-dashed dark:outline dark:outline-neutral-600 dark:bg-neutral-700! transition-colors duration-500">
      <Image src={icon} alt={text} width={18} height={18} />
      <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        {text}
      </span>
    </span>
  );
};
const HeroSection = () => {
  return (
    <section className="max-w-2xl w-full mx-auto mt-10">
      <div className="flex flex-col gap-y-6">
        <div className="w-[105px] h-[105px] relative">
          <div className="h-[100px] w-[100px] overflow-hidden rounded-full transition-colors duration-500 bg-yellow-300 dark:bg-blue-300 flex items-center justify-center">
            <Image
              alt="profile icon"
              src={"/goku.png"}
              width={88}
              height={88}
              className="object-contain"
            />
          </div>
          <ProfileBadge />
        </div>
        <div className="flex flex-col gap-y-6">
          <div>
            <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide transition-colors duration-100">
              Hey, I am Vilas {" — "}
              <span className="text-neutral-400">A Software Engineer.</span>
            </h1>
          </div>
          <div>
            <div className="flex flex-row flex-wrap items-center gap-1.5 text-lg font-medium text-neutral-600 tracking-wider leading-8 dark:text-neutral-400">
              <span className="whitespace-pre-wrap">
                I craft engaging web apps using
              </span>
              <TechIcon icon="/react.svg" text="React" />{" "}
              <span className="whitespace-pre-wrap">, </span>
              <TechIcon icon="/next.js.svg" text="Next.js" />{" "}
              <span className="whitespace-pre-wrap">, </span>
              <TechIcon icon="/node.js.svg" text="Node.js" />{" "}
              <span className="whitespace-pre-wrap">, </span>
              <TechIcon icon="/postgres.svg" text="PostgreSQL" /> . Focusing on{" "}
              <span className="text-neutral-600 font-semibold dark:text-neutral-50">
                UI/UX
              </span>{" "}
              <span>design. Enthusiastic about</span>
              <TechIcon icon="/framer-motion.svg" text="Framer Motion" /> and{" "}
              <TechIcon icon="/gsap.svg" text="GSAP" /> .
            </div>
          </div>
        </div>
        <div>
          <Button
            variant={"icon"}
            className="shadow-[inset_0px_1px_2px_1px_rgb(0,0,0,0.18)] group"
          >
            <CV
              className={
                "group-hover:rotate-22 transition-transform ease-in-out duration-500"
              }
            />{" "}
            Resume / CV
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

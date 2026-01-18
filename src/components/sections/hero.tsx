import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { CV } from "../ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { SOCIALS } from "@/lib/data";
import BounceMouse from "../bounce-mouse/bounce-mouse";
import MusicPlayer from "../music-player/music-player";

type TTechIcon = {
  icon: string;
  text: string;
};

export const ProfileBadge = () => {
  return (
    <div className="absolute h-5 w-5 hover:transition-transform hover:duration-300 bg-slate-400 outline-[1.5px] hover:scale-110 outline-slate-300 border-white border-6 rounded-full bottom-1 right-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:border-slate-950 dark:outline dark:outline-slate-500" />
  );
};

export const TechIcon = ({ icon, text }: TTechIcon) => {
  const isMonochrome = text === "Framer Motion";

  return (
    <span className="bg-white/5 dark:bg-white/5 inline-flex flex-row items-center justify-center gap-x-2 rounded-[8px] w-fit px-2.5 py-1 border  border-dashed border-black/10 dark:border-white/10 surface-inset transform">
      <Image
        src={icon}
        alt={text}
        width={18}
        height={18}
        className={cn(isMonochrome && "dark:invert")}
      />
      <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
        {text}
      </span>
    </span>
  );
};

const Socials = () => {
  return (
    <div>
      <TooltipProvider>
        <div className="flex flex-row items-center justify-start gap-x-2">
          {SOCIALS.map((social) => (
            <Tooltip key={social.id}>
              <TooltipTrigger className="group">
                <a href={social.link} target="_blank" rel="noopener">
                  <Image
                    src={social.src}
                    width={28}
                    height={28}
                    alt={social.title}
                    className="group-hover:scale-110 transition-transform duration-300 dark:invert"
                  />
                </a>
              </TooltipTrigger>
              <TooltipContent className="rounded-[8px] text-neutral-300 dark:text-neutral-600">
                {social.title}
              </TooltipContent>
            </Tooltip>
          ))}
        </div>
      </TooltipProvider>
    </div>
  );
};

const Bio = () => {
  return (
    <div className="flex flex-col gap-y-6">
      <div>
        <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-wide">
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
          <TechIcon icon="/framer-black.svg" text="Framer Motion" /> and{" "}
          <TechIcon icon="/gsap.svg" text="GSAP" /> .
        </div>
      </div>
    </div>
  );
};

const ResumeButton = () => {
  return (
    <Link href="/resume" className="w-fit">
      <Button
        variant={"icon"}
        className="shadow-[inset_0px_1px_2px_1px_rgb(0,0,0,0.18)]"
      >
        <CV
          className={
            "group-hover:rotate-22 transition-transform ease-in-out duration-500"
          }
        />{" "}
        Resume / CV
      </Button>
    </Link>
  );
};

const ProfileImage = () => {
  return (
    <div className="w-[105px] h-[105px] relative">
      <div className="h-[100px] w-[100px] overflow-hidden rounded-full bg-yellow-300 dark:bg-neutral-500 flex items-center justify-center">
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
  );
};

const HeroSection = () => {
  return (
    <section className="max-w-3xl w-full mx-auto mt-20 relative h-[calc(100vh-140px)]">
      <div className="flex flex-col gap-y-8">
        <ProfileImage />
        <Bio />
        <ResumeButton />
        <Socials />
        <MusicPlayer />
      </div>
      <BounceMouse />
    </section>
  );
};

export default HeroSection;

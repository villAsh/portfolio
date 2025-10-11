"use client";
import { motion } from "motion/react";
import Image from "next/image";
import TextFlip from "../ui/text-flip";
import { LinkPreview } from "../ui/link-preview";

const GridAbout = () => {
  return (
    <div className="border-4 min-w-2xs px-4 py-2 rounded-sm h-fit col-span-5 w-full">
      <div>
        <div className="flex flex-row items-start justify-start gap-x-4">
          <Image
            width={200}
            height={200}
            src={"/goku-with-nimbus.png"}
            className="rounded-md object-contain aspect-auto w-20 h-20"
            alt="profile img"
          />
          <div className="pt-4">
            <h1 className="text-3xl font-semibold bg-clip-text bg-gradient-to-b from-gray-800 to-80% to-gray-300 dark:from-gray-100 dark:via-gray-300 dark:via-55% dark:to-gray-500 text-transparent">
              Vilas.
            </h1>
          </div>
        </div>
        <motion.div className="relative mx-1 my-4 flex flex-row items-center gap-x-1.5">
          <TextFlip
            text="I build"
            words={["Web apps", "Mobile apps", "Frontends"]}
          />
        </motion.div>
        <div className="mb-2">
          <h1 className="font-semibold text-sm tracking-tight">
            Hello, I am Vilas! a
            <LinkPreview url="https://www.seaflux.tech/" className="px-1">
              Software Engineer
            </LinkPreview>
            based in Gujarat - India
          </h1>
        </div>
      </div>
    </div>
  );
};

export default GridAbout;

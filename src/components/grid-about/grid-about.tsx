"use client";
import { motion } from "motion/react";
import Image from "next/image";
import TextFlip from "../ui/text-flip";
import { LinkPreview } from "../ui/link-preview";
import { Learn } from "../ui/icons";
import { cn } from "@/lib/utils";
import { TEXT_GRADIENT } from "@/lib/classes";

const GridAbout = () => {
  return (
    <div className="border-4 min-w-2xs px-4 py-2 rounded-sm h-fit col-span-5 w-full relative">
      <div>
        <div className="flex flex-row items-start justify-start gap-x-4">
          <Image
            width={200}
            height={200}
            src={"/goku-with-nimbus.png"}
            className="rounded-md object-contain aspect-auto w-20 h-20 -mx-4"
            alt="profile img"
          />
          <div className="pt-4">
            <h1 className={cn("text-3xl font-semibold", TEXT_GRADIENT)}>
              Vilas.
            </h1>
          </div>
        </div>
        <motion.div className="relative my-2 flex flex-row items-center gap-x-1.5 text-gray-600 dark:text-gray-300">
          <TextFlip
            text="I build"
            words={["Web apps", "Mobile apps", "Frontend"]}
          />
        </motion.div>
        <div className="mb-2">
          <h1 className="font-medium text-sm tracking-wide dark:text-gray-300 text-gray-600">
            Hello, I am Vilas! a
            <LinkPreview url="https://www.seaflux.tech/" className="px-1">
              <span className="font-semibold dark:text-white text-gray-900">
                Software Engineer
              </span>
            </LinkPreview>
            based in Gujarat - India
          </h1>
        </div>
        <div className="absolute top-2 right-2">
          <Learn />
        </div>
      </div>
    </div>
  );
};

export default GridAbout;

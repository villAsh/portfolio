"use client";
import { motion } from "motion/react";
import Image from "next/image";
import TextFlip from "../ui/text-flip";
import { LinkPreview } from "../ui/link-preview";
import { Learn } from "../ui/icons";
import { cn } from "@/lib/utils";
import { TEXT_GRADIENT } from "@/lib/classes";
import { TextLoop } from "../ui/text-loop";

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
          <span className="text-gray-600 dark:text-gray-300 font-semibold text-lg">I Build</span>
          <TextLoop
            className="overflow-y-clip"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 80,
              mass: 10,
            }}
            variants={{
              initial: {
                y: 20,
                rotateX: 90,
                opacity: 0,
                filter: "blur(4px)",
              },
              animate: {
                y: 0,
                rotateX: 0,
                opacity: 1,
                filter: "blur(0px)",
              },
              exit: {
                y: -20,
                rotateX: -90,
                opacity: 0,
                filter: "blur(4px)",
              },
            }}
          >
            <span className="text-gray-600 dark:text-gray-300 font-bold text-lg">Frontend</span>
            <span className="text-gray-600 dark:text-gray-300 font-bold text-lg">Web Apps</span>
            <span className="text-gray-600 dark:text-gray-300 font-bold text-lg">Mobile Apps</span>
          </TextLoop>
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

"use client";
import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import { Film, LibraryBig } from "lucide-react";
import { motion } from "motion/react";

const PersonalLife = () => {
  return (
    <section className="mt-32 max-w-2xl mx-auto w-full mb-20">
      <motion.div
        initial={INITIAL}
        whileInView={WHILE_IN_VIEW}
        viewport={{ once: true }}
        transition={TRANSITION}
        className="space-y-4"
      >
        <div className="flex items-center gap-x-2">
          <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Personal
          </span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Life
        </h2>
        <div className="flex flex-col gap-y-4">
          <div className="flex flex-row items-center justify-start gap-x-2">
            <div className="p-1.5 bg-neutral-400 rounded-[8px]">
              <Film size={24} className="stroke-neutral-800 stroke-[1.2]" />
            </div>
            <div className="flex flex-col items-start gap-y-px">
              <h1 className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                Movies & Show
              </h1>
              <span className="text-xs tracking-wide text-neutral-500 font-medium dark:text-neutral-400">
                Movies and shows that have inspired me{" "}
              </span>
            </div>
          </div>
          <div className="flex flex-row items-center justify-start gap-x-2">
            <div className="p-1.5 bg-neutral-400 rounded-[8px]">
              <LibraryBig
                size={24}
                className="stroke-neutral-800 stroke-[1.2]"
              />
            </div>
            <div className="flex flex-col items-start gap-y-px">
              <h1 className="text-base font-medium text-neutral-800 dark:text-neutral-200">
                Books
              </h1>
              <span className="text-xs tracking-wide text-neutral-500 font-medium dark:text-neutral-400">
                Books that have influenced my thinking and personal growth
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalLife;

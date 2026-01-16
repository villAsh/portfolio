"use client";
import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import { Film, LibraryBig, type LucideIcon } from "lucide-react";
import { motion } from "motion/react";

type TLifeCard = {
  Icon: LucideIcon;
  title: string;
  subTitle: string;
};
const LifeCard = ({ Icon, title, subTitle }: TLifeCard) => {
  return (
    <div className="flex flex-row items-center justify-start gap-x-2 border p-3 rounded-[10px] inset-shadow-sm hover:inset-shadow-muted cursor-pointer">
      <div className="p-1.5 bg-neutral-200 rounded-[8px]">
        <Icon size={24} className="stroke-neutral-800 stroke-[1.2]" />
      </div>
      <div className="flex flex-col items-start gap-y-px">
        <h1 className="text-base font-medium text-neutral-800 dark:text-neutral-200">
          {title}
        </h1>
        <span className="text-xs tracking-wide text-neutral-500 font-medium dark:text-neutral-400">
          {subTitle}
        </span>
      </div>
    </div>
  );
};
const PersonalLife = () => {
  return (
    <section className="mt-32 max-w-3xl mx-auto w-full mb-20">
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
          <LifeCard
            Icon={Film}
            title="Movies & Show"
            subTitle="Movies and shows that have inspired me"
          />
          <LifeCard
            Icon={LibraryBig}
            title="Books"
            subTitle="Books that have influenced my thinking and personal growth"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default PersonalLife;

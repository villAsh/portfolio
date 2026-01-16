"use client";

import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import { motion } from "motion/react";

type Props = {
  subTitle: string;
  title: string;
  description: string;
};
const Header = ({ subTitle, title, description }: Props) => {
  return (
    <motion.div
      initial={INITIAL}
      whileInView={WHILE_IN_VIEW}
      viewport={{ once: true }}
      transition={TRANSITION}
      className="space-y-4"
    >
      <div className="flex items-center justify-center gap-x-2">
        <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
        <span className="text-xs text-center font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
          {subTitle}
        </span>
        <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
      </div>
      <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight text-center">
        {title}
      </h2>
      <p className="text-neutral-500 dark:text-neutral-400 text-lg leading-relaxed text-center">
        {description}
      </p>
    </motion.div>
  );
};

export default Header;

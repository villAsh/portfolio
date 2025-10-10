"use client";

import { AnimatePresence, motion } from "motion/react";
import { LeftCurlyBrace, RightCurlyBrace } from "./curly-braces";
import SkillSection from "./skill-section";
import { BACKEND, FRONTEND, SERVICES } from "@/lib/data";

const skillContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const TechStack = () => {
  return (
    <AnimatePresence>
      <motion.div className="border-4 w-full px-4 rounded-xl h-full relative group">
        <motion.div
          variants={skillContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-y-4"
        >
          <SkillSection heading="Frontend" data={FRONTEND} />
          <SkillSection heading="Backend" data={BACKEND} />
          <SkillSection heading="DB & Services" data={SERVICES} />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechStack;

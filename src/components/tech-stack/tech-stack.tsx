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
      <motion.div
        layout
        className="border-4 w-full px-4 py-2 rounded-xl h-full p-1 relative group"
        whileHover={"hover"}
      >
        <motion.div className="flex flex-row items-center justify-center gap-y-4">
          <LeftCurlyBrace />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-3xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-b from-gray-800 to-80% to-gray-300 dark:from-gray-100 dark:via-gray-300 dark:via-55% dark:to-gray-500"
          >
            SKILLS
          </motion.h1>
          <RightCurlyBrace />
        </motion.div>
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

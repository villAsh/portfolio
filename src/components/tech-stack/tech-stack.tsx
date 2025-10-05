"use client";

import { AnimatePresence, motion } from "motion/react";
import { LeftCurlyBrace, RightCurlyBrace } from "./curly-braces";

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
            className="text-3xl font-bold uppercase"
          >
            SKILLS
          </motion.h1>
          <RightCurlyBrace />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default TechStack;

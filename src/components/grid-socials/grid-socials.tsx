"use client";
import { AnimatePresence, motion, Variant, Variants } from "motion/react";
import { Github, Gmail, LinkedIn } from "../ui/icons";
import { useState } from "react";

const parentVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const childrenVariants: Variants = {
  hidden: { opacity: 0, y: -100, rotateX: -90 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 10,
      stiffness: 300,
      duration: 0.5,
    },
  },
};

const tooltipVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 250 },
  },
  exit: {
    opacity: 0,
    y: 10,
    transition: { type: "spring", damping: 18, stiffness: 250 },
  },
};

const GridSocial = () => {
  const [hover, setHover] = useState("");
  return (
    <div className="min-w-2xs px-4 py-2 rounded-xl p-1 h-full w-full">
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="flex"
      >
        {["S", "O", "C", "I", "A", "L", "S"].map((item, i) => (
          <motion.h1
            variants={childrenVariants}
            key={item + i}
            className="text-5xl font-extrabold uppercase inline-block"
          >
            {item}
          </motion.h1>
        ))}
      </motion.div>
      <div className="flex flex-row items-center justify-start gap-5 mt-5 relative">
        <motion.div
          onMouseEnter={() => setHover("Github")}
          onMouseLeave={() => setHover("")}
        >
          <Github />
        </motion.div>
        <motion.div
          onMouseEnter={() => setHover("Gmail")}
          onMouseLeave={() => setHover("")}
        >
          <Gmail />
        </motion.div>
        <motion.div
          onMouseEnter={() => setHover("LinkedIn")}
          onMouseLeave={() => setHover("")}
        >
          <LinkedIn />
        </motion.div>
        <AnimatePresence mode="wait">
          {hover && (
            <motion.div
              className="absolute -right-16 top-5 rotate-90 bg-gray-100 px-6 py-1 rounded-md dark:bg-background border-2"
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={hover}
            >
              <motion.h1 className="text-sm font-semibold text-gray-600 dark:text-gray-300">
                {hover}
              </motion.h1>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default GridSocial;

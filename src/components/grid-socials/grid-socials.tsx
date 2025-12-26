"use client";
import { AnimatePresence, motion, Variant, Variants } from "motion/react";
import { Github, Gmail, LeetCode, LinkedIn, PeerList, XCOM } from "../ui/icons";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { TEXT_GRADIENT } from "@/lib/classes";

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
  hidden: { opacity: 0, y: -25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", damping: 18, stiffness: 250 },
  },
  exit: {
    opacity: 0,
    y: 25,
    transition: { type: "spring", damping: 18, stiffness: 250 },
  },
};

enum SOCIALS {
  GMAIL = "gmail",
  LINKEDIN = "linkedin",
  GITHUB = "github",
  PEERLIST = "peerlist",
  X = "x",
  LEETCODE = "LeetCode"
}

const GridSocial = () => {
  const [hover, setHover] = useState("");

  const debounceAnimation = (state: string) => {
    setTimeout(() => setHover(state), 300);
  };
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
            key={`${item} + ${i + 1}`}
            className={cn("text-5xl font-extrabold uppercase inline-block", TEXT_GRADIENT)}
          >
            {item}
          </motion.h1>
        ))}
      </motion.div>
      <div className="grid grid-cols-3 gap-y-6 mt-3 relative">
        <motion.div
          onMouseEnter={() => debounceAnimation(SOCIALS.GITHUB)}
          onMouseLeave={() => setHover("")}
        >
          <Github />
        </motion.div>
        <motion.div
          onMouseEnter={() => debounceAnimation(SOCIALS.GMAIL)}
          onMouseLeave={() => setHover("")}
        >
          <Gmail />
        </motion.div>
        <motion.div
          onMouseEnter={() => debounceAnimation(SOCIALS.LINKEDIN)}
          onMouseLeave={() => setHover("")}
        >
          <LinkedIn />
        </motion.div>
        <motion.div
          onMouseEnter={() => debounceAnimation(SOCIALS.PEERLIST)}
          onMouseLeave={() => setHover("")}
        >
          <PeerList />
        </motion.div>
        <motion.div
          onMouseEnter={() => debounceAnimation(SOCIALS.X)}
          onMouseLeave={() => setHover("")}
        >
          <XCOM />
        </motion.div>
        <motion.div
          onMouseEnter={() => debounceAnimation(SOCIALS.LEETCODE)}
          onMouseLeave={() => setHover("")}
        >
          <LeetCode />
        </motion.div>
        <AnimatePresence mode="popLayout" initial={false}>
          {hover && (
            <motion.div
              className="absolute -right-20 top-5 rotate-90 bg-gray-100 px-6 py-1 rounded-md dark:bg-background border-2"
              variants={tooltipVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              key={hover}
            >
              <motion.h1 className="text-sm font-semibold text-gray-600 dark:text-gray-300 !capitalize">
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

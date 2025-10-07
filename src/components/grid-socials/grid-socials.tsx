"use client";
import { motion, Variant, Variants } from "motion/react";

const parentVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.6 },
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
      damping: 15,
      stiffness: 100,
      duration: 0.5,
    },
  },
};

const GridSocial = () => {
  return (
    <div className="min-w-2xs px-4 py-2 rounded-xl p-1 h-full w-full">
      <motion.div
        variants={parentVariant}
        initial="hidden"
        animate="visible"
        className="flex space-x-2"
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
    </div>
  );
};

export default GridSocial;

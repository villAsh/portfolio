"use client";
import { motion } from "motion/react";
import { BottomGradient } from "../ui/bottom-gradient";

type Props = {
  heading: string;
  data: string[];
};

const variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: [0.7, 1.1, 1],
    transition: { duration: 0.7 },
  },
};

const SkillSection = ({ data, heading }: Props) => {
  return (
    <motion.div className="mt-3" variants={variants}>
      <h6 className="text-base font-semibold bg-clip-text bg-linear-to-b from-gray-800 to-80% to-gray-300 dark:from-gray-100 dark:via-gray-300 dark:via-55% dark:to-gray-500 text-transparent">
        {heading}:
      </h6>
      <div className="flex flex-row flex-wrap gap-1 mt-2">
        {data.map((item) => (
          <motion.span
            drag
            dragTransition={{ bounceDamping: 15 }}
            dragSnapToOrigin
            className="border-2 group/btn relative rounded-full px-4 py-1 text-xs inline-block font-medium hover:cursor-grab active:cursor-grabbing dark:text-gray-300 text-gray-600"
            key={item}
            variants={itemVariants}
          >
            {item}
            <BottomGradient />
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSection;

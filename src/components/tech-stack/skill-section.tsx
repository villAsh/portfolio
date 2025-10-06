"use client";
import { VaultIcon } from "lucide-react";
import { motion } from "motion/react";

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
    <motion.div className="mt-5" variants={variants}>
      <h6 className="text-base font-semibold">{heading}:</h6>
      <div className="flex flex-row flex-wrap gap-1 mt-2">
        {data.map((item) => (
          <motion.span
            drag
            dragTransition={{ bounceDamping: 15 }}
            dragSnapToOrigin
            className="border-2 rounded-full px-4 py-1 text-xs inline-block relative font-medium hover:cursor-grab active:cursor-grabbing"
            key={item}
            variants={itemVariants}
          >
            {item}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillSection;

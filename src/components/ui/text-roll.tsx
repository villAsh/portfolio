"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";

type Props = {
  className?: string;
  children: string;
};

const STAGGER = 0.035;

const TextRoll = ({ className, children }: Props) => {
  return (
    <motion.span
      className={cn("relative block overflow-hidden", className)}
      style={{
        lineHeight: 0.75,
      }}
    >
      <div>
        {children.split("").map((letter, i) => (
          <motion.span
            key={`letter-${letter}-${i + 1}`}
            transition={{
              ease: "easeInOut",
              delay: STAGGER * 1,
            }}
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.span>
  );
};

export default TextRoll;

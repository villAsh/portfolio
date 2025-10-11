import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";

type Props = {
  text: string;
  words: string[];
  duration?: number;
};

const TextFlip = ({ text, words, duration = 3000 }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <motion.span
        layoutId="subText"
        className="text-xl font-bold tracking-tight"
      >
        {text}
      </motion.span>
      <motion.span layout className="relative w-fit overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.span
            key={currentIndex}
            initial={{ scale: [0.5, 0.25, 0], filter: "blur(15px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            exit={{
              scale: [1, 0.5, 0.25, 0],
              filter: "blur(15px)",
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className={
              "inline-block whitespace-nowrap tracking-tight font-semibold text-xl"
            }
          >
            {words[currentIndex]}
          </motion.span>
        </AnimatePresence>
      </motion.span>
    </>
  );
};

export default TextFlip;

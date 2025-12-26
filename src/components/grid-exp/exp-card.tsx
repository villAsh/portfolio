"use client";
import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

type Props = {
  icon: ReactNode;
  heading: string;
  year?: string;
  course?: string;
  subHeading: string;
};

const variants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
const ExpCard = ({ icon, heading, subHeading, year, course }: Props) => {
  return (
    <motion.div
      variants={variants}
      className="flex flex-row items-start gap-x-2 z-50"
    >
      {icon}
      <div>
        <h1 className="text-lg font-semibold dark:text-gray-200 text-gray-600">
          {heading}
          {subHeading && <span className="text-[10px] pl-2">{year}</span>}
        </h1>
        {course && (
          <p className="text-base font-medium dark:text-gray-300 text-gray-600">
            {course}
          </p>
        )}
        <p className="text-base font-medium dark:text-gray-300 text-gray-600">
          {subHeading}
        </p>
      </div>
    </motion.div>
  );
};

export default ExpCard;

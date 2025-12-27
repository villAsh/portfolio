"use client";

import { motion, Variants } from "motion/react";
import { Briefcase, Hat } from "../ui/icons";
import ExpCard from "./exp-card";

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      ease: "easeInOut",
      when: "beforeChildren",
      staggerChildren: 0.7,
      duration: 0.3,
      delay: 1,
    },
  },
};
const GridExperience = () => {
  return (
    <div className="min-w-2xs px-4 py-2 rounded-sm p-1 h-fit w-full relative">
      <h1 className="text-2xl font-extrabold uppercase inline-block bg-clip-text bg-gradient-to-b from-gray-800 to-80% to-gray-300 dark:from-gray-100 dark:via-gray-300 dark:via-55% dark:to-gray-500 text-transparent">
        Experience
      </h1>
      <motion.div className="mt-5 relative">
        <motion.div
          variants={parentVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col gap-y-4 relative"
        >
          <ExpCard
            icon={<Briefcase />}
            heading="Software Engineer"
            subHeading="Seaflux Technologies"
            year="(Sept-2024 - current)"
          />
          <ExpCard
            icon={<Briefcase />}
            heading="Junior Software Engineer"
            subHeading="Seaflux Technologies"
            year="(Sept-2023 - Oct-2024)"
          />
          <ExpCard
            icon={<Briefcase />}
            heading="Software Intern"
            subHeading="Seaflux Technologies"
            year="(Jun-2023 - Sept-2023)"
          />
          <ExpCard
            icon={<Hat />}
            heading="Graduation"
            course="Bachelors of Computer Application"
            subHeading="Gujarat University"
            year="(2020-2023)"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default GridExperience;

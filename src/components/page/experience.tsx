"use client";

import { EXPERIENCE } from "@/lib/data";
import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import { motion } from "motion/react";
import ExperienceCard from "./experience-card";

const Experience = () => {
  return EXPERIENCE.map((exp, index) => (
    <motion.div
      key={`${exp.organization}-${index + 1}`}
      initial={INITIAL}
      whileInView={WHILE_IN_VIEW}
      viewport={{ once: true }}
      transition={{ ...TRANSITION, delay: index * 0.1 }}
    >
      <ExperienceCard {...exp} />
    </motion.div>
  ));
};

export default Experience;

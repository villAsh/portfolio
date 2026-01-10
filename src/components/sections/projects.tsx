"use client";

import { motion } from "motion/react";

const Projects = () => {
  return (
    <section className="mt-32 max-w-2xl mx-auto w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-x-2">
          <div className="h-[1px] w-8 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Featured Work
          </span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Projects
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-lg leading-relaxed">
          A selection of projects where I've applied my technical skills to solve real-world problems.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col items-center justify-center py-20 border-2 border-dashed border-neutral-200 dark:border-neutral-800 rounded-2xl">
        <p className="text-neutral-400 dark:text-neutral-500 font-medium italic">
          Project showcase coming soon...
        </p>
      </div>
    </section>
  );
};

export default Projects;


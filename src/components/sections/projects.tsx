"use client";

import { motion } from "motion/react";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/lib/data";

const Projects = () => {
  return (
    <section id="projects" className="mt-32 max-w-3xl mx-auto w-full px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <div className="flex items-center gap-x-2">
          <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Featured Work
          </span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Projects
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-lg leading-relaxed">
          A selection of projects where I've applied my technical skills to
          solve real-world problems.
        </p>
      </motion.div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {PROJECTS.map((item) => (
          <ProjectCard key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

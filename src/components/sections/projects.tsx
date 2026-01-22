"use client";

import { motion } from "motion/react";
import { ProjectCard } from "./project-card";
import { PROJECTS } from "@/lib/data";
import { Button } from "../ui/button";
import Link from "next/link";

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
      <Button className=" bg-background border text-neutral-800 mt-10 flex items-center justify-center mx-auto  hover:bg-background/05 active:scale-95 transition-transform surface-inset dark:text-neutral-300 dark:border-neutral-400 dark:border-1px">
        <Link prefetch href={"/projects"}>View all projects and OS Contributions</Link>
      </Button>
    </section>
  );
};

export default Projects;

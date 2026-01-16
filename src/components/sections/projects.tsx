"use client";

import { motion } from "motion/react";
import { ProjectCard } from "./project-card";

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
        <ProjectCard
          title="Crypto Trading App"
          description="A multi-exchange crypto trading platform which supports 4+ exchanges, spot & futures trading and advanced trading bots."
          image="/projects/crypto-web-app.png"
          category={"pro"}
          org="seaflux"
          status="All Systems Operational"
          tags={[
            {
              name: "React",
              value: "react",
            },
            {
              name: "Tailwind",
              value: "tailwindcss",
            },
            {
              name: "TypeScript",
              value: "typescript",
            },
            {
              name: "Socket.IO",
              value: "socketdotio",
            },
            {
              name: "Vite",
              value: "vite",
            },
            {
              name: "Tanstack Query",
              value: "reactquery",
            },
            {
              name: "Tanstack Router",
              value: "tanstack",
            },
          ]}
        />
      </div>
    </section>
  );
};

export default Projects;

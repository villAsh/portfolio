"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";

const AboutMe = () => {
  return (
    <section className="mt-32 max-w-2xl mx-auto w-full px-4">
      <motion.div
        initial={INITIAL}
        whileInView={WHILE_IN_VIEW}
        viewport={{ once: true }}
        transition={TRANSITION}
        className="space-y-4 mb-12"
      >
        <div className="flex items-center gap-x-2">
          <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Get to know me
          </span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          About Me
        </h2>
      </motion.div>

      <div className="flex flex-col gap-y-2">
        <div className="flex flex-row items-start justify-start gap-x-8 max-md:flex-col">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-yellow-300 px-4 pt-4 rounded-[12px] dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-sm transition-colors duration-500"
          >
            <Image
              src={"/goku.png"}
              width={1080}
              height={800}
              alt="profile"
              className="object-contain w-[60vw] h-fit max-md:w-[30vw] max-md:h-1/2"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-y-6"
          >
            <h3 className="pt-3 text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-100 max-md:pt-6">
              Vilas Chauvhan
            </h3>
            <p className="text-lg font-medium leading-relaxed text-neutral-500 dark:text-neutral-400">
              I’m a Full-Stack Web Developer with a strong frontend focus and an
              Open-Source Contributor. I build visually engaging, user-centric
              web applications that feel great to use and scale effortlessly.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

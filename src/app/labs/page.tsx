"use client";
import { LABS_PARALLAX } from "@/lib/data";
import {
  ArrowLeft,
  Atom,
  Beaker,
  FlaskConical,
  Microscope,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import Link from "next/link";
import { useEffect } from "react";

const ICONS = [
  { Icon: Beaker, size: 40, top: "20%", left: "15%", delay: 0 },
  { Icon: FlaskConical, size: 60, top: "70%", left: "80%", delay: 0.5 },
  { Icon: Microscope, size: 50, top: "40%", left: "85%", delay: 1 },
  { Icon: Atom, size: 45, top: "80%", left: "10%", delay: 1.5 },
];
const page = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const iconX = useTransform(smoothX, (v) => v * 1.5);
  const iconY = useTransform(smoothY, (v) => v * 1.5);
  const contentX = useTransform(smoothX, (v) => v * 0.5);
  const contentY = useTransform(smoothY, (v) => v * 0.5);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerHeight, innerWidth } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 30);
      mouseY.set((clientY / innerHeight - 0.5) * 30);
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <section className="relative h-[calc(100vh-60px)] w-full overflow-hidden bg-background flex flex-col items-center justify-center">
      {ICONS.map(({ Icon, delay, left, size, top }, i) => (
        <motion.div
          key={delay}
          className="absolute text-neutral-200 dark:text-neutral-800"
          style={{ top, left, x: iconX, y: iconY }}
          animate={{
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5 + i,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <Icon size={size} strokeWidth={1} />
        </motion.div>
      ))}

      <motion.div
        style={{ x: contentX, y: contentY }}
        className="relative z-10 flex flex-col items-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 flex items-center gap-x-3 bg-yellow-400/10 dark:bg-yellow-400/5 px-4 py-2 rounded-full border border-yellow-500/20"
        >
          <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          <span className="text-sm font-bold uppercase tracking-[0.3em] text-yellow-600 dark:text-yellow-500">
            Work in Progress
          </span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, filter: "blur(10px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-8xl font-black tracking-tighter text-neutral-900 dark:text-neutral-100 mb-4"
        >
          LABS<span className="text-yellow-500">.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-neutral-500 dark:text-neutral-400 max-w-md leading-relaxed mb-10"
        >
          A space where I experiment with new Components and complex animations.
          Coming soon to your browser.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <Link
            href="/"
            className="group flex items-center gap-x-2 bg-neutral-900 dark:bg-neutral-100 text-neutral-100 dark:text-neutral-900 px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300"
          >
            <ArrowLeft
              size={18}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Back to Base
          </Link>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-10 left-0 w-full overflow-hidden pointer-events-none whitespace-nowrap opacity-10 select-none">
        <motion.div
          animate={{
            x: [0, -1000],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="text-[12rem] font-black text-neutral-800 tracking-tighter uppercase flex gap-x-20"
        >
          {LABS_PARALLAX.map((item) => (
            <span key={"item"}>{item}</span>
          ))}
        </motion.div>
      </div>

      <div className="absolute left-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />
      <div className="absolute right-10 top-0 bottom-0 w-px bg-linear-to-b from-transparent via-neutral-200 dark:via-neutral-800 to-transparent" />

      <motion.div
        animate={{
          top: ["0%", "100%", "0%"],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute left-0 right-0 h-[2px] bg-linear-to-r from-transparent via-yellow-500/20 to-transparent z-0 pointer-events-none"
      />

      <div className="absolute top-10 left-10 hidden lg:block">
        <h1 className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
          experiment_id: V20D27
        </h1>
      </div>
      <div className="absolute bottom-10 right-10 hidden lg:block">
        <h1 className="text-[10px] font-mono text-neutral-400 dark:text-neutral-600 uppercase tracking-widest">
          status: In_Development
        </h1>
      </div>
    </section>
  );
};

export default page;

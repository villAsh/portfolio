"use client";

import { motion } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Code2, Server, Wrench, Smartphone } from "lucide-react";
import { cn } from "@/lib/utils";
import { TECH_DATA } from "@/lib/data";
import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import Image from "next/image";

const TechItem = ({
  name,
  slug,
  color,
  fallback: FallbackIcon,
  index,
}: {
  name: string;
  slug: string;
  color: string;
  fallback?: any;
  index: number;
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              delay: index * 0.01,
            }}
            whileHover={{
              scale: 1.15,
              y: -5,
              transition: { duration: 0.032 },
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative flex items-center justify-center w-12 h-12 rounded-[8px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-[0_2px_10px_rgba(0,0,0,0.05)] dark:shadow-[0_2px_10px_rgba(0,0,0,0.2)] hover:border-transparent dark:hover:border-transparent transition-all duration-300 cursor-default"
          >
            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity blur-xl rounded-full"
              style={{ backgroundColor: color }}
            />

            <div className="absolute inset-0 bg-linear-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900 opacity-0 group-hover:opacity-100 transition-opacity rounded-[8px]" />

            <div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-[8px] border-2 pointer-events-none"
              style={{
                borderColor: color,
                filter: `drop-shadow(0 0 8px ${color}44)`,
              }}
            />

            <div className="relative z-10 flex items-center justify-center">
              {FallbackIcon ? (
                <FallbackIcon className="w-6 h-6 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100 transition-colors" />
              ) : (
                <div className="w-6 h-6 flex items-center justify-center">
                  <Image
                    src={
                      slug.startsWith("/")
                        ? slug
                        : `https://cdn.simpleicons.org/${slug}`
                    }
                    width={24}
                    height={24}
                    alt={name}
                    unoptimized
                    className={cn(
                      "w-full h-full object-contain transition-all duration-300",
                      "brightness-0 dark:invert group-hover:brightness-100 dark:group-hover:invert-0 opacity-100",
                    )}
                  />
                </div>
              )}
            </div>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent
          side="top"
          className="text-neutral-300 dark:text-neutral-800 text-[11px] font-semibold px-2 py-1 shadow-md animate-in rounded-[8px] fade-in zoom-in duration-200"
        >
          {name}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

const TechCategory = ({
  title,
  icon,
  items,
  className,
}: {
  title: string;
  icon: React.ReactNode;
  items: typeof TECH_DATA.frontend;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col gap-y-6", className)}>
      <div className="flex items-center gap-x-3 px-1">
        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400">
          {icon}
        </span>
        <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
          {title}
        </h3>
      </div>
      <div className="flex flex-wrap gap-4">
        {items.map((item, idx) => (
          <TechItem key={item.name} {...item} index={idx} />
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section className="mt-32 max-w-2xl mx-auto w-full mb-20">
      <motion.div
        initial={INITIAL}
        whileInView={WHILE_IN_VIEW}
        viewport={{ once: true }}
        transition={TRANSITION}
        className="space-y-4"
      >
        <div className="flex items-center gap-x-2">
          <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Skills & Tools
          </span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Tech Stack
        </h2>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg max-w-lg leading-relaxed">
          A comprehensive list of technologies and tools I master to build
          modern, scalable applications.
        </p>
      </motion.div>

      <div className="mt-16 flex flex-col gap-y-16">
        <TechCategory
          title="Frontend Development"
          icon={<Code2 className="w-4 h-4" />}
          items={TECH_DATA.frontend}
        />
        <TechCategory
          title="App Development"
          icon={<Smartphone className="w-4 h-4" />}
          items={TECH_DATA.app}
        />
        <TechCategory
          title="Backend & Database"
          icon={<Server className="w-4 h-4" />}
          items={TECH_DATA.backend}
        />
        <TechCategory
          title="Tools & Environment"
          icon={<Wrench className="w-4 h-4" />}
          items={TECH_DATA.tools}
        />
      </div>
    </section>
  );
};

export default TechStack;

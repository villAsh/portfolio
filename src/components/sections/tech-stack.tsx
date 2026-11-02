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

// near-black brand colors vanish on the dark card, so flip them
const isDark = (hex: string) => {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  return 0.299 * r + 0.587 * g + 0.114 * b < 60;
};

const TechItem = ({
  name,
  slug,
  dark,
  color,
  fallback: FallbackIcon,
}: {
  name: string;
  slug: string;
  dark?: string;
  color: string;
  fallback?: any;
}) => {
  return (
    <TooltipProvider delayDuration={100}>
      <Tooltip>
        <TooltipTrigger asChild>
          <div
            className="group relative flex items-center justify-center w-10 h-10 rounded-[8px] bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-transparent dark:hover:border-transparent transition-all duration-300 cursor-default"
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
                <FallbackIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-neutral-100" />
              ) : (
                <div className="w-6 h-6 flex items-center justify-center">
                  {[slug, dark].map((s, i) =>
                    s && (
                      <Image
                        key={s}
                        src={s.startsWith("/") ? s : `/tech/${s}.svg`}
                        width={24}
                        unoptimized
                        height={24}
                        alt={name}
                        className={cn(
                          "w-full h-full object-contain transition-all duration-300",
                          dark && (i ? "hidden dark:block" : "dark:hidden"),
                          !dark && isDark(color) && "dark:invert",
                        )}
                      />
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
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
        {items.map((item) => (
          <TechItem key={item.name} {...item} />
        ))}
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="tech-stack" className="mt-32 max-w-3xl mx-auto w-full mb-20">
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

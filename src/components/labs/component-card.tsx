"use client";

import { motion } from "motion/react";
import type { LabComponent } from "@/lib/labs-registry";
import { cn } from "@/lib/utils";
import { CopyButton } from "./copy-button";

const COMPLEXITY_STYLES = {
  simple:
    "bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  medium:
    "bg-yellow-400/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  complex: "bg-red-400/10 text-red-600 dark:text-red-400 border-red-500/20",
};

interface ComponentCardProps {
  component: LabComponent;
  index: number;
}

export function ComponentCard({ component, index }: ComponentCardProps) {
  const {
    name,
    description,
    registryCommand,
    preview,
    complexity,
    isNew,
  } = component;

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10, scale: 0.97 }}
      transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
      className="flex flex-col rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden group"
    >
      {/* ── Info zone ────────────────────────────────────────────── */}
      <div className="flex flex-col gap-3 p-5 flex-1 relative">
        <div className="flex items-start justify-between gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base text-neutral-900 dark:text-neutral-100 leading-tight">
                {name}
              </h3>
              {isNew && (
                <span className="flex items-center gap-1 px-1.5 py-0.5 rounded bg-yellow-400/10 border border-yellow-500/20 text-[8px] font-black uppercase tracking-tighter text-yellow-600 dark:text-yellow-400">
                  New
                </span>
              )}
            </div>
            <span
              className={cn(
                "w-fit text-[9px] font-bold px-1.5 py-0.5 rounded border uppercase tracking-wider",
                COMPLEXITY_STYLES[complexity],
              )}
            >
              {complexity}
            </span>
          </div>
          
          <CopyButton command={registryCommand} />
        </div>

        <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

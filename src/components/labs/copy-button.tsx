"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  command: string;
}

export function CopyButton({ command }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleCopy}
        className={cn(
          "p-2 rounded-lg transition-all duration-200",
          "bg-white/80 dark:bg-neutral-900/80 backdrop-blur-sm",
          "border border-neutral-200 dark:border-neutral-800",
          "hover:border-neutral-300 dark:hover:border-neutral-700",
          "hover:bg-white dark:hover:bg-neutral-800",
          "active:scale-[0.98]",
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          {copied ? (
            <motion.div
              key="check"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Check className="w-4 h-4 text-emerald-500" />
            </motion.div>
          ) : (
            <motion.div
              key="copy"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            >
              <Copy className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {copied && (
          <motion.div
            initial={{ opacity: 0, y: 5, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 5, x: "-50%" }}
            className="absolute -top-10 left-1/2 px-2 py-1 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-neutral-900 text-[10px] font-medium rounded shadow-xl pointer-events-none"
          >
            Copied!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

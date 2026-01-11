"use client";

import { motion } from "motion/react";
import { QUOTES } from "@/lib/data";
import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import { Quote as QuoteIcon } from "lucide-react";
import { useMemo } from "react";

const Quote = () => {
  const dailyQuote = useMemo(() => {
    if (!QUOTES || QUOTES.length === 0) return null;

    const today = new Date();
    const startOfDay = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    ).getTime();
    const dayCounter = Math.floor(startOfDay / (1000 * 60 * 60 * 24));

    const seed = dayCounter;
    const x = Math.sin(seed) * 10000;
    const randomIndex = Math.floor((x - Math.floor(x)) * QUOTES.length);

    return QUOTES[randomIndex];
  }, []);

  if (!dailyQuote) return null;

  return (
    <section className="mt-24 max-w-2xl mx-auto w-full mb-24 px-4">
      <motion.div
        initial={INITIAL}
        whileInView={WHILE_IN_VIEW}
        viewport={{ once: true }}
        transition={TRANSITION}
        className="space-y-4 mb-10"
      >
        <div className="flex items-center gap-x-2">
          <div className="h-px w-8 bg-neutral-300 dark:bg-neutral-700" />
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
            Thought
          </span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[16px] bg-neutral-50/50 dark:bg-neutral-900/30 border border-neutral-200 dark:border-neutral-800 p-6 md:p-8 group"
      >
        {/* Background Decorative Element */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] dark:opacity-[0.05] group-hover:scale-110 transition-transform duration-700 pointer-events-none">
          <QuoteIcon size={120} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col gap-y-6">
          <div className="flex items-start justify-between">
            <div className="bg-yellow-400/10 dark:bg-yellow-400/5 p-2 rounded-lg">
              <QuoteIcon className="text-yellow-600 dark:text-yellow-500 w-5 h-5" />
            </div>
          </div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl font-medium text-neutral-800 dark:text-neutral-200 leading-snug italic"
            >
              "{dailyQuote.text}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex items-center gap-x-3"
            >
              <div className="h-px w-4 bg-neutral-300 dark:bg-neutral-700" />
              <div className="flex flex-row items-baseline gap-x-2">
                <span className="text-sm font-bold text-neutral-900 dark:text-neutral-300">
                  {dailyQuote.author}
                </span>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 dark:text-neutral-500">
                  / {dailyQuote.source}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Quote;

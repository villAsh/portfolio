"use client";

import { INITIAL, TRANSITION, WHILE_IN_VIEW } from "@/lib/framerConfig";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import dynamic from "next/dynamic";

const ActivityCalendar = dynamic(
  () => import("react-github-calendar").then((mod) => mod.GitHubCalendar),
  { ssr: false },
);

const githubConfig = {
  // Month labels
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  // Weekday labels (empty for weekends, M for Monday, etc.)
  weekdays: ["", "M", "", "W", "", "F", ""],

  // Total count label template
  totalCountLabel: "{{count}} contributions in the last year",
};

const GithubGraph = () => {
  const { theme } = useTheme();
  return (
    <section className="mt-32 max-w-3xl mx-auto w-full">
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
            Contributions
          </span>
        </div>
        <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
          Github Activity
        </h2>
      </motion.div>
      <div className="overflow-x-auto inset-shadow-2xs border py-5 px-3 rounded-[8px] max-w-3xl w-fit overflow-hidden max-md:w-[95%]">
        <ActivityCalendar
          username="villAsh"
          blockSize={10}
          blockMargin={4}
          fontSize={12}
          maxLevel={4}
          colorScheme={theme === "dark" ? "dark" : "light"}
          theme={{
            dark: [
              "rgb(22, 27, 34)",
              "rgb(14, 68, 41)",
              "rgb(0, 109, 50)",
              "rgb(38, 166, 65)",
              "rgb(57, 211, 83)",
            ],
            light: [
              "rgb(235, 237, 240)",
              "rgb(155, 233, 168)",
              "rgb(64, 196, 99)",
              "rgb(48, 161, 78)",
              "rgb(33, 110, 57)",
            ],
          }}
          style={{
            color: "rgb(139, 148, 158)",
          }}
          labels={{
            months: githubConfig.months,
            weekdays: githubConfig.weekdays,
            totalCount: githubConfig.totalCountLabel,
          }}
        />
      </div>
    </section>
  );
};

export default GithubGraph;

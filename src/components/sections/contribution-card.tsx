"use client";

import { motion } from "motion/react";
import {
  GitPullRequest,
  CircleDot,
  ExternalLink,
  GitMerge,
  GitBranch,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type ContributionProps = {
  id: string;
  repo: string;
  title: string;
  url: string;
  type: "pr" | "issue";
  status: "open" | "merged" | "closed";
  date: string;
  description?: string;
};

const statusStyles = {
  open: "text-green-500 bg-green-500/10 border-green-500/20",
  merged: "text-purple-500 bg-purple-500/10 border-purple-500/20",
  closed: "text-red-500 bg-red-500/10 border-red-500/20",
};

const typeIcons = {
  pr: GitPullRequest,
  issue: CircleDot,
};

export const ContributionCard = ({
  repo,
  title,
  url,
  type,
  status,
  date,
  description,
}: ContributionProps) => {
  const Icon = typeIcons[type];

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group block p-5 rounded-2xl bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 transition-all duration-300 hover:border-neutral-300 dark:hover:border-neutral-700 hover:shadow-lg hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between w-full gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <div>
              <GitBranch className="w-3 h-3" />
              <span className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors">
                {repo}
              </span>
            </div>
            <span className="text-neutral-300 dark:text-neutral-700">•</span>
            <span>{date}</span>
          </div>

          <h4 className="text-base font-semibold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors line-clamp-1">
            {title}
          </h4>

          {description && (
            <p className="text-sm text-neutral-500 dark:text-neutral-400 line-clamp-2 leading-relaxed">
              {description}
            </p>
          )}

          <div className="flex items-center gap-3 pt-1">
            <div
              className={cn(
                "flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider border",
                statusStyles[status],
              )}
            >
              {status === "merged" ? (
                <GitMerge className="w-3 h-3" />
              ) : (
                <Icon className="w-3 h-3" />
              )}
              {status}
            </div>

            <div className="text-[11px] font-medium text-neutral-400 dark:text-neutral-500 flex items-center gap-1">
              {type === "pr" ? "Pull Request" : "Issue"}
            </div>
          </div>
        </div>

        <div className="opacity-0 group-hover:opacity-100 transition-opacity p-2 max-md:hidden">
          <ExternalLink className="w-4 h-4 text-neutral-400" />
        </div>
      </div>
    </motion.a>
  );
};

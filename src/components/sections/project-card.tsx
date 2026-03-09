"use client";

import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { Globe, Github, ArrowRight } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

type Technology = {
  name: string;
  value: string;
  invert?: boolean;
};

export type ProjectCardProps = {
  title: string;
  description: string;
  image: string;
  tags: Technology[];
  status: string;
  liveUrl?: string;
  githubUrl?: string;
  gradient?: string;
  category?: "pro" | "personal" | "open-source";
  org?: "seaflux";
};

export const Category = ({
  org,
  category,
}: {
  org?: string;
  category: string;
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-2 px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider",
        org
          ? "text-white bg-neutral-900 dark:bg-white dark:text-black"
          : "text-emerald-600 bg-emerald-50 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20",
      )}
    >
      {!org && (
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500"></span>
        </span>
      )}
      <span>{org ? org : category}</span>
    </div>
  );
};

export const ProjectCard = ({
  id,
  title,
  description,
  image,
  tags,
  status,
  liveUrl,
  githubUrl,
  gradient = "from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-900",
  category = "pro",
  org,
}: ({ id: string } & ProjectCardProps)) => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const detailsUrl = `/projects/${id.replace("project-", "void-icons")}`;
  const projectDetailsPath = id === "project-3" ? "/projects/void-icons" : liveUrl;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50"
    >
      <Link href={projectDetailsPath || "#"} className="flex flex-col flex-1">
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className={`relative w-full h-full rounded-t-2xl overflow-hidden bg-gradient-to-br ${gradient}`}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={mounted && id === "project-3" ? resolvedTheme : "static"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={
                    mounted && id === "project-3"
                      ? resolvedTheme === "dark"
                        ? "/projects/void-icons-dark.png"
                        : "/projects/void-icons-light.png"
                      : image
                  }
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col flex-1 p-4 pt-2">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight text-left">
              {title}
            </h3>
            <div className="flex gap-3" onClick={(e) => e.stopPropagation()}>
              {category !== "pro" && liveUrl && !liveUrl.startsWith("/") && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <Globe className="w-5 h-5" />
                </a>
              )}
              {category !== "pro" && githubUrl && (
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed mb-8 line-clamp-3 text-left">
            {description}
          </p>

          <div className="mt-auto space-y-6">
            <div className="space-y-3">
              <span className="text-[13px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest block text-left">
                Technologies
              </span>
              <TooltipProvider>
                <div className="flex flex-wrap gap-3 mt-2" onClick={(e) => e.stopPropagation()}>
                  {tags.map((tag, index) => (
                    <div key={tag.value}>
                      <Tooltip>
                        <TooltipTrigger value={tag.value}>
                          <div
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 shadow-sm"
                            title={tag.name}
                          >
                            <Image
                              src={`https://cdn.simpleicons.org/${tag.value}`}
                              width={20}
                              unoptimized
                              height={20}
                              alt={tag.name}
                              className={`p-0.5 ${tag.invert ? "dark:invert" : ""}`}
                            />
                          </div>
                        </TooltipTrigger>
                        <TooltipContent className="rounded-[8px]">
                          {tag.name}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  ))}
                </div>
              </TooltipProvider>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800">
              <Category category={category} org={org} />

              {category !== "pro" && (
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-[15px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

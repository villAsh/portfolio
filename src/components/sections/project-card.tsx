"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { Globe, Github, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Technology = {
  name: string;
  value: string;
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
        "flex items-center gap-2 px-3 py-1.5 rounded-full text-[13px] font-medium",
        org
          ? "text-neutral-100 dark:text-neutral-200 bg-seaflux"
          : "text-green-500 dark:text-green-500",
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
      </span>
      <span className="text-emerald-50">{org ? org : category}</span>
    </div>
  );
};

export const ProjectCard = ({
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
}: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative flex flex-col bg-white dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 rounded-[2rem] overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-neutral-200/50 dark:hover:shadow-neutral-900/50"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <div
          className={`relative w-full h-full rounded-t-2xl overflow-hidden bg-gradient-to-br ${gradient}`}
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-4 pt-2">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 tracking-tight">
            {title}
          </h3>
          <div className="flex gap-3">
            {category !== "pro" && liveUrl && (
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

        <p className="text-neutral-500 dark:text-neutral-400 text-[15px] leading-relaxed mb-8 line-clamp-3">
          {description}
        </p>

        <div className="mt-auto space-y-6">
          <div className="space-y-3">
            <span className="text-[13px] font-semibold text-neutral-400 dark:text-neutral-500 uppercase tracking-widest">
              Technologies
            </span>
            <div className="flex flex-wrap gap-3 mt-2">
              {tags.map((tag, index) => (
                <div
                  key={tag.value}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 shadow-sm"
                  title={tag.name}
                >
                  <Image
                    src={`https://cdn.simpleicons.org/${tag.value}`}
                    width={20}
                    unoptimized
                    height={20}
                    alt={tag.name}
                    className="p-0.5"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-neutral-100 dark:border-neutral-800">
            <Category category={category} org={org} />

            <motion.a
              href={liveUrl}
              className="flex items-center gap-2 text-[15px] font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
              whileHover={{ x: 5 }}
            >
              View Details
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

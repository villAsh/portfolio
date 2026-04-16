"use client";

import StarRating from "@/components/labs/component-star-rating";
import { motion } from "motion/react";
import { Heart, Trophy, Zap, ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const StarRatingShowcase = () => {
  const [rating1, setRating1] = useState(3);
  const [rating2, setRating2] = useState(4.5);

  return (
    <main className="min-h-screen w-full bg-neutral-50 dark:bg-neutral-950 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <Link
            href="/labs"
            className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Labs
          </Link>
          <div className="px-3 py-1 rounded-full bg-amber-400/10 border border-amber-500/20 text-[10px] font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Showcase
          </div>
        </div>

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-neutral-900 dark:text-neutral-100 mb-4">
            Star Rating<span className="text-amber-500">.</span>
          </h1>
          <p className="text-lg text-neutral-500 dark:text-neutral-400 max-w-2xl leading-relaxed">
            A fully optimized, accessible, and customizable rating component.
            Built with Framer Motion for liquid-smooth interactions and Lucide
            for flexibility.
          </p>
        </div>

        {/* Grid of variants */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Default */}
          <section className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 flex flex-col items-center justify-center gap-6">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest self-start">
              Default Pattern
            </h3>
            <StarRating value={rating1} onChange={setRating1} />
            <p className="text-xs text-neutral-500">
              Basic 5-star rating with spring animations
            </p>
          </section>

          {/* Half Stars */}
          <section className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 flex flex-col items-center justify-center gap-6">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest self-start">
              Precision Mode
            </h3>
            <StarRating
              allowHalf
              maxStars={5}
              value={rating2}
              onChange={setRating2}
              activeColor="text-emerald-500"
            />
            <p className="text-xs text-neutral-500">
              Supports half-stars and custom active colors
            </p>
          </section>

          {/* Custom Icons & Sizes */}
          <section className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 flex flex-col items-center justify-center gap-6">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest self-start">
              Custom Aesthetics
            </h3>
            <div className="flex flex-col gap-8 items-center">
              <StarRating
                icon={Heart}
                size={34}
                activeColor="text-red-500"
                defaultValue={4}
              />
              <StarRating
                icon={Zap}
                size={20}
                activeColor="text-yellow-400"
                maxStars={10}
                defaultValue={7}
              />
            </div>
            <p className="text-xs text-neutral-500">
              Swap icons, scale sizes, and change quantity
            </p>
          </section>

          {/* Read Only & Accessibility */}
          <section className="p-8 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/50 flex flex-col items-center justify-center gap-6">
            <h3 className="text-sm font-semibold text-neutral-400 uppercase tracking-widest self-start">
              Read Only
            </h3>
            <div className="flex flex-col gap-4 items-center">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 italic">
                  4.8
                </span>
                <StarRating
                  readOnly
                  defaultValue={4.5}
                  allowHalf
                  size={24}
                  activeColor="text-indigo-500"
                />
              </div>
              <p className="text-[10px] text-neutral-400 font-mono">
                Based on 1,248 reviews
              </p>
            </div>
            <p className="text-xs text-neutral-500">
              Perfect for displaying static review data
            </p>
          </section>
        </div>

        {/* Features list */}
        <div className="mt-20 pt-10 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-8 flex items-center gap-2">
            <Trophy className="text-amber-500" size={24} />
            Key Features
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Fully Animated",
                desc: "Spring-based physics for hover and selection states.",
              },
              {
                title: "Half-Star Precision",
                desc: "Precise mouse tracking for fractional ratings.",
              },
              {
                title: "Accessible",
                desc: "WAI-ARIA roles, radio-group patterns, and keyboard support.",
              },
              {
                title: "Zero Dependencies",
                desc: "Only requires Framer Motion and Lucide React.",
              },
              {
                title: "Customizable",
                desc: "Easily swap icons, colors, and scales via props.",
              },
              {
                title: "Controlled/Uncontrolled",
                desc: "Works both as a pure and managed component.",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-1"
              >
                <h4 className="font-bold text-neutral-900 dark:text-neutral-100 text-sm">
                  {feature.title}
                </h4>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StarRatingShowcase;

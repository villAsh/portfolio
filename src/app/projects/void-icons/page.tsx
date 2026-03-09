"use client";

import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import Image from "next/image";
import { 
  Github, 
  Globe, 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const sections = [
  {
    id: "overview",
    title: "Overview",
    content: "Void Icons is a premium React icon library that brings static icons to life with personality-driven micro-animations. Built on top of Lucide and powered by Framer Motion, it offers developers a seamless way to add interactive, high-quality animations to their web applications with minimal effort."
  },
  {
    id: "what-users-can-do",
    title: "What Users Can Do",
    items: [
      { label: "Animated Icons", description: "Access a growing library of icons with pre-configured animations for hover, tap, and entry." },
      { label: "Easy Integration", description: "Standard React component implementation with intuitive props for animation control." },
      { label: "Full Customization", description: "Adjust animation speed, delay, and styling to match your brand's personality." },
      { label: "Performance First", description: "Tree-shakable and lightweight, ensuring your application remains fast while looking beautiful." },
      { label: "Lucide Compatibility", description: "Familiar icon set based on the popular Lucide library, enhanced with motion." }
    ]
  },
  {
    id: "why-i-built-this",
    title: "Why i built this",
    description: "I built this library to solve the following common challenges in modern web development:",
    items: [
      "Static icons often feel disconnected from dynamic user interfaces.",
      "Existing animation libraries can be complex to set up for simple icon interactions.",
      "Lack of personality-driven, consistent micro-interactions across projects.",
      "The need for a performance-optimized, drop-in solution for React developers.",
      "Bridging the gap between design motion principles and implementation."
    ]
  },
  {
    id: "tech-stack",
    title: "Tech Stack",
    items: [
      "Next.js",
      "TypeScript",
      "Framer Motion",
      "Lucide React",
      "Tailwind CSS",
      "Shadcn UI",
    ]
  },
  // {
  //   id: "impact",
  //   title: "After launch & Impact",
  //   items: [
  //     "Gained recognition within the React developer community.",
  //     "Over 100+ stars on GitHub within the first month.",
  //     "Positive feedback on the 'personality' and 'smoothness' of animations.",
  //     "Learned extensive SVG animation techniques and performance optimization.",
  //     "Successfully integrated into several production-grade portfolio projects."
  //   ]
  // },
  {
    id: "future-plans",
    title: "Future Plans",
    items: [
      "Expanding the icon library to include more complex multi-step animations.",
      "Creating a dedicated documentation site with a live 'Icon Playground'.",
      "Implementing an AI-driven animation generator for custom SVG paths."
    ]
  }
];

const VoidIconsPage = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);


  return (
    <main className="min-h-screen bg-background text-foreground pb-20 selection:bg-neutral-200 dark:selection:bg-neutral-800">
      <div className="pt-24 max-w-4xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-900 mb-8 bg-neutral-100 dark:bg-neutral-900"
        >
          <AnimatePresence mode="wait">
            {mounted && (
              <motion.div
                key={resolvedTheme}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={resolvedTheme === "dark" ? "/projects/void-icons-dark.png" : "/projects/void-icons-light.png"}
                  alt="Void Icons Details"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </motion.div>

        <div className="flex flex-wrap gap-2 mb-6">
          <Badge variant="secondary" className="bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-white/90 rounded-md px-3 font-medium">Completed</Badge>
          <Badge variant="outline" className="border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 font-normal">Next.js</Badge>
          <Badge variant="outline" className="border-neutral-200 dark:border-neutral-800 text-neutral-500 dark:text-neutral-400 font-normal">TypeScript</Badge>
        </div>

        <h1 className="text-5xl font-bold text-neutral-900 dark:text-white mb-6 tracking-tight">Void Icons</h1>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl leading-relaxed">
          {sections[0].content}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-900 mb-10">
          <div>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-1.5 font-semibold">Timeline</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">1 month</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-1.5 font-semibold">Role</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">Frontend Developer</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-1.5 font-semibold">Team</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-200">Solo</p>
          </div>
          <div>
            <p className="text-xs text-neutral-400 dark:text-neutral-600 uppercase tracking-widest mb-1.5 font-semibold">Status</p>
            <div className="mt-1">
              <Badge variant="secondary" className="bg-neutral-200 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200 hover:bg-neutral-300 dark:hover:bg-neutral-700 h-5 px-2 text-[10px] uppercase font-bold">Completed</Badge>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button asChild className="bg-neutral-900 text-white dark:bg-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-colors rounded-xl px-6 h-11 border-none shadow-sm">
            <a href="https://void-icons.vercel.app" target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4 mr-2" />
              Live Demo
            </a>
          </Button>
          <Button asChild variant="outline" className="border-neutral-200 dark:border-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors rounded-xl px-6 h-11">
            <a href="https://github.com/villAsh/void-icons" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              Source Code
            </a>
          </Button>
        </div>

        <div className="h-px w-full bg-neutral-200 dark:bg-neutral-900 mb-16" />

        <div className="space-y-20">
          <div>
            <div className="space-y-12">
              {sections.slice(0, 1).map((section) => (
                <div key={section.id}>
                  <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6 uppercase tracking-tight">{section.title}</h3>
                  <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[17px]">{section.content}</p>
                </div>
              ))}

              {sections.slice(1).map((section) => (
                <div key={section.id}>
                  <h3 className="text-2xl font-semibold text-neutral-800 dark:text-white mb-6 uppercase tracking-tight">{section.title}</h3>
                  {section.description && <p className="text-neutral-600 dark:text-neutral-400 mb-6">{section.description}</p>}
                  <ul className="space-y-4">
                    {section.items?.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="mt-2.5 w-1.5 h-1.5 rounded-full bg-neutral-300 dark:bg-neutral-700 shrink-0" />
                        <div className="text-neutral-600 dark:text-neutral-400 leading-relaxed text-[17px]">
                          {typeof item === 'string' ? (
                            item
                          ) : (
                            <>
                              <span className="text-neutral-900 dark:text-white font-medium">{item.label}: </span>
                              {item.description}
                            </>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default VoidIconsPage;

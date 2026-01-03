"use client";

import { Search } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const SearchButton = () => {
  return (
    <Button
      variant="ghost"
      className={cn(
        "hidden md:flex h-10 w-fit items-center justify-between px-3 py-2 text-sm text-neutral-500 transition-all active:scale-95 border border-black/10 dark:border-white/10 rounded-xl bg-white dark:bg-[#0A0A0A] shadow-[0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[0_1px_2px_rgba(255,255,255,0.05)]",
        "hover:bg-neutral-50 dark:hover:bg-neutral-900 group"
      )}
    >
      <div className="flex items-center gap-2 pr-4">
        <Search className="h-4 w-4 text-neutral-400 group-hover:text-black dark:group-hover:text-white transition-colors" />
        <span className="font-medium group-hover:text-black dark:group-hover:text-white transition-colors">Search</span>
      </div>
      <kbd className="pointer-events-none h-6 select-none items-center gap-1 rounded-md border border-black/10 dark:border-white/10 bg-neutral-100 dark:bg-neutral-900 px-1.5 font-mono text-[10px] font-semibold text-neutral-600 dark:text-neutral-400 opacity-100 flex shadow-inner">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
};

export default SearchButton;

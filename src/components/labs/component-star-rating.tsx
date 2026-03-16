"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface StarRatingProps {
  /** Maximum number of stars to display */
  maxStars?: number;
  /** Current rating value (controlled) */
  value?: number;
  /** Default rating value (uncontrolled) */
  defaultValue?: number;
  /** Callback when rating changes */
  onChange?: (value: number) => void;
  /** If true, the rating cannot be changed */
  readOnly?: boolean;
  /** Size of the star icons in pixels */
  size?: number;
  /** Additional classes for the star icons */
  iconClassName?: string;
  /** Additional classes for the container */
  className?: string;
}

export default function StarRating({
  maxStars = 5,
  value,
  defaultValue = 0,
  onChange,
  readOnly = false,
  size = 28,
  iconClassName,
  className,
}: StarRatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : currentValue;

  const handleRate = (newValue: number) => {
    if (readOnly) return;
    if (value === undefined) {
      setInternalValue(newValue);
    }
    onChange?.(newValue);
  };

  return (
    <div
      className={cn("flex items-center gap-1", className)}
      onMouseLeave={() => !readOnly && setHoverValue(null)}
    >
      {Array.from({ length: maxStars }).map((_, index) => {
        const starValue = index + 1;
        const isActive = starValue <= displayValue;
        const isHovered = starValue <= (hoverValue || 0);

        return (
          <motion.button
            key={index}
            type="button"
            className={cn(
              "relative outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm transition-all duration-200",
              readOnly ? "cursor-default" : "cursor-pointer"
            )}
            onClick={() => handleRate(starValue)}
            onMouseEnter={() => !readOnly && setHoverValue(starValue)}
            whileHover={!readOnly ? { scale: 1.15 } : {}}
            whileTap={!readOnly ? { scale: 0.9 } : {}}
          >
            <motion.div
              initial={false}
              animate={{
                scale: isActive ? 1 : 0.9,
                rotate: isActive ? 0 : -5,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              <Star
                size={size}
                strokeWidth={isActive ? 0 : 1.5}
                className={cn(
                  "transition-all duration-300",
                  isActive
                    ? "fill-amber-400 stroke-amber-400 dark:fill-amber-500 dark:stroke-amber-500 hover:fill-amber-300 dark:hover:fill-amber-400"
                    : "fill-transparent stroke-neutral-400 dark:stroke-neutral-500",
                  isHovered && !isActive && "fill-amber-200 stroke-amber-200 dark:fill-amber-900/50 dark:stroke-amber-700",
                  iconClassName
                )}
              />
            </motion.div>
          </motion.button>
        );
      })}
    </div>
  );
}

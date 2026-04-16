"use client";

import { useState, useMemo, useCallback } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, type LucideIcon } from "lucide-react";
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
  /** If true, allows half-star ratings */
  allowHalf?: boolean;
  /** Size of the icons in pixels */
  size?: number;
  /** Custom icon component */
  icon?: LucideIcon;
  /** Additional classes for the icons */
  iconClassName?: string;
  /** Additional classes for the container */
  className?: string;
  /** Custom color for active stars (Tailwind class) */
  activeColor?: string;
  /** Label for accessibility */
  label?: string;
}

export default function StarRating({
  maxStars = 5,
  value,
  defaultValue = 0,
  onChange,
  readOnly = false,
  allowHalf = false,
  size = 28,
  icon: Icon = Star,
  iconClassName,
  className,
  activeColor = "text-amber-400 dark:text-amber-500",
  label = "Rating",
}: StarRatingProps) {
  const [internalValue, setInternalValue] = useState(defaultValue);
  const [hoverValue, setHoverValue] = useState<number | null>(null);

  const currentValue = value !== undefined ? value : internalValue;
  const displayValue = hoverValue !== null ? hoverValue : currentValue;

  const handleRate = useCallback(
    (newValue: number) => {
      if (readOnly) return;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    },
    [readOnly, value, onChange],
  );

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      if (readOnly || !allowHalf) return;
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const isHalf = x < rect.width / 2;
      setHoverValue(index + (isHalf ? 0.5 : 1));
    },
    [readOnly, allowHalf],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
      if (readOnly) return;
      if (allowHalf) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const newValue = index + (x < rect.width / 2 ? 0.5 : 1);
        handleRate(newValue);
      } else {
        handleRate(index + 1);
      }
    },
    [readOnly, allowHalf, handleRate],
  );

  const starNodes = useMemo(() => {
    return Array.from({ length: maxStars }).map((_, index) => {
      const starValue = index + 1;
      const isFull = starValue <= displayValue;
      const isHalf = !isFull && starValue - 0.5 <= displayValue;
      const isActive = isFull || isHalf;

      return (
        <motion.button
          key={starValue}
          type="button"
          aria-label={`Rate ${starValue} ${starValue === 1 ? "star" : "stars"}`}
          aria-pressed={currentValue >= starValue}
          className={cn(
            "relative outline-none focus-visible:ring-2 focus-visible:ring-amber-500 rounded-sm transition-shadow",
            readOnly ? "cursor-default" : "cursor-pointer",
          )}
          onMouseMove={(e) => handleMouseMove(e, index)}
          onMouseEnter={() =>
            !readOnly && !allowHalf && setHoverValue(starValue)
          }
          onClick={(e) => handleClick(e, index)}
          whileHover={!readOnly ? { scale: 1.1 } : {}}
          whileTap={!readOnly ? { scale: 0.95 } : {}}
        >
          <div className="relative">
            {/* Background (Empty) */}
            <Icon
              size={size}
              strokeWidth={1.5}
              className={cn(
                "text-neutral-300 dark:text-neutral-700 transition-colors",
                iconClassName,
              )}
            />

            {/* Foreground (Active) */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={cn(
                    "absolute inset-0 flex items-center justify-center overflow-hidden",
                    activeColor,
                  )}
                  style={{
                    clipPath: isHalf ? "inset(0 50% 0 0)" : "none",
                  }}
                >
                  <Icon
                    size={size}
                    fill="currentColor"
                    stroke="currentColor"
                    strokeWidth={0}
                    className={iconClassName}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      );
    });
  }, [
    maxStars,
    displayValue,
    currentValue,
    readOnly,
    allowHalf,
    size,
    Icon,
    iconClassName,
    activeColor,
    handleMouseMove,
    handleClick,
  ]);

  return (
    <div
      className={cn("flex flex-col items-center gap-2", className)}
      onMouseLeave={() => !readOnly && setHoverValue(null)}
      role="radiogroup"
      aria-label={label}
    >
      <div className="flex items-center gap-1">{starNodes}</div>
      {!readOnly && (
        <motion.span
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs font-medium text-neutral-500 dark:text-neutral-400 tabular-nums h-4"
        >
          {displayValue > 0 ? displayValue.toFixed(allowHalf ? 1 : 0) : ""}
        </motion.span>
      )}
    </div>
  );
}

"use client";
import {
  type AnimationVariant,
  type AnimationStart,
  createAnimation,
} from "@/types/theme-animations";
import { useTheme } from "next-themes";
import { type ReactNode, useCallback } from "react";
import { Button } from "./button";

type ThemeToggleAnimationProps = {
  variant?: AnimationVariant;
  start?: AnimationStart;
  showLabel?: boolean;
  url?: string;
  children: ReactNode;
};

export default function ThemeToggleButton({
  variant = "circle-blur",
  start = "top-left",
  showLabel = false,
  url = "",
  children,
}: ThemeToggleAnimationProps) {
  const { theme, setTheme } = useTheme();

  const styleId = "theme-transition-styles";

  const updateStyles = useCallback((css: string, name: string) => {
    if (typeof window === "undefined") return;

    let styleElement = document.getElementById(styleId) as HTMLStyleElement;

    console.log("style ELement", styleElement);
    console.log("name", name);

    if (!styleElement) {
      styleElement = document.createElement("style");
      styleElement.id = styleId;
      document.head.appendChild(styleElement);
    }

    styleElement.textContent = css;

    console.log("content updated");
  }, []);

  const toggleTheme = useCallback(() => {
    const animation = createAnimation(variant, start, url);

    updateStyles(animation.css, animation.name);

    if (typeof window === "undefined") return;

    const switchTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };

    if (!document.startViewTransition) {
      switchTheme();
      return;
    }

    document.startViewTransition(switchTheme);
  }, [theme, setTheme]);

  return (
    <Button
      onClick={toggleTheme}
      variant="ghost"
      size="icon"
      className="w-full h-full relative group cursor-pointer"
      name="Theme Toggle Button"
    >
      {children}
    </Button>
  );
}

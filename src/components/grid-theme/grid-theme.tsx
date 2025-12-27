"use client";
import Image from "next/image";
import ThemeToggleButton from "../ui/theme-toggle";
import { useTheme } from "next-themes";

const GridTheme = () => {
  const { resolvedTheme, forcedTheme, theme } = useTheme();
  console.log("themes", {
    resolvedTheme,
    forcedTheme,
    theme,
  });
  return (
    <div className="border-4 w-full min-w-2xs rounded-sm h-full overflow-hidden">
      <ThemeToggleButton
        variant="gif"
        start="top-right"
        url="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjI4ZGwzdDJlcjdoNTlteWtlajdhZW1lb2gxMmc5MzhhaHM4ZzluayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SaSAUwiGPsPtswfPRk/giphy.gif"
      >
        {theme === "dark" ? (
          <Image
            width={1500}
            height={1500}
            alt="goku theme"
            src={"/goku-sunset.gif"}
            className="h-[25vh] w-[20vw] object-cover"
            priority
            fetchPriority="high"
          />
        ) : (
          <Image
            width={1500}
            height={1500}
            alt="goku theme"
            src={"/goku-moon.gif"}
            className="h-[25vh] w-[20vw] object-cover"
            priority
            fetchPriority="high"
          />
        )}
      </ThemeToggleButton>
    </div>
  );
};

export default GridTheme;

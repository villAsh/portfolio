"use client";
import Image from "next/image";
import ThemeToggleButton from "../ui/theme-toggle";
import { useTheme } from "next-themes";

const GridTheme = () => {
  const { resolvedTheme } = useTheme();
  return (
    <div className="border-4 w-full min-w-2xs rounded-xl h-full overflow-hidden">
      <ThemeToggleButton
        variant="gif"
        start="top-right"
        url="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjI4ZGwzdDJlcjdoNTlteWtlajdhZW1lb2gxMmc5MzhhaHM4ZzluayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/SaSAUwiGPsPtswfPRk/giphy.gif"
      >
        <Image
          width={1500}
          height={1500}
          alt="goku theme"
          src={resolvedTheme === "dark" ? "/goku-sunset.gif" : "/goku-moon.gif"}
          className="h-[25vh] w-[20vw] object-cover"
        />
      </ThemeToggleButton>
    </div>
  );
};

export default GridTheme;

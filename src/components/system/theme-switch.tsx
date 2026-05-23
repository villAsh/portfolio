"use client";
import { useWebHaptics } from "web-haptics/react";
import { Button } from "../ui/button";
import { Moon, Sun } from "../ui/icons";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const { trigger } = useWebHaptics();
  return (
    <div className="flex items-center">
      <Button
        variant={"icon"}
        onClick={() => {
          trigger([{ duration: 10 }], { intensity: 1 });
          setTheme(theme === "light" ? "dark" : "light");
          // trigger([{ duration: 10 }], { intensity: 1 });
        }}
      >
        {theme === "light" ? (
          <Sun className="h-4 w-4 stroke-black" />
        ) : (
          <Moon className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
};

export default ThemeSwitch;

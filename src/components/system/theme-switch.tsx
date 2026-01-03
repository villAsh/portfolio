"use client";

import { Button } from "../ui/button";
import { Moon, Sun } from "../ui/icons";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center">
      <Button
        variant={"icon"}
        onClick={() =>
          setTimeout(() => setTheme(theme === "light" ? "dark" : "light"), 150)
        }
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

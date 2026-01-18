"use client";

import { cn } from "@/lib/utils";
import { Mouse } from "lucide-react";
import { useEffect, useState } from "react";

const BounceMouse = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY === 0);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={cn(
        "mx-auto w-full flex items-center justify-center absolute bottom-4 transition-all duration-300",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-4 pointer-events-none",
      )}
    >
      <Mouse className="animate-bounce stroke-neutral-500" />
    </div>
  );
};

export default BounceMouse;

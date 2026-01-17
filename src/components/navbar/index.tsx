"use client";

import Image from "next/image";
import ThemeSwitch from "../system/theme-switch";
import { usePathname, useRouter } from "next/navigation";
import { Navbar as ENavbar, NAV_MAPPER } from "@/types/utils";

const Navbar = () => {
  const navigation = useRouter();
  const path = usePathname();
  const scrollToSection = (id: keyof typeof ENavbar) => {
    if (path === NAV_MAPPER[id]) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      switch (id) {
        case "experience":
          navigation.push("work-experience");
          return;
        case "projects":
          navigation.push("projects");
          return;
      }
    }
  };

  const handleLogoClick = () => {
    if (path === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigation.replace("/");
    }
  };

  return (
    <nav className="w-full max-md:px-10 backdrop-blur-xs sticky top-0 z-50 h-[60px] py-2">
      <div className="flex flex-row items-end justify-between gap-x-4 max-w-3xl mx-auto">
        <div className="flex flex-row items-end justify-start gap-x-4">
          <button
            onClick={handleLogoClick}
            type="button"
            className="h-[50px] w-[50px] overflow-hidden rounded-[8px] bg-yellow-300 dark:bg-neutral-500 flex items-center justify-center active:scale-95 cursor-pointer"
          >
            <Image
              alt="profile icon"
              src={"/goku.png"}
              width={45}
              height={45}
              className="object-contain"
            />
          </button>
          <div className="-mb-1">
            <ul className="flex flex-row items-center gap-x-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <li
                onClick={() => scrollToSection(ENavbar.experience)}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigation.push("/work-experience");
                  }
                }}
              >
                Work
              </li>
              <li
                onClick={() => scrollToSection(ENavbar.projects)}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigation.push("/projects");
                  }
                }}
              >
                Projects
              </li>
              <li
                onClick={() => navigation.push("/labs")}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    navigation.push("/labs");
                  }
                }}
              >
                Labs
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          {/* <SearchButton /> */}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

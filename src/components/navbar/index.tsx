/** biome-ignore-all lint/a11y/useKeyWithClickEvents: <explanation> */
"use client";

import Image from "next/image";
import ThemeSwitch from "../system/theme-switch";

const Navbar = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="w-full max-md:px-10 backdrop-blur-xs sticky top-0 z-50 h-[60px] py-2">
      <div className="flex flex-row items-end justify-between gap-x-4 max-w-2xl mx-auto">
        <div className="flex flex-row items-end justify-start gap-x-4">
          <div className="h-[50px] w-[50px] overflow-hidden rounded-[8px] transition-colors duration-500 bg-yellow-300 dark:bg-neutral-500 flex items-center justify-center">
            <Image
              alt="profile icon"
              src={"/goku.png"}
              width={45}
              height={45}
              className="object-contain"
            />
          </div>
          <div className="-mb-1">
            <ul className="flex flex-row items-center gap-x-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <li
                onClick={() => scrollToSection("experience")}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              >
                Work
              </li>
              <li
                onClick={() => scrollToSection("projects")}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              >
                Projects
              </li>
              <li
                onClick={() => scrollToSection("tech-stack")}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              >
                Lab
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

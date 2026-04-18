"use client";

import Image from "next/image";
import ThemeSwitch from "../system/theme-switch";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full max-md:px-6 backdrop-blur-xs sticky top-0 z-50 h-[60px] py-2">
      <div className="flex flex-row items-end justify-between gap-x-4 max-w-3xl mx-auto">
        <div className="flex flex-row items-end justify-start gap-x-4">
          <Link
            href={"/"}
            prefetch
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
          </Link>
          <div className="-mb-1">
            <ul className="flex flex-row items-center gap-x-4 text-sm font-medium text-neutral-500 dark:text-neutral-400">
              <Link
                prefetch
                href={"work-experience"}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 cursor-pointer"
              >
                Work
              </Link>
              <Link
                prefetch
                href={"projects"}
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
              >
                Projects
              </Link>
              <Link
                prefetch
                className="hover:text-neutral-900 dark:hover:text-neutral-100 transition-colors cursor-pointer"
                href={"labs"}
              >
                Labs
              </Link>
            </ul>
          </div>
        </div>
        <div className="flex items-center gap-x-2">
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

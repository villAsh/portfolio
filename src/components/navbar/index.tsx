import Image from "next/image";
import ThemeSwitch from "../system/theme-switch";

const Navbar = () => {
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
            <ul className="flex flex-row items-center gap-x-4">
              <li>Work</li>
              <li>Projects</li>
              <li>Lab</li>
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

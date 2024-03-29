import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { Link } from "react-router-dom";
import Switch from "./Switch";
export default function Navbar() {
  return (
    <div className="p-10 flex flex-row justify-between items-center bg-light-bg font-poppins dark:bg-dark-bg dark:text-light-text">
      <div>
        <h1 className="text-md md:text-3xl font-poppins text-light-primary flex items-center justify-start">
          <FaLessThan /> Vilas /<FaGreaterThan />
        </h1>
      </div>
      <div className="sm:flex sm:space-x-3 md:space-x-6">
        <ul className="hidden sm:flex items-center justify-around sm:space-x-3 md:space-x-6  text-light-fg dark:text-light-text">
          <Link to="">
            <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary dark:">
              <span className="transition-all">Home</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="About">
            <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
              <span className="transition-all">About</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="Timeline">
            <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
              <span className="transition-all">Timeline</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="Skills">
            <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
              <span className="transition-all">Skills</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="Projects">
            <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
              <span className="transition-all">Projects</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
            </li>
          </Link>
          <Link to="Contact">
            <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
              <span className="transition-all">Contact</span>
              <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
            </li>
          </Link>

          {/* <DarkModeSwitch
                    onChange={toggleDarkMode}
                    checked={darkMode}
                /> */}
        </ul>
        <Switch />
      </div>
    </div>
  );
}

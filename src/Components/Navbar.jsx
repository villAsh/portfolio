import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
export default function Navbar(){
    const [darkMode,setDarkMode] = useState(true);
    const toggleDarkMode = (checked) =>{
        setDarkMode(checked)
    }
    const nav = [
        'Home',
        'About',
        'Skills',
        'Project',
        'Contact',
        'Resume',
        <DarkModeSwitch
        onChange={toggleDarkMode}
        checked={darkMode}
        className="text-light-fg"
        fill="black"
    />
    ];
    return(
        <div className="p-10 flex flex-row justify-between items-center bg-light-bg font-poppins">
            <div>
                <h1 className="text-3xl font-poppins text-light-primary flex"><FaLessThan /> Vilas /<FaGreaterThan /></h1>
            </div>
            <div className="hidden sm:flex">
                <ul className="sm:flex sm:justify-evenly sm:space-x-6 text-light-fg">
                    {nav.map(items => 
                             <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
                                <span className="transition-all">{items}</span>
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
                                </li>
                             )}
                {/* <DarkModeSwitch
                    onChange={toggleDarkMode}
                    checked={darkMode}
                /> */}
                </ul>
            </div>
        </div>
    );
}
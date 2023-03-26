import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
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
        'Resume'
    ];
    return(
        <div className=" px-5 p-10 flex flex-row justify-between items-center bg-light-bg font-poppins">
            <div>
                <h1 className="text-3xl font-poppins text-light-primary">Vilas Chavhan</h1>
            </div>
            <div className="flex">
                <ul className="flex justify-evenly md:space-x-6 text-light-fg">
                    {nav.map(items => 
                             <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
                                <span className="transition-all">{items}</span>
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
                                </li>
                             )}
                <DarkModeSwitch
                    onChange={toggleDarkMode}
                    checked={darkMode}
                />
                </ul>
            </div>
        </div>
    );
}
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import {FaLessThan,FaGreaterThan} from 'react-icons/fa'
import { Link } from "react-router-dom";
export default function Navbar(){
    const [darkMode,setDarkMode] = useState(true);
    const toggleDarkMode = (checked) =>{
        setDarkMode(checked)
    }
    const nav = [
        {
            id : 12,
            text :  'Home',
            path : ''
        },
        {
            id : 13,
            text :  'About',
            path : 'About'
        },
        {
            id : 14,
            text :  'Timeline',
            path : 'Timeline'
        },
        {
            id : 15,
            text :  'Skills',
            path : 'Skills'
        },
        {
            id : 16,
            text :  'Projects',
            path : 'Projects'
        },
        {
            id : 17,
            text :  'Contact',
            path : 'Contact'
        },
        <DarkModeSwitch
        onChange={toggleDarkMode}
        checked={darkMode}
        className="text-light-fg"
        fill="black"
    />
    ];
    return(
        <div className="p-5 sm:p-10 flex flex-row justify-between items-center bg-light-bg font-poppins">
            <div>
                <h1 className="text-3xl font-poppins text-light-primary flex"><FaLessThan /> Vilas /<FaGreaterThan /></h1>
            </div>
            <div className="hidden sm:flex">
                <ul className="sm:flex sm:justify-evenly sm:space-x-6 text-light-fg">
                    {nav.map(items => 
                            <Link to={`${items?.path}`}>
                             <li className="text-lg relative group hover:cursor-pointer  hover:text-light-primary">
                                <span className="transition-all">{items.text}</span>
                                <span className="absolute -bottom-0 left-0 w-0 h-[2px] bg-light-primary transition-all group-hover:w-full"></span>
                                </li>
                                </Link>
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
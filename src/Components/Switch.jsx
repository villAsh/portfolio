import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import useDarkMode from "./useDarkMode";
export default function Switch(){
    const [colorTheme,setTheme] = useDarkMode();    
    const [dark,setDark] = useState(colorTheme === 'light' ? true : false);
    const toggleDark = (checked) =>{
        setTheme(colorTheme);
        setDark(checked);
    }

    return(
        <DarkModeSwitch
        onChange={toggleDark}
        checked={dark}
        sunColor="black"
        moonColor="black"
    />
    );
}
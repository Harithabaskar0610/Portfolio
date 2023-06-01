import "./Togglepage.css";
import React , {useState, useEffect} from "react";
import {MdOutlineLightMode} from "react-icons/md";
import {MdDarkMode} from "react-icons/md";

type Theme = 'light' | 'dark';

function Togglepage() {
const [theme, setTheme] = useState<Theme>('dark');

/* useEffect(() => {
const preferredTheme = localStorage.getItem('theme') as Theme | null;
if (preferredTheme) {
setTheme(preferredTheme);
} else {
const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
if (userPrefersLight) {
setTheme('light');
}
}
}, []);*/

useEffect(() => {
document.body.className = theme;
localStorage.setItem('theme', theme);
}, [theme]);

const toggleTheme = () => {
setTheme(theme === 'dark' ? 'light' : 'dark');
};

return (
    <div>
        <ul>
            <li>
               <button onClick={toggleTheme} className="design"><MdOutlineLightMode size={20}/> </button>
            </li>
            <li>
              <button onClick={toggleTheme} className="design1"><MdDarkMode size={20}/></button>
            </li>
        </ul>
    </div>
);
}

export default Togglepage;
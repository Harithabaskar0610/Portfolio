import React, { useState } from "react";
import "./Scrollup.css";
import { RiArrowUpSFill } from "react-icons/ri";

const ScrollUp = () => {
const [isVisible, setIsVisible] = useState(false);

const handleScroll = () => {
const scrollTop = document.documentElement.scrollTop;
const windowHeight = window.innerHeight;

setIsVisible(scrollTop > windowHeight);
};

const handleClick = () => {
    window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
};

React.useEffect(() => {
window.addEventListener("scroll", handleScroll);

return () => {
window.removeEventListener("scroll", handleScroll);
};
}, []);

return (
    <>
        {isVisible && (
            <button className="up" onClick={handleClick}>
            <RiArrowUpSFill size={40}/>
            </button>
        )}
   </>
);
};

export default ScrollUp;
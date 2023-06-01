import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes} from "react-icons/fa";
import React, {useState} from "react";
import LogoImg from "../../assets/image14.png";
import {AiFillHome} from "react-icons/ai";
import {FaInfoCircle, FaUserGraduate} from "react-icons/fa";
import {AiFillProject} from "react-icons/ai";
import {RiContactsFill} from "react-icons/ri";
//import Togglepage from "../components/ToggleTheme/Togglepage";
import Togglepage from "../ToggleTheme/Togglepage";

const Navbar = () =>{ 
        const [state, setState] = useState (false);
    
        return(
        <div className="header">
                <h1><img className="cover" src={LogoImg} alt="image9.png"/>  </h1>
            <div>
            <ul className={state ? "navbaractive" : "navbar"}
             onClick ={()=> setState(false)}>
                <div className="nav-menu">
                <li>
                    <Link to="/" className="activelink"><AiFillHome className="iconss"size={17} style={{marginRight:"10px"}}/> Home </Link>
                </li>
                </div>
                <div className="nav-menu">
                <li>
                    <Link to="/about" className="activelink"><FaInfoCircle className="iconss"size={17} style={{marginRight:"10px"}}/>About</Link>
                </li>
                </div>
                <div className="nav-menu">
                <li>
                    <Link to="/skills" className="activelink"> <FaUserGraduate className="iconss" size={17} style={{marginRight:"10px"}} />Skills</Link>
                </li>
                </div>
                <div className="nav-menu">
                <li>
                    <Link to="/project" className="activelink"> <AiFillProject className="iconss" size={17} style={{marginRight:"10px"}}/>Project</Link>
                </li>
                </div>
                <div className="nav-menu">
                <li>
                    <Link to="/contact" className="activelink"> <RiContactsFill className="iconss" size={17} style={{marginRight:"10px"}}/>Contact</Link>
                </li>
                </div>
            </ul>
            </div>
            <div className="hamburger" onClick ={ () => setState(!state)}>
                {state? (
                   <FaTimes size={20} style={{ color: "white"}}/>      
                ) : (
                   <FaBars size={20} style={{ color: "white"}}/>  
                )}
            </div>
            <Togglepage/>
        </div>
    )
}

export default Navbar;

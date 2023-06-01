import "./Skillspage.css";
import React from "react";
import {Slide} from "react-awesome-reveal";
import IntroImg from "../../assets/image20.jpg";
import {BiBadgeCheck} from "react-icons/bi";
import FrontEnd from "./FrontEnd";
import BackEnd from "./BackEnd";

const Skillspage = () =>{
    return(
            <section className="skillssection">
                <Slide direction="left" triggerOnce>
                    <h2 className="sectiontitle">Skills</h2>
                </Slide>
                <Slide direction="right" triggerOnce>
                    <span className="skillssubtitle">My technical level</span>
                </Slide>
                <div className="skillscontainer">
                    <Slide direction="left" triggerOnce>
                        <FrontEnd/>
                    </Slide>
                    <Slide direction="right" triggerOnce>
                        <BackEnd/>
                    </Slide>
                </div>
            </section>            
    )
}

export default Skillspage;
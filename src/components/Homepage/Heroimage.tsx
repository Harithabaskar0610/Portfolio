import "./Heroimage.css";
import React from "react";
import IntroImg from "../../assets/image2.jpg";
import {Link} from "react-router-dom";
import {Rotate, Bounce} from "react-awesome-reveal";

const Heroimg = () => {
    return(
        <div className="hero">
            <div className="image">
                <img className="coverimage" src={IntroImg} alt="image.jpg"/>
            </div> 
            <div className="content">
                <p>Hi, I am Haritha.</p>
                <Bounce triggerOnce>
                <h1>Front End Developer.</h1>
                </Bounce>
                <p className="para"> As a developer, my superpower happens behind the scenes to make a website look great, work fast and perform well with a seamless user experience.</p>
           <div>
                <Link to="/contact" className="button">get in touch</Link>
                <Link to="/project" className="button button-light"> view all works</Link>
            </div>
            </div>
        </div>
    )
}
export default Heroimg;
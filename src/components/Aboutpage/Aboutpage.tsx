import "./Aboutpage.css";
import {Fade, Slide} from "react-awesome-reveal";
import Info from "./Info";
import {FC} from "react";
import AboutImg from "../../assets/image.jpg";
import { AiOutlineFileText } from "react-icons/ai";
import haritharesume from "../../assets/haritharesume.pdf";
import { useNavigate } from "react-router-dom";

const Aboutpage: React.FC = () =>{
     // const navigate = useNavigate();
     // const handleOnClick = () => navigate('/skills');
    return(
        <section className="about_section">
            <div className="title">
            <Slide direction="left" triggerOnce>
                {/*<h1 className="section__title" onClick={handleOnClick}>About Me</h1>*/}
                <h1 className="section__title">About Me</h1>
            </Slide>
            <span className="section__subtitle">My Introduction</span>
            <div className="about__container">
                <img
                   src= {AboutImg}
                   alt= "image.jpg"
                   className= "about_img"
                />
                <Slide direction="right" triggerOnce>
                    <div className="about_data">
                        <Info/>
                        <Fade direction="right" triggerOnce>          
                            <p className="about__description">
                                I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I’m based in Coimbatore, but I’m happy working remotely . When I’m not coding, you’ll find me outdoors. I love being out in nature whether that’s going for a walk, run . I’d love you to check out my work.
                           </p> 
                        </Fade>
                        <p>
                        <a href={haritharesume} className="button1" download>
                            Download CV <AiOutlineFileText
                            size={19}
                            style= {{color:"black"}}/>
                        </a>
                        </p> 
                        </div>      
                </Slide> 
                </div>  
                </div>    
        </section>
    )
}

export default Aboutpage;
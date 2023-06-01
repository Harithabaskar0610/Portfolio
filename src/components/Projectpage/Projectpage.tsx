import React from "react";
import "./Projectpage.css";
import IntroImg from "../../assets/image27.jpg";
import Proc1 from "../../assets/image25.png";
import { NavLink } from "react-router-dom";
import Proc2 from "../../assets/image26.png";
import Proc3 from "../../assets/portfolio.jpg";
import { Rotate, Zoom } from "react-awesome-reveal";

const Projectpage : React.FC = () =>{
    return(
        <div className="image1">
            <div className="project">
                <img src={IntroImg} alt="image20.jpg" className="projectimage"/>
            </div>
            <div className="content11">
                <Rotate triggerOnce>
                <h1>Projects</h1>
                </Rotate>
                <p>Some of my recent projects </p>
            </div>
            <div className="workcontainer">
                <h1 className="projectheading">Project</h1>
                <div className="projectcontainer">
                    <div className="projectcard">
                        <img src={Proc1}alt="image"/>
                        <h2 className="projecttitle">To Do list Using typescript</h2>
                        <div className="prodetails">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae esse mollitia, quidem voluptate nisi inventore quod possimus ea beatae alias fugiat ex hic. Vero corporis maxime nam ea omnis.</p>
                             <div>
                                <NavLink to="https://github.com/Harithabaskar0610/Todo-list-typescript.git" className="btn">View Project</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="projectcard">
                        <img src={Proc2}alt="image"/>
                        <h2 className="projecttitle">Login Form - AntDesign</h2>
                        <div className="prodetails">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae esse mollitia, quidem voluptate nisi inventore quod possimus ea beatae alias fugiat ex hic. Vero corporis maxime nam ea omnis.</p>
                            <div>
                                <NavLink to="url.com" className="btn">View Project</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="projectcard">
                        <img src={Proc3}alt="image"/>
                        <h2 className="projecttitle">Personal Portfolio</h2>
                        <div className="prodetails">
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quae esse mollitia, quidem voluptate nisi inventore quod possimus ea beatae alias fugiat ex hic. Vero corporis maxime nam ea omnis.</p>
                            <div>
                                <NavLink to="https://github.com/Harithabaskar0610/Portfolio.git" className="btn">View Project</NavLink>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    )
}

export default Projectpage;
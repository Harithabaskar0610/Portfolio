import React from "react";
import {BiBadgeCheck} from "react-icons/bi"

const FrontEnd: React.FC = () =>{
    return(
        <div className="skillscontent">
            <h3 className="skillstitle">
                FrontEnd Development
            </h3>
            <div className="skillsbox">
            <div className="skillsgroup">
                <div className="skillsdata">
                <BiBadgeCheck
                size={10}
                style={{ color:"white"}}/>
                    <div>
                        <h3 className="skillsname">HTML</h3>
                        <span className="skillslevel">Advanced</span>
                    </div>
                </div>
                <div className="skillsdata">
                    <BiBadgeCheck
                                    size={10}
                                    style={{ color: "white"}}/>
                    <div>
                        <h3 className="skillsname">CSS</h3>
                        <span className="skillslevel">Advanced</span>
                    </div>
                </div>
                <div className="skillsdata">
                <BiBadgeCheck
                                size={10}
                                style={{ color: "white"}}/>
                    <div>
                        <h3 className="skillsname">React</h3>
                        <span className="skillslevel">Advanced</span>
                    </div>
                </div>
                <div className="skillsdata">
                <BiBadgeCheck
                                size={10}
                                style={{ color:"white"}}/>
                    <div>
                        <h3 className="skillsname">Typescript</h3>
                        <span className="skillslevel">Intermediate</span>
                    </div>
                </div>
                <div className="skillsdata">
                <BiBadgeCheck
                                size={10}
                                style={{ color: "white"}}/>
                    <div>
                        <h3 className="skillsname">Bootstrap</h3>
                        <span className="skillslevel">Basics</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FrontEnd;
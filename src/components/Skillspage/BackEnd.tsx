import React from "react";
import {BiBadgeCheck} from "react-icons/bi"

const BackEnd: React.FC = () =>{
    return(
        <div className="skillscontent">
        <h3 className="skillstitle">
            BackEnd Development
        </h3>
        <div className="skillsbox">
        <div className="skillsgroup">
            <div className="skillsdata">
            <BiBadgeCheck
            size={10}
            style={{ color: "white"}}/>
                <div>
                    <h3 className="skillsname">Python</h3>
                    <span className="skillslevel">Intermediate</span>
                </div>
            </div>
            <div className="skillsdata">
            <BiBadgeCheck
            size={10}
            style={{ color: "white"}}/>
                <div>
                    <h3 className="skillsname">Golang</h3>
                    <span className="skillslevel">Basics</span>
                </div>
            </div>
            <div className="skillsdata">
            <BiBadgeCheck
            size={10}
            style={{ color: "white"}}/>
                <div>
                    <h3 className="skillsname">Postman</h3>
                    <span className="skillslevel">Intermediate</span>
                </div>
            </div>
            <div className="skillsdata">
            <BiBadgeCheck
            size={10}
            style={{ color: "white"}}/>
                <div>
                    <h3 className="skillsname">Nodejs</h3>
                    <span className="skillslevel">Basics</span>
                </div>
            </div>
            <div className="skillsdata">
            <BiBadgeCheck
            size={10}
            style={{ color: "white"}}/>
                <div>
                    <h3 className="skillsname">Rest API</h3>
                    <span className="skillslevel">Basics</span>
                </div>
            </div>
        </div>
        </div>
    </div>
    )
}

export default BackEnd;
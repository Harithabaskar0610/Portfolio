import React from "react";
import "./Aboutpage.css";

const Info : React.FC =() => {
    return (
        <div className="box">
            <div className="box1">
            <div className="myblock">
                <h5>Achievements</h5>
                <p>~ Anna university 4th rank holder</p>
                <p>~ Zone level Kho-kho winners and athlete Runner up in 100m, 200m and relay</p>
            </div>
            <div className="myblock">
               <h5>Course</h5>
                <p>~ Advanced Web Designing course at InfoCampus, Bangalore.</p>
             </div>
             <div className="myblock">
                <h5>Personal Skills</h5>
                <p>~ Quick learner</p>
                <p>~ Hard Working</p>
                <p>~ Positive Attitude and has Leadership Quality</p>
             </div>
             </div>
         </div>
    )
}

export default Info;
import "./Footer.css";
import React from "react";
import { FaHome, FaPhone, FaMailBulk, FaFacebook, FaLinkedin , FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () =>{
    return(
        <div className="footer">
        <div className="footer-container">
            <div className="right">
            <h4>Haritha Baskar</h4>
                    <p>
                        I am haritha from Coimbatore. I am a front end developer looking for job..
                    </p>
                    <div className="social">
                    <FaFacebook
                         size={30} 
                         style={{color:"#fff", 
                         marginRight:"1rem"}}/>
                    <FaLinkedin
                         size={30} 
                         style={{color:"#fff", 
                         marginRight:"1rem"}}/>
                    <FaInstagram
                         size={30} 
                         style={{color:"#fff", 
                         marginRight:"1rem"}}/>
                    <FaTwitter
                         size={30} 
                         style={{color:"#fff", 
                         marginRight:"1rem"}}/>                 
                     </div>
                </div>      
            <div className="left"> 
            <div className="location">
                    <FaHome size={20} style={
                        {color:"#fff", marginRight: "2rem"}}/>
                <div>
                        <p>2/520 Balaji Nagar</p>
                        <p>Coimbatore.</p>
                </div>
                </div>
                <div className="phone">
                    <h4>
                        <FaPhone 
                        size={20} 
                        style={{color:"#fff", 
                        marginRight:"2rem"}}/> +91 - 7339286596
                    </h4>
                </div>
                <div className="email">
                    <h4>
                        <FaMailBulk 
                         size={20} 
                         style={{color:"#fff", 
                         marginRight:"2rem"}}/> @harithabaskar0610@gmail.com
                    </h4>
                </div>            
            </div>     
            </div>
            </div>
    )
}

export default Footer;
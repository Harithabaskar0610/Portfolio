import "./Contactpage.css";
import React, { useState } from "react";
import {BsChatDotsFill, BsSendFill} from "react-icons/bs";
import IntroImg from "../../assets/wallpaper.jpg";

const Contact: React.FC = () =>{
    const [message, setMessage] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        setMessage(true);
    };

    return(
        <div className="body1">
            <div className="containerbody">
                <div className="containerleft">
                     <img className="coverimage1" src={IntroImg} alt="image2.jpg"/>
                </div>
                <div className="containerright">
                    <h2 className="chat">Lets have a chat <BsChatDotsFill/></h2>
                    <form className="heading" onSubmit={handleSubmit}>
                        <label>Your Name</label>
                        <input type="text" placeholder="Insert your name here.."></input>
                        <label>Email</label>
                        <input type="email" placeholder="email@example.com"></input>
                        <label>Subject</label>
                        <input type="text" placeholder="Subject"></input>
                        <label>Message</label>
                        <textarea rows={6} placeholder="What is your message?"/>
                        <button type="submit"className="button">Send <BsSendFill/> </button>
                        {message && <span>Thanks, I'll reply ASAP :)</span>}
                    </form>
                </div>
             </div> 
        </div>  
    )
}

export default Contact;
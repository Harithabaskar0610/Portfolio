import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Contactpage from "../components/Contactpage/Contactpage";
import Scrollup from "../components/Scrollup/Scrollup";


const Contact =() =>{
    return(
        <div>
            <Navbar/>
            <Contactpage/>
            <Scrollup/>
            <Footer/>
        </div>
    )
}
export default Contact;
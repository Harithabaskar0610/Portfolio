import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Heroimage from "../components/Homepage/Heroimage";
import Footer from "../components/Footer/Footer";
import Aboutpage from "../components/Aboutpage/Aboutpage";
import Skillspage from "../components/Skillspage/Skillspage";
import Projectpage from "../components/Projectpage/Projectpage";
import Contactpage from "../components/Contactpage/Contactpage";
import Scrollup from "../components/Scrollup/Scrollup";

const Home =() =>{
    return(
        <div>
           <Navbar/>
           <Heroimage/>
           <Aboutpage/>
           <Skillspage/>
           <Contactpage/>
           <Scrollup/>
           <Footer/>
        </div>
    )
}
export default Home;
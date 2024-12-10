


import React from "react";
import "./nav.css";
import Video from "./coros";
import AboutUs from "./aboutus";
import RandomMenuu from "./dish4.jsx";
import Contactus from "./contactus.jsx";
import { HashLink as Link } from "react-router-hash-link";


function Nav() {
    return (
       
        <div>
            
             <div className="nav">
                <div className="one">
                    <ul>
                        <li>Tasty Bites</li>
                    </ul>
                </div>
                <div className="two">
                    
                    <Link smooth to="#home">Home</Link>
                    <Link smooth to="#about">About Us</Link>
                    <Link smooth to="#menu">Menu</Link>
                    <Link smooth to="#contact">Contact Us</Link>
                </div>
            </div> 

            {/* Sections */}
            <div id="home" className="vedio">
                <Video />
          
            </div>
            <div id="about">
                <AboutUs />
            </div>
            <div id="menu">
                <RandomMenuu />
            </div>
            <div id="contact">
                <Contactus />
            </div>
        </div>
    );
}

export default Nav;




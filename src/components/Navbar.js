import React, { useState } from "react";
import "./styles.css"
import { Link } from 'react-scroll';
import { Fade } from "react-reveal";
import logo from "../assets/logowhite2.png"
import burguer from "../assets/burguer.png"

function Navbar(){
    const [showNav,setShowNav]=useState(false);
    const handleShowNavbar = () => {
        setShowNav(!showNav);
      }


    return(
            <nav className={`navbar ${showNav ? "responsive" : ""}`}>

                <Fade bottom duration={2000} delay={3150}>
                <ul className="navleft">
                    <li className="navlogo">
                        <img src={logo} alt="santiago-beneitez-logo"></img>
                    </li>
                </ul>
                </Fade>

                <Fade duration={2500} delay={3500}>
                <ul className="navright">
                    <li>
                        <Link to="header" smooth={true} duration={500} className="navitem">Inicio</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="aboutme" smooth={true} duration={500} className="navitem">Sobre Mi</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} className="navitem">Conocimientos</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="navitem">Proyectos</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="navitem">Contactame</Link>
                        <div className="bar"></div>
                    </li>
                </ul>
                <img src={burguer} className="burguer" onClick={handleShowNavbar}></img>
                </Fade>
            </nav>
    );
}

export default Navbar;
import React from "react";
import "./styles.css"
import { Link } from 'react-scroll';

function Navbar(){
    return(
        <nav className="navbar">
            <ul>
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
        </nav>
    );
}

export default Navbar;
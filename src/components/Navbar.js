import React, { useState } from "react";
import "./styles.css"

import { Link } from 'react-scroll';
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import logo from "../assets/logowhite2.webp"
import burguer from "../assets/burguer.webp"



function Navbar(){
    const [showNav,setShowNav]=useState(false);
    const handleShowNavbar = () => {
        setShowNav(!showNav);
      }

    const[t] = useTranslation("global");

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
                        <Link to="header" smooth={true} duration={500} className="navitem">{t("navigation.home")}</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="aboutme" smooth={true} duration={500} className="navitem">{t("navigation.aboutme")}</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} className="navitem">{t("navigation.skills")}</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="projects" smooth={true} duration={500} className="navitem">{t("navigation.portfolio")}</Link>
                        <div className="bar"></div>
                    </li>
                    <li>
                        <Link to="contact" smooth={true} duration={500} className="navitem">{t("navigation.contact")}</Link>
                        <div className="bar"></div>
                    </li>
                </ul>
                <img src={burguer} className="burguer" onClick={handleShowNavbar} alt="menu"></img>
                </Fade>
            </nav>
    );
}

export default Navbar;
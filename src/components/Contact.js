import React from "react";
import linkedinlogo from "../assets/linkedinlogo.png"
import phonelogo from "../assets/phonelogo.png"
import maillogo from "../assets/maillogo.png"
import cvlogo from "../assets/cvlogo.png"
import pdfcv from "../assets/cv.pdf"


function Contact(){
    return(
        <footer className="contact">
            <div className="contact-border"></div>
            <div className="contact-div">
                <div>
                    <img src={linkedinlogo} alt="linkedin-logo"></img>
                    <a href="https://www.linkedin.com/in/santiago-beneitez-143583217" target="_blank" rel="noopener noreferrer">Perfil en Linkedin </a>
                </div>
                <div>
                    <img src={phonelogo} alt="phone-icon"></img>
                    <p>261 609 7192</p>
                </div>
                <div>
                    <img src={maillogo} alt="mail-icon"></img>
                    <p>santiagobeneitez1974@gmail.com</p>
                </div>
                <div>
                    <img src={cvlogo} alt="paper-icon"></img>
                    <a href={pdfcv}  target="_blank" rel="noopener noreferrer" download="cv_santiago_beneitez.pdf">Descargar mi Curriculum </a>
                </div>
            </div>
        </footer>
    );
}

export default Contact;
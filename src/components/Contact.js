import React, { useState } from "react";
import linkedinlogo from "../assets/linkedinlogo.png"
import phonelogo from "../assets/phonelogo.png"
import maillogo from "../assets/maillogo.png"
import cvlogo from "../assets/cvlogo.png"
import pdfcv from "../assets/cv.pdf"
import { useTranslation } from "react-i18next";


function Contact(){

    const[t, i18n] = useTranslation("global");

    const [copied,setCopied] = useState(false);

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        setCopied(true);
            setTimeout(() => {
                setCopied(false);
                }, 2000);
      };


    return(
        <footer className="contact">
            <div className="contact-border"></div>
            <div className="contact-div">
                <div>
                    <img src={linkedinlogo} alt="linkedin-logo"></img>
                    <a href="https://www.linkedin.com/in/santiago-beneitez-143583217" target="_blank" rel="noopener noreferrer">{t("contact.linkedin")}</a>
                </div>
                <div>
                    <img src={phonelogo} alt="phone-icon"></img>
                    <p>261 609 7192</p>
                </div>
                <div>
                    <img src={maillogo} alt="mail-icon"></img>
                    <p  onClick={() => handleCopy("santiagobeneitez1974@gmail.com")}>santiagobeneitez1974@gmail.com</p>
                    {copied && <p id="copied">Copied</p>}
                </div>
                <div>
                    <img src={cvlogo} alt="paper-icon"></img>
                    <a href={pdfcv}  
                        target="_blank" 
                        rel="noopener noreferrer" 
                        download="cv_santiago_beneitez.pdf"
                        >
                            {t("contact.cv")}
                        </a>
                </div>
            </div>
        </footer>
    );
}

export default Contact;
import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import waving from "../assets/waving-hand.webp"
import flag from "../assets/flags2.webp";


function Header(){
    const changeLanguage = () => {
        const currentLanguage = i18n.language;
        const newLanguage = currentLanguage === 'en' ? 'es' : 'en';
        i18n.changeLanguage(newLanguage);
      };

    const[t, i18n] = useTranslation("global");

    return(
        <Fade duration={2800} delay={3500}>
            <header>
                <h1 className="title">Santiago Beneitez</h1>
                <div className="description">
                    <h2>{t("main-title.description-1")} <span>Front-End</span>{t("main-title.description-2")}</h2>
                    <img src={waving} alt="waving hand"></img>
                </div>
                <div className="idioma" onClick={changeLanguage}>
                    <ul>
                        <li>
                        <span className="base"></span>
                        <span className="title2">EN/ES</span>
                        <span className="icon">
                            <img src={flag} alt="flag"></img>
                        </span>
                        </li>
                    </ul>
                </div>
            </header>
        </Fade>
    );
}

export default Header;
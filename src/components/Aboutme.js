import React from "react";

import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import avatar from "../assets/avatar2.webp";

function Aboutme(){
    const[t] = useTranslation("global");

    return(
        <section className="aboutme">
            <div className="bg"></div>
            <Fade left>
                <div className="avatar">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <div className="texto">
                    <h2>{t("aboutme.title")}</h2>
                    <p>{t("aboutme.description")}
                </p>
                </div>
            </Fade>
        </section>
    );
}

export default Aboutme;
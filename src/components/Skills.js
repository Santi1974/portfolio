import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import htmllogo from "../assets/htmllogo.png"
import csslogo from "../assets/csslogo.png"
import jslogo from "../assets/jslogo.png"
import reactlogo from "../assets/reactlogo.png"

function Skills(){
    const[t] = useTranslation("global");

    return(
        <section className="skills">
            <Fade left delay={500}>
                <h2>{t("skills.title")}</h2>
                <div className="cards">
                    <div className="personal">
                        <h3>{t("skills.personal-title")}</h3>
                        <ul>
                            <li>{t("skills.personal-1")}</li>
                            <li>{t("skills.personal-2")}</li>
                            <li>{t("skills.personal-3")}</li>
                            <li>{t("skills.personal-4")}</li>
                            <li>{t("skills.personal-5")}</li>
                        </ul>
                    </div>

                    <div className="informatic">
                        <h3>{t("skills.it-title")}</h3>
                        <div className="tech">
                        <div className="circle">
                                <img src={htmllogo} alt="html-logo"></img>
                                <p>HTML</p>
                            </div>
                            <div className="circle">
                                <img src={csslogo} alt="css-logo"></img>
                                <p>CSS</p>
                            </div>
                            <div className="circle">
                                <img src={jslogo} alt="js-logo"></img>
                                <p id="js">JavaScript</p>
                            </div>

                            <div className="circle">
                                <img src={reactlogo} alt="react-logo"></img>
                                <p>React</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Skills;
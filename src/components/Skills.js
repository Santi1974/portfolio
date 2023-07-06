import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import htmllogo from "../assets/htmllogo.webp"
import csslogo from "../assets/csslogo.webp"
import jslogo from "../assets/jslogo.webp"
import reactlogo from "../assets/reactlogo.webp"
import gitlogo from "../assets/gitlogo.webp"
import bslogo from "../assets/bootstrap.webp"

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
                                <img src={bslogo} alt="bootstrap-logo"></img>
                                <p className="js">Bootstrap</p>
                            </div>
                            <div className="circle">
                                <img src={jslogo} alt="js-logo"></img>
                                <p className="js">JavaScript</p>
                            </div>
                            <div className="circle">
                                <img src={reactlogo} alt="react-logo"></img>
                                <p>React</p>
                            </div>
                            <div className="circle">
                                <img src={gitlogo} alt="git-logo"></img>
                                <p>Git</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
        </section>
    );
}

export default Skills;
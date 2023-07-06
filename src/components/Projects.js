import React from "react";

import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

import htmllogo from "../assets/htmllogo.webp"
import csslogo from "../assets/csslogo.webp"
import jslogo from "../assets/jslogo.webp"
import reactlogo from "../assets/reactlogo.webp"
import bslogo from "../assets/bootstrap.webp"

function Projects(){
    const[t] = useTranslation("global");

    const redirectToLink1 = () => {
        window.open('https://loginpetlife.vercel.app', '_blank');
    };

    const redirectToLink2 = () => {
        window.open('https://rickandmortyencyc.vercel.app', '_blank');
    };

    return(
        <section className="project">
            <div className="bg2"></div>
            <Fade left>
                <h2>{t("projects.title")}</h2>
                <div className="project-grid">
                    <div className="project-item">
                        <div className="project-1-container">
                            <div className="project-1" onClick={redirectToLink1}>
                                <h6>PetLife</h6>
                                <p>(No data saving or login implemented)</p>
                                <div className="project-1-img">
                                    <img src={htmllogo} alt="html-logo"></img>
                                    <img src={csslogo} alt="css-logo"></img>
                                    <img src={bslogo} alt="bootstrap-logo"></img>
                                    <img src={jslogo} alt="javascript-logo"></img>
                                    <img src={reactlogo} alt="react-logo"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">
                    <div className="project-2-container">
                            <div className="project-2" onClick={redirectToLink2}>
                                <h6>Rick & Morty Encyclopedia</h6>
                                <div className="project-1-img">
                                    <img src={htmllogo} alt="html-logo"></img>
                                    <img src={csslogo} alt="css-logo"></img>
                                    <img src={bslogo} alt="bootstrap-logo"></img>
                                    <img src={jslogo} alt="javascript-logo"></img>
                                    <img src={reactlogo} alt="react-logo"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-item">COMING SOON</div>
                    <div className="project-item">COMING SOON</div>
                    <div className="project-item">COMING SOON</div>
                    <div className="project-item">COMING SOON</div>
                </div>
            </Fade>
        </section>
    );
}

export default Projects;
import React from "react";

import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

function Projects(){
    const[t] = useTranslation("global");

    return(
        <section className="project">
            <div className="bg2"></div>
            <Fade left>
                <h2>{t("projects.title")}</h2>
                <div className="project-grid">
                    <div className="project-item">COMING SOON</div>
                    <div className="project-item">COMING SOON</div>
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
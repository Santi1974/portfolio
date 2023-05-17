import React from "react";
import { Fade } from "react-reveal";

import htmllogoblack from "../assets/htmllogoblack.png"
import csslogoblack from "../assets/csslogoblack.png"
import jslogoblack from "../assets/jslogoblack.png"
import reactlogoblack from "../assets/reactlogoblack.png"


function Skills(){
    return(
        <section className="skills">
            <Fade left>
                <h2>Habilidades/Tecnologias</h2>
                <div className="cards">
                    <div className="personal">
                        <h3>Personales</h3>
                        <ul>
                            <li>Facil aprendizaje</li>
                            <li>Autodidacta</li>
                            <li>Buena predisposición</li>
                            <li>Adaptabilidad</li>
                            <li>Trabajo en grupo</li>
                        </ul>
                    </div>

                    <div className="informatic">
                        <h3>Informaticas</h3>
                        <div className="tech">
                        <div className="circle">
                                <img src={htmllogoblack} alt="html-logo"></img>
                                <p>HTML</p>
                            </div>
                            <div className="circle">
                                <img src={csslogoblack} alt="css-logo"></img>
                                <p>CSS</p>
                            </div>
                            <div className="circle">
                                <img src={jslogoblack} alt="js-logo"></img>
                                <p id="js">JavaScript</p>
                            </div>

                            <div className="circle">
                                <img src={reactlogoblack} alt="react-logo"></img>
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
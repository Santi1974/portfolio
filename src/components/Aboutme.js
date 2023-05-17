import React from "react";
import avatar from "../assets/avatar.png";
import { Fade } from "react-reveal";

function Aboutme(){
    return(
        <section className="aboutme">
            <div className="bg"></div>
            <Fade left>
                <div className="avatar">
                    <img src={avatar} alt="avatar"></img>
                </div>
                <div className="texto">
                    <h2>Sobre Mi</h2>
                    <p>Soy un programador junior con experiencia en el desarrollo de la parte visual e interfaz de sitios web. Desde el 2017, he estado inmerso en el mundo de la programación y disfruto mucho trabajando en proyectos desafiantes donde puedo aplicar mis conocimientos y habilidades.
                </p>
                </div>
            </Fade>
        </section>
    );
}

export default Aboutme;
import React from "react";
import waving from "../assets/waving-hand.png"
import { Fade } from "react-reveal";

function Header(){
    return(
        <Fade duration={2800} delay={3500}>
            <header>
                <h1 className="title">Santiago Beneitez</h1>
                <div className="description">
                    <h2>Desarrollador <span>Front-End</span> Jr.</h2>
                    <img src={waving} alt="waving hand"></img>
                </div>
            </header>
        </Fade>
    );
}

export default Header;
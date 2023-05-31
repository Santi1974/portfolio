import React from "react";
import "./App.css";
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';

import computer from "../src/assets/computer.png"

/*Importing components*/
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Preload from "./components/Preload";


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Santiago Beneitez</title>
        <link rel="icon" href={computer} sizes="16x16" />
      </Helmet>
      <Preload />

      <Navbar />
      <Element name="header">
        <Header />
      </Element>

      <Element name="aboutme">
        <Aboutme />
      </Element>
      <Element name="skills">
        <Skills />
      </Element>
      <Element name="projects">
        <Projects />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      
    </div>
  );
}

export default App;
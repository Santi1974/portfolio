import React from "react";
import "./App.css";
import { Element } from 'react-scroll';
import { Helmet } from 'react-helmet';

import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      
      <Helmet>
        <title>Santiago Beneitez</title>
      </Helmet>

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
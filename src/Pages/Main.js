import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";

export default function Main() {
  return (
    <>
      <Navbar />
      <Homepage id="homepage" />
      <About id="about" />
      <Skills id="skills" />
      <Projects id="project" />
      <Contact id="contact" />
    </>
  );
}

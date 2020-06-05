import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Homepage from "./Homepage/Homepage";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";
import Contact from "./Contact";

export default function Main() {
  return (
    <div id="homepage">
      <Navbar />
      <Homepage />
      <Skills id="skills" />
      <Projects id="project" />
      <Contact id="contact" />
    </div>
  );
}

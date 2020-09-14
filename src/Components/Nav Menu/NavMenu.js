import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./NavMenu.css";

export default function NavMenu() {
  return (
    <nav className="navbar-content">
      <div className="navbar-link-container">
        <div className="navbar-logo-container">
          <Link className="nav-link logo" smooth to="#home">
            MDB<span className="fullstop">.</span>
          </Link>
        </div>
        <Link className="nav-link" smooth to="#about">
          About
        </Link>
        <Link className="nav-link" smooth to="#skills">
          Skills
        </Link>
        <Link className="nav-link" smooth to="#projects">
          Projects
        </Link>
        <Link className="nav-link" smooth to="#contact">
          Contact
        </Link>
      </div>
    </nav>
  );
}

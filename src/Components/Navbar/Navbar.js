import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

import navButton from "../../Images/navButton.svg";

import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="navbar">
      <NavbarButton isButtonPressed={() => setIsOpen(!isOpen)} />
      <NavbarContent isOpen={isOpen} />
    </div>
  );
}

function NavbarButton({ isButtonPressed }) {
  return (
    <button className="navbar-button" onClick={() => isButtonPressed()}>
      <img src={navButton} alt="Navbar Button" />
    </button>
  );
}

function NavbarContent({ isOpen }) {
  return (
    <nav className={`navbar-content ${isOpen ? "is-open" : ""}`}>
      <Link className="nav-link" smooth to="#home">
        Home
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
    </nav>
  );
}

// export default function Menu() {
//   const [isOpen, setIsOpen] = useState(false);
//   return (
//       <div className="Menu">
//           <MenuButton onButtonSwitched={() => setIsOpen(!isOpen)} />
//           <MenuBox isOpen={isOpen} />
//       </div>
//   );
// }
// function MenuButton({ onButtonSwitched }) {
//   return (
//       <button
//           className="Menu-button"
//           onClick={() => onButtonSwitched()}
//       >
//           <img src={MenuIcon} alt="Menu icon" />
//       </button>
//   );
// }
// function MenuBox({ isOpen }) {
//   return (
//       <div className={`Menu-box ${isOpen ? 'is-open' : ''}`}>
//           <div className="Menu-box-link">Home</div>
//           <div className="Menu-box-link">Projects</div>
//           <div className="Menu-box-link">About</div>
//           <div className="Menu-box-link">Contact</div>
//       </div>
//   );
// }

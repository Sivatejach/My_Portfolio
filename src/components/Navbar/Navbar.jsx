import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faS, faT } from "@fortawesome/free-solid-svg-icons";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="logo-container">
            <a href="#hero" className="logo logo-container">
              <FontAwesomeIcon icon={faS} size="1x" />
              <FontAwesomeIcon icon={faT} size="1x" />
            </a>
          </div>
          <div className="menu-container">
            <ul className={menuOpen ? "active" : ""}>
              <li>
                <a href="#hero" className="menu-item">About</a>
              </li>
              <li>
                <a href="#skills" className="menu-item">Skills</a>
              </li>
              <li>
              <a href="#experience" className="menu-item">Experience</a>
              </li>
              <li>
                <a href="#projects" className="menu-item">Projects</a>
              </li>
              <li>
                <a href="#footer" className="menu-item contact-btn">Contact</a>
              </li>
            </ul>
            <button className="menu-btn" onClick={toggleMenu}>
              <span className="material-symbols-outlined" style={{ fontSize: "1.8rem" }}>
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

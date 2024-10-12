import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Change to NavLink
import "./Navbar.css"; // Import the CSS file

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navbar-container">
        <div className="logo">
          My <span className="Foreground-Color">Portfolio</span>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/" // Navigate to Home
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about" // Navigate to About Me
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              About Me
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills" // Navigate to Skills
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects" // Navigate to Projects
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact" // Navigate to Contact
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

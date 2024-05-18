import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.png";

function Navbar() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const location = useLocation();

  // Close navbar when navigating to a new route
  useEffect(() => {
    setIsNavVisible(false);
  }, [location]);

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src={logo} alt="GEOGREAT" />
      </NavLink>
      <button
        className={`nav-toggle ${isNavVisible ? "active" : ""}`}
        aria-label="Toggle navigation"
        aria-expanded={isNavVisible}
        onClick={() => setIsNavVisible((prevState) => !prevState)}
      >
        <span className="hamburger"></span>
      </button>
      <ul className={`nav-menu ${isNavVisible ? "visible" : ""}`}>
        {[
          "/",
          "/about-us",
          "/services",
          "/projects",
          "/quality-hse",
          "/team",
          "/gallery",
          "/contact-us",
        ].map((path, index) => (
          <li key={index}>
            <NavLink exact to={path} activeClassName="active">
              {path === "/"
                ? "Home"
                : path.split("/")[1].replace("-", " ").charAt(0).toUpperCase() +
                path.split("/")[1].slice(1)}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;

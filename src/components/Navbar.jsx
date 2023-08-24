import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom"; // Import NavLink from react-router-dom
import Typed from "react-typed";

import { logo } from "../assets";

import "./navbar.css";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation(); // Get the current location

  const isBlogsPage = location.pathname.startsWith("/blogs"); // Check if the current page is blogs
  const typedTexts = [
    "Spark Minds",
    "Explore Ideas",
    "Unleash Cognizance",
    "Nurture Genius",
    "Awaken Insight",
    "Brainwave Ballet"
  ];

  return (
    <nav className={`navbar ${isBlogsPage ? "hide-header" : ""}`}>
      <div className="navbar-container">
        <NavLink
          to="/"
          className="logo"
          activeClassName="active"
          onClick={() => {
            setToggle(false);
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="logo-image" />
          <p className="logo-text">
            <span className="workrework-text">workREwork</span>
            <br />
            <Typed strings={typedTexts} typeSpeed={80} backSpeed={40} loop />
          </p>
        </NavLink>
        {!isBlogsPage && ( // Display Blogs NavLink only if not on Blogs page
          <NavLink
            to="/blogs"
            activeClassName="active"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Blogs
          </NavLink>
        )}
       
      </div>
    </nav>
  );
};

export default Navbar;
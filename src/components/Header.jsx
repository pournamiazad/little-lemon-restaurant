import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import logo from "../assets/logo.svg";

const Header = () => (
  <header className="header">
    <a href="#main-content" className="skip-link">Skip to main content</a>
    <div className="header__container">
      <div className="header__logo">
        <Link to="/" aria-label="Go to home page">
          <img src={logo} alt="Little Lemon Logo" className="header__logo-img" />
        </Link>
      </div>
      <Nav />
    </div>
  </header>
);

export default Header; 
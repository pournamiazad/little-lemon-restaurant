import React from "react";
import Nav from "./Nav";
import logo from "../assets/logo.svg";

const Header = () => (
  <header className="header">
    <div className="header__container">
      <div className="header__logo">
        <img src={logo} alt="Little Lemon Logo" className="header__logo-img" />
      </div>
      <Nav />
    </div>
  </header>
);

export default Header; 
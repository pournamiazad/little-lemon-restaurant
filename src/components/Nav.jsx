import React from "react";
import { Link } from "react-router-dom";

const Nav = () => (
  <nav className="nav">
    <ul className="nav__list">
      <li className="nav__item"><Link to="/">Home</Link></li>
      <li className="nav__item"><Link to="/about">About</Link></li>
      <li className="nav__item"><Link to="/menu">Menu</Link></li>
      <li className="nav__item"><Link to="/booking">Reservations</Link></li>
      <li className="nav__item"><Link to="/order">Order Online</Link></li>
      <li className="nav__item"><Link to="/login">Login</Link></li>
    </ul>
  </nav>
);

export default Nav; 
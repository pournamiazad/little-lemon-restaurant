import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <button
        className="nav__hamburger"
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={open}
        aria-controls="nav-list"
        onClick={handleToggle}
      >
        <span className="nav__hamburger-bar"></span>
        <span className="nav__hamburger-bar"></span>
        <span className="nav__hamburger-bar"></span>
      </button>
      <ul
        className={`nav__list${open ? " nav__list--open" : ""}`}
        id="nav-list"
        onClick={handleClose}
      >
        <li className="nav__item"><Link to="/" aria-current={location.pathname === "/" ? "page" : undefined}>Home</Link></li>
        <li className="nav__item"><Link to="/about" aria-current={location.pathname === "/about" ? "page" : undefined}>About</Link></li>
        <li className="nav__item"><Link to="/menu" aria-current={location.pathname === "/menu" ? "page" : undefined}>Menu</Link></li>
        <li className="nav__item"><Link to="/booking" aria-current={location.pathname === "/booking" ? "page" : undefined}>Reservations</Link></li>
        <li className="nav__item"><Link to="/order" aria-current={location.pathname === "/order" ? "page" : undefined}>Order Online</Link></li>
        <li className="nav__item"><Link to="/login" aria-current={location.pathname === "/login" ? "page" : undefined}>Login</Link></li>
      </ul>
    </nav>
  );
};

export default Nav; 
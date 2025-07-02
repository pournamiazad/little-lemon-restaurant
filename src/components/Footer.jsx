import React from "react";
import logo from "../assets/logo.svg";

const Footer = () => (
  <footer className="footer">
    <div className="container footer__container">
      <div className="footer__col footer__col--logo">
        <img src={logo} alt="Little Lemon Logo" className="footer__logo-img" />
      </div>
      <div className="footer__col footer__col--nav">
        <h4 className="footer__title">Doormat Navigation</h4>
        <ul className="footer__list">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Reservations</a></li>
          <li><a href="#">Order Online</a></li>
          <li><a href="#">Login</a></li>
        </ul>
      </div>
      <div className="footer__col footer__col--contact">
        <h4 className="footer__title">Contact</h4>
        <ul className="footer__list">
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </div>
      <div className="footer__col footer__col--social">
        <h4 className="footer__title">Social Media Links</h4>
        <ul className="footer__list">
          <li>Facebook</li>
          <li>Instagram</li>
          <li>Twitter</li>
        </ul>
      </div>
    </div>
  </footer>
);

export default Footer; 
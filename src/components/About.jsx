import React from "react";
import chefA from "../assets/Mario-and-Adrian-A.jpg";
import chefB from "../assets/Mario-and-Adrian-b.jpg";

const About = () => (
  <section className="about" aria-labelledby="about-title">
    <div className="container about__container">
      <div className="about__content">
        <h2 className="about__title" id="about-title">Little Lemon</h2>
        <h3 className="about__city">Chicago</h3>
        <p className="about__desc">Little Lemon is run by chefs Mario and Adrian, who bring their passion for Mediterranean cuisine to every dish. Our story is rooted in tradition, hospitality, and a love for fresh, vibrant flavors. Join us for a memorable dining experience in Chicago.</p>
      </div>
      <div className="about__images">
        <img src={chefA} alt="Chef Mario portrait" className="about__image about__image--main" />
        <img src={chefB} alt="Chef Adrian portrait" className="about__image about__image--overlap" />
      </div>
    </div>
  </section>
);

export default About; 
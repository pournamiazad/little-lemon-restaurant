import React from "react";
import chefA from "../assets/Mario-and-Adrian-A.jpg";
import chefB from "../assets/Mario-and-Adrian-b.jpg";

const About = () => (
  <section className="about">
    <div className="container about__container">
      <div className="about__content">
        <h2 className="about__title">Little Lemon</h2>
        <h3 className="about__city">Chicago</h3>
        <p className="about__desc">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
      </div>
      <div className="about__images">
        <img src={chefA} alt="Chef Mario" className="about__image about__image--main" />
        <img src={chefB} alt="Chef Adrian" className="about__image about__image--overlap" />
      </div>
    </div>
  </section>
);

export default About; 
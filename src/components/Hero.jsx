import React from "react";

const Hero = () => (
  <section className="hero">
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__title">Little Lemon</h1>
        <h2 className="hero__city">Chicago</h2>
        <p className="hero__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <button className="hero__cta">Reserve a Table</button>
      </div>
      <div className="hero__image">
        {/* Replace with your food image if available */}
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Greek Salad" />
      </div>
    </div>
  </section>
);

export default Hero; 
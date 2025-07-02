import React from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container">
        <div className="hero__content">
          <h1 className="hero__title" id="hero-title">Little Lemon</h1>
          <h2 className="hero__city">Chicago</h2>
          <p className="hero__desc">Welcome to Little Lemon, a family-owned Mediterranean restaurant in the heart of Chicago. Enjoy fresh, authentic dishes made with love and the finest ingredients.</p>
          <button
            className="hero__cta"
            aria-label="Reserve a table at Little Lemon"
            onClick={() => navigate("/booking")}
          >
            Reserve a Table
          </button>
        </div>
        <div className="hero__image">
          {/* Replace with your food image if available */}
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Greek Salad dish" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 
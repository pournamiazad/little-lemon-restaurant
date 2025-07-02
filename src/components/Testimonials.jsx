import React from "react";
import chefImg from "../assets/restaurant-chef-B.jpg";

const testimonials = [
  { name: "Alice", rating: 5, text: "Amazing food and great service!", img: chefImg },
  { name: "Bob", rating: 4, text: "Loved the ambiance and the lemon dessert!", img: chefImg },
  { name: "Carol", rating: 5, text: "Best Greek salad in town.", img: chefImg },
  { name: "Dave", rating: 4, text: "Will come again for sure!", img: chefImg },
];

const Testimonials = () => (
  <section className="testimonials">
    <div className="container">
      <h2 className="testimonials__title">Testimonials</h2>
      <div className="testimonials__cards">
        {testimonials.map((t) => (
          <div key={t.name} className="testimonials__card">
            <div className="testimonials__rating">Rating: {t.rating}/5</div>
            <img src={t.img} alt={t.name} className="testimonials__img" />
            <div className="testimonials__name">{t.name}</div>
            <div className="testimonials__text">{t.text}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials; 
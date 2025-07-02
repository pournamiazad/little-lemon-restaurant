import React from "react";
import greekSalad from "../assets/greek-salad.jpg";
import lemonDessert from "../assets/lemon-dessert.jpg";
import restaurantFood from "../assets/restauranfood.jpg";

const specials = [
  {
    title: "Greek Salad",
    price: "$12.99",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    img: greekSalad,
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    img: restaurantFood,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    desc: "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    img: lemonDessert,
  },
];

const Specials = () => (
  <section className="specials">
    <div className="container">
      <div className="specials__header">
        <h2>Specials</h2>
        <button>Online Menu</button>
      </div>
      <div className="specials__cards">
        {specials.map((item) => (
          <div key={item.title} className="specials__card">
            <img src={item.img} alt={item.title} className="specials__card-img" />
            <div className="specials__card-row">
              <h3 className="specials__card-title">{item.title}</h3>
              <span className="specials__card-price">{item.price}</span>
            </div>
            <p className="specials__card-desc">{item.desc}</p>
            <button className="specials__card-cta">Order a delivery <span role="img" aria-label="delivery">🚚</span></button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Specials; 
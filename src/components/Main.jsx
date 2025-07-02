import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import MenuPage from "./MenuPage";
import BookingPage from "./BookingPage";
import OrderPage from "./OrderPage";
import LoginPage from "./LoginPage";

function initializeTimes() {
  return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  // For now, always return the same times regardless of date
  if (action.type === "update" && action.date) {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }
  return state;
}

const Main = () => {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchTimes={dispatchTimes} />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default Main; 
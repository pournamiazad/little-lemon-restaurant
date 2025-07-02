import React, { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import MenuPage from "../pages/MenuPage";
import BookingPage from "../pages/BookingPage";
import OrderPage from "../pages/OrderPage";
import LoginPage from "../pages/LoginPage";
import ConfirmedBooking from "./ConfirmedBooking";

function initializeTimes() {
  const today = new Date();
  console.log("window.fetchAPI:", window.fetchAPI);
  return window.fetchAPI ? window.fetchAPI(today) : ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
  if (action.type === "update" && action.date) {
    const dateObj = new Date(action.date);
    return window.fetchAPI ? window.fetchAPI(dateObj) : ["17:00", "18:00", "19:00", "20:00", "21:00"];
  }
  return state;
}

const Main = () => {
  const [availableTimes, dispatchTimes] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (window.submitAPI && window.submitAPI(formData)) {
      // Save booking to localStorage
      const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
      bookings.push(formData);
      localStorage.setItem('bookings', JSON.stringify(bookings));
      navigate("/booking-confirmed");
    }
  };

  return (
    <main className="main">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchTimes={dispatchTimes} submitForm={submitForm} />} />
        <Route path="/booking-confirmed" element={<ConfirmedBooking />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </main>
  );
};

export default Main; 
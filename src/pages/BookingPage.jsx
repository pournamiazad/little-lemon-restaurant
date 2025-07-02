import React from "react";
import BookingForm from "../components/BookingForm";

const BookingPage = ({ availableTimes, dispatchTimes, submitForm }) => {
  return (
    <section className="booking-page container">
      <h1>Book a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} submitForm={submitForm} />
    </section>
  );
};

export default BookingPage; 
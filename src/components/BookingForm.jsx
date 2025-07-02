import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatchTimes, submitForm }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "date") {
      dispatchTimes({ type: "update", date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (submitForm) {
      submitForm(form);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <div className="booking-form__row">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
        />
      </div>
      <div className="booking-form__row">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="booking-form__row">
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="20"
          value={form.guests}
          onChange={handleChange}
          required
        />
      </div>
      <div className="booking-form__row">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
          required
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
      </div>
      <button className="booking-form__submit" type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm; 
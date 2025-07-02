import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatchTimes, submitForm }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    const today = new Date();
    const selectedDate = new Date(form.date);

    if (!form.date) {
      newErrors.date = "Date is required.";
    } else if (selectedDate < new Date(today.toDateString())) {
      newErrors.date = "Date cannot be in the past.";
    }
    if (!form.time) {
      newErrors.time = "Time is required.";
    }
    if (!form.guests || form.guests < 1 || form.guests > 20) {
      newErrors.guests = "Guests must be between 1 and 20.";
    }
    if (!form.occasion) {
      newErrors.occasion = "Occasion is required.";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (name === "date") {
      dispatchTimes({ type: "update", date: value });
    }
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    if (submitForm) {
      submitForm(form);
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} noValidate aria-labelledby="booking-form-title">
      <h2 id="booking-form-title">Reservation Form</h2>
      <div className="booking-form__row">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.date}
          aria-describedby={errors.date ? "date-error" : undefined}
        />
        {errors.date && <span id="date-error" className="error" style={{color: 'red'}} role="alert">{errors.date}</span>}
      </div>
      <div className="booking-form__row">
        <label htmlFor="time">Time</label>
        <select
          id="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.time}
          aria-describedby={errors.time ? "time-error" : undefined}
        >
          <option value="">Select a time</option>
          {availableTimes.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.time && <span id="time-error" className="error" style={{color: 'red'}} role="alert">{errors.time}</span>}
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
          aria-required="true"
          aria-invalid={!!errors.guests}
          aria-describedby={errors.guests ? "guests-error" : undefined}
        />
        {errors.guests && <span id="guests-error" className="error" style={{color: 'red'}} role="alert">{errors.guests}</span>}
      </div>
      <div className="booking-form__row">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={form.occasion}
          onChange={handleChange}
          required
          aria-required="true"
          aria-invalid={!!errors.occasion}
          aria-describedby={errors.occasion ? "occasion-error" : undefined}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        {errors.occasion && <span id="occasion-error" className="error" style={{color: 'red'}} role="alert">{errors.occasion}</span>}
      </div>
      <button className="booking-form__submit" type="submit">Submit reservation</button>
    </form>
  );
};

export default BookingForm; 
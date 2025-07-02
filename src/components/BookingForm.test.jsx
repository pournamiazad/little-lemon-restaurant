import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("BookingForm", () => {
  const availableTimes = ["17:00", "18:00"];
  const dispatchTimes = jest.fn();

  it("renders static text fields", () => {
    render(<BookingForm availableTimes={availableTimes} dispatchTimes={dispatchTimes} />);
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Submit reservation")).toBeInTheDocument();
  });
}); 
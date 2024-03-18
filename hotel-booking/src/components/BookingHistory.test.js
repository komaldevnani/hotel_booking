import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router, Route, MemoryRouter, Routes } from "react-router-dom";
import BookingHistory from "./BookingHistory";

describe("BookingHistory Component", () => {
  const mockBookingHistory = [
    { id: 1, hotelId: "1", date: "2022-03-15T12:00:00Z" },
    { id: 2, hotelId: "2", date: "2022-03-16T12:00:00Z" },
  ];
  
  it("renders loading state correctly", () => {
    render(
      <MemoryRouter initialEntries={["/booking-history/1"]}>
        <Routes>
          <Route
            path="/booking-history/1"
            Component={BookingHistory}
          />
        </Routes>
      </MemoryRouter>
    );

    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();
  });

  it("redirects to home if user is not logged in", () => {
    render(
      <Router>
        <BookingHistory />
      </Router>
    );

    const loadingElement = screen.getByText("Loading...");
    expect(loadingElement).toBeInTheDocument();

    const homeLink = screen.getByText("Back to Home");
    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute("href", "/");
  });
});

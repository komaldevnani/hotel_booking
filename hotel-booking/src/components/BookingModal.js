import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import "./BookingModal.css";
import API_BASE_URL from "../config";


function BookingModal({ hotel, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  let navigate = useNavigate()

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleBookNow = async () => {
    try {
      const response = await fetch(`${API_BASE_URL}/book-hotel`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          hotelId: hotel.id,
          userId: 1, // Hardcoded user ID for now
          date: selectedDate.toISOString().split("T")[0], // Format date as "YYYY-MM-DD"
        }),
      });

      if (response.ok) {
        navigate(`/booking/${hotel.id}/confirmation`);
      } else {
        alert("Booking failed. Please try again.");
      }
    } catch (error) {
      console.error("Error booking hotel:", error);
      alert("Booking failed. Please try again.");
    }

    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Book {hotel.name}</h2>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          dateFormat="dd/MM/yyyy"
        />
        <button onClick={handleBookNow}>Book Now</button>
      </div>
    </div>
  );
}

export default BookingModal;

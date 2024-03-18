import React from "react";
import { useParams } from "react-router-dom";

function BookingConfirmation() {
  const { hotelId } = useParams();
  // Here you can implement further logic to get hotel details, etc.
  return (
    <div>
      <h1>Booking Confirmation</h1>
      <p>Booking confirmed for Hotel ID: {hotelId}</p>
    </div>
  );
}

export default BookingConfirmation;

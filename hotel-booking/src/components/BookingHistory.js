import React, { useState, useEffect } from "react";
import useAuth from "../useAuth";
import { Link, useNavigate, useParams } from "react-router-dom";
import API_BASE_URL from "../config";

function BookingHistory() {
  const { isLoggedIn } = useAuth();
  const { userId } = useParams();
  const [bookingHistory, setBookingHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBookingHistory = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/booking-history/${userId}`);
        const data = await response.json();
        setBookingHistory(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching booking history:", error);
        setLoading(false);
      }
    };

    fetchBookingHistory();
  }, [userId]);

  if (!isLoggedIn) {
    // Redirect to home if user is not logged in
    navigate("/");
  }

  return (
    <div style={styles.container}>
      <h2>Booking History</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={styles.bookingList}>
          {bookingHistory.map((booking) => (
            <li key={booking.id}>
              <strong>{booking.hotelId}</strong> - Booked on{" "}
              {booking.date}
            </li>
          ))}
        </ul>
      )}
      <p>
        <Link to="/">Back to Home</Link>
      </p>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "auto",
    padding: "20px",
  },
  bookingList: {
    listStyleType: "none",
    padding: 0,
  },
};

export default BookingHistory;

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BookingModal from "./BookingModal";
import useAuth from "../useAuth";

function Home() {
  const { isLoggedIn, logout, login } = useAuth();
  const [availableHotels, setAvailableHotels] = useState([]);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchAvailableHotels = async () => {
    try {
      const response = await fetch("http://localhost:5000/hotels");
      const data = await response.json();
      const availableHotels = data.filter((hotel) => hotel.available);
      setAvailableHotels(availableHotels);
    } catch (error) {
      console.error("Error fetching hotels:", error);
    }
  };

  useEffect(() => {
    fetchAvailableHotels();
  }, []);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div style={styles.container}>
      <h1>Welcome to Hotel Booking App</h1>
      <p>Book your dream stay with us!</p>
      {isLoggedIn ? (
        <div>
          <h2>Available Hotels:</h2>
          <ul style={styles.hotelList}>
            {availableHotels.map((hotel) => (
              <li key={hotel.id}>
                {hotel.name}{" "}
                <button onClick={() => handleBookNow(hotel)}>Book now</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <Link to="/login" style={styles.link}>
          Login
        </Link>
      )}

      {isModalOpen && (
        <BookingModal
          hotel={selectedHotel}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    textAlign: "center",
  },
  link: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    fontSize: "16px",
  },
  hotelList: {
    listStyleType: "none",
    padding: 0,
  },
};

export default Home;

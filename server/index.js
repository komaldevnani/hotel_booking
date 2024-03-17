const cors = require('cors');
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000'
}));

// Sample Data - can be replace with Database
let hotels = [
  { id: 1, name: "Hotel A", available: true },
  { id: 2, name: "Hotel B", available: true },
  { id: 3, name: "Hotel C", available: true },
];

let users = [
  { id: 1, username: "user1", password: "password1" },
  { id: 2, username: "user2", password: "password2" },
];

let bookedHotels = [
  { id: 1, hotelId: 1, userId: 1, date: "2024-03-20" },
  { id: 2, hotelId: 2, userId: 1, date: "2024-03-25" },
];

// Routes
app.get("/hotels", (req, res) => {
  res.json(hotels);
});

app.post("/book-hotel", (req, res) => {
  const { hotelId, userId, date } = req.body;

  if (!hotelId || !userId || !date) {
    return res.status(400).json({ error: "Invalid data format" });
  }

  const hotel = hotels.find((h) => h.id === hotelId);
  if (!hotel || !hotel.available) {
    return res.status(404).json({ error: "Hotel not found or unavailable" });
  }

  const booking = { id: bookedHotels.length + 1, hotelId, userId, date };
  bookedHotels.push(booking);
  hotel.available = false;

  res.json({ message: "Booking successful", booking });
});

app.get("/booking-history/:userId", (req, res) => {
  const { userId } = req.params;
  const userBookings = bookedHotels.filter((booking) => booking.userId == userId);
  res.json(userBookings);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

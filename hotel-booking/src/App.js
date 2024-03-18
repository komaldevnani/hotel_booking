import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import BookingConfirmation from "./components/BookingConfirmation";
import BookingHistory from "./components/BookingHistory";
import { users } from "./data";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          
          <Route
            path="/booking/:hotelId/confirmation"
            Component={BookingConfirmation}
          />
          <Route path="/booking-history/:userId" Component={BookingHistory} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

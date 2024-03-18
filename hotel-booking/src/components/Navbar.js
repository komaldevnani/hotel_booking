import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../useAuth";

function Navbar() {
  const { isLoggedIn, logout, userId } = useAuth();

    const handleLogout = () => {
        logout();
    };

    return (
        <nav style={styles.navbar}>
        <ul style={styles.navbarList}>
            <li style={styles.navbarItem}>
            <Link to="/" style={styles.navbarLink}>
                Home
            </Link>
            </li>
            {isLoggedIn && (
            <li style={styles.navbarItem}>
              <Link to={`/booking-history/${userId}`} style={styles.navbarLink}>
                Booking History
              </Link>
            </li>
            )}
            {isLoggedIn ? (
            <li style={styles.navbarItem}>
                <button onClick={handleLogout} style={styles.logoutButton}>
                Log Out
                </button>
            </li>
            ) : (
            <li style={styles.navbarItem}>
                <Link to="/login" style={styles.navbarLink}>
                Login
                </Link>
            </li>
            )}
        </ul>
        </nav>
    );
}

const styles = {
  navbar: {
    backgroundColor: "#333",
    padding: "10px 20px",
  },
  navbarList: {
    display: "flex",
    listStyleType: "none",
    padding: 0,
    margin: 0,
    alignItems: "center",
  },
  navbarItem: {
    marginRight: "10px",
  },
  navbarLink: {
    color: "#fff",
    textDecoration: "none",
  },
  logoutButton: {
    padding: "5px 10px",
    backgroundColor: "#dc3545",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
};

export default Navbar;

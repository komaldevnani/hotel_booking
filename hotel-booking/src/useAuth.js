import { useState, useEffect } from "react";
import { users } from "./data";

function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Check user's authentication status
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      setIsLoggedIn(true);
      setUserId(user.id);
    } else {
      setIsLoggedIn(false);
      setUserId(null);
    }
  }, []);

  const logout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    setUserId(null);
    window.location.href = "/";
  };

  const login = (username, password) => {
    const user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
      setUserId(user.id);

    } else {
      alert("Invalid username or password");
    }
  };

  return { isLoggedIn, userId, logout, login };
}

export default useAuth;

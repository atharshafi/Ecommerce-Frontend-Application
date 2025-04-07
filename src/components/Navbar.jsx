// src/components/Navbar.jsx

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [fullName, setFullName] = useState("");

  // Check if the user is logged in when the component mounts
  useEffect(() => {
    const token = localStorage.getItem("token");
    const name = localStorage.getItem("fullName");

    if (token && name) {
      setIsLoggedIn(true); // Set the user as logged in
      setFullName(name);    // Set the user's full name
    } else {
      setIsLoggedIn(false); // Ensure the user is not logged in if no token
    }
  }, []); // Empty dependency array ensures this effect runs only once

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("fullName");
    setIsLoggedIn(false); // Update state to reflect logout
  };

  return (
    <nav className="bg-black text-pink-50 p-4 flex gap-4 border-b">
      <Link to="/products" className="text-white">Products</Link>
      <Link to="/cart" className="text-white">Cart</Link>
      <Link to="/orders" className="text-white">Orders</Link>

      {/* Conditional rendering based on login status */}
      {isLoggedIn ? (
        <>
          <Link to="/user-info" className="text-white">{fullName}</Link>
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-1 px-4 rounded"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="text-white">Login</Link>
          <Link to="/register" className="text-white">Register</Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;

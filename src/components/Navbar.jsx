import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { jwtDecode } from 'jwt-decode'; 

export default function Navbar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  // On component mount, check if token exists
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      try {
        const decoded = jwtDecode(token); // Decode token to get user data
        setIsLoggedIn(true);
        setUserRole(decoded.role || "user"); // assuming your token has a `role` field
      } catch (err) {
        console.error("Invalid token");
        setIsLoggedIn(false);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);  // Empty dependency array to run this effect only once on mount

  // Handle user logout
  const handleLogout = () => {
    localStorage.removeItem("token");  // Remove the token from localStorage
    setIsLoggedIn(false);  // Update local state to reflect logout
    setUserRole(null);  // Reset userRole
    navigate("/login");  // Redirect to login page
  };

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/">MyApp</Link>
      </div>

      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        {/* Conditional rendering based on login status */}
        {!isLoggedIn && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}

        {isLoggedIn && userRole !== "admin" && (
          <>
            <Link to="/profile">My Profile</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        )}

        {isLoggedIn && userRole === "admin" && (
          <>
            <Link to="/admin/dashboard">Admin Panel</Link>
            <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

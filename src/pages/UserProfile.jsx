import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode";
import { getOrders } from "../api/api"; // optional: to show user orders

export default function UserProfile() {
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    try {
      const decoded = jwtDecode(token);
      setUserData(decoded);

      // Optional: fetch user orders
      getOrders(token)
        .then(setOrders)
        .catch((err) => console.error("Error fetching orders", err));
    } catch (err) {
      console.error("Invalid token", err);
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (!userData) return <div className="p-4">Loading...</div>;

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow rounded-lg mt-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <p><strong>Name:</strong> {userData.full_name}</p>
      <p><strong>Email:</strong> {userData.sub || userData.email}</p>
      <p><strong>Role:</strong> {userData.role || "user"}</p>

      {/* Optional Orders Section */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Your Orders</h2>
        {orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <ul className="list-disc list-inside space-y-1">
            {orders.map((order, i) => (
              <li key={i}>
                Order #{order.id} - {order.status} - {order.total_price} AED
              </li>
            ))}
          </ul>
        )}
      </div>

      <button
        onClick={handleLogout}
        className="mt-6 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}

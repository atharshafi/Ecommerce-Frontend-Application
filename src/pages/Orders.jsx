import { useEffect, useState } from "react";
import { getOrders } from "../api/api";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const res = await getOrders(token);
        console.log("API Response:", res); // Log the full response to inspect

        // If the response is directly an array, use it.
        if (Array.isArray(res)) {
          setOrders(res); // Set orders directly as they are an array
        } else {
          throw new Error("Invalid response data format.");
        }
      } catch (err) {
        setError(err.message || "Failed to fetch orders.");
      }
    };

    fetchOrders();
  }, [token]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Your Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="border p-2 my-2">
            <p>Order #{order.id} - ${order.total_amount}</p>
            <p>Date: {new Date(order.created_at).toLocaleString()}</p>
          </div>
        ))
      )}
    </div>
  );
}

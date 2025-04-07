import { useEffect, useState } from "react";
import { getCart, createOrder, clearCart } from "../api/api";

export default function Cart() {
  const [cart, setCart] = useState(null);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setLoading(true);
      getCart(token)
        .then((res) => {
          console.log("Cart data:", res);
          if (res && Array.isArray(res.items)) {
            setCart(res);
          } else {
            console.error("Invalid cart data structure:", res);
            setCart({ items: [] });
          }
        })
        .catch((err) => {
          console.error("Error fetching cart:", err);
          setCart({ items: [] });
        })
        .finally(() => setLoading(false));
    } else {
      alert("Please log in to view your cart.");
    }
  }, [token]);

  const handleCheckout = async () => {
    try {
      await createOrder(token);
      await clearCart(token);
      alert("Order placed successfully!");
      window.location.reload();
    } catch (error) {
      console.error("Error during checkout:", error);
      alert("Failed to place order.");
    }
  };

  if (loading) return <div>Loading...</div>;

  if (!cart || cart.items.length === 0) {
    return (
      <div className="p-4">
        <h1 className="text-xl font-bold">Your Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Your Cart</h1>
      {cart.items.map((item) => (
        <div key={item.id}>
          {item.product.name} x {item.quantity}
        </div>
      ))}
      <button
        onClick={handleCheckout}
        className="btn mt-4"
        disabled={cart.items.length === 0}
      >
        Checkout
      </button>
    </div>
  );
}

import { useEffect, useState } from "react";
import { getProducts, addToCart } from "../api/api";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const res = await getProducts();
        // Check if response is directly an array or an object with `.data`
        const data = Array.isArray(res) ? res : res?.data ?? [];
        setProducts(data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]); // Safe fallback
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  const handleAdd = async (product) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("You must be logged in to add to cart.");
      return;
    }

    try {
      await addToCart({ product_id: product.id, quantity: 1 },token,);
      alert("Added to cart!");
    } catch (err) {
      console.error("Add to cart failed:", err);
      alert("Failed to add to cart.");
    }
  };

  if (loading) return <p className="p-4 text-center">Loading products...</p>;
  if (!products.length) return <p className="p-4 text-center">No products available.</p>;

  return (
    <div className="bg-white-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={handleAdd} />
      ))}
    </div>
  );
}

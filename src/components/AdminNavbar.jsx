import { Link, useNavigate } from "react-router-dom";

export default function AdminNavbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // clear auth token
    navigate("/admin/login");         // redirect to admin login
  };

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link to="/admin/dashboard">Admin Panel</Link>
      </div>
      <div className="flex gap-6 items-center">
        <Link to="/admin/dashboard" className="hover:text-blue-400">Dashboard</Link>
        <Link to="/admin/users" className="hover:text-blue-400">Users</Link>
        <Link to="/admin/products" className="hover:text-blue-400">Products</Link>
        <Link to="/admin/orders" className="hover:text-blue-400">Orders</Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

import { Link } from "react-router-dom";
import AdminNavbar from "../components/AdminNavbar";

export default function AdminDashboard() {
  return (
    <div className="p-4 space-y-2">
        <AdminNavbar />
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      <Link to="/admin/users" className="block text-blue-600">Manage Users</Link>
      <Link to="/admin/products" className="block text-blue-600">Manage Products</Link>
    </div>
  );
}

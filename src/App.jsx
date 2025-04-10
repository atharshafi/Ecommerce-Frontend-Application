// src/App.jsx

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminLogin from './pages/AdminLogin';
import ManageProducts from "./pages/ManageProducts";
import AdminDashboard from "./pages/AdminDashboard";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";
import Navbar from "./components/Navbar"; // Import the Navbar component

function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* Include Navbar in the layout */}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/products" element={<ManageProducts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

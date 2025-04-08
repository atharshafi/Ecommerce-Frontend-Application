import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { adminLogin } from '../api/api'; // adjust path if needed

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const token = await adminLogin({ email, password });
      localStorage.setItem('token', token.access_token);
      navigate('/admin/dashboard');
    } catch (err) {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h2 className="text-2xl mb-4 font-bold">Admin Login</h2>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="w-full border p-2"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          className="w-full border p-2"
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;

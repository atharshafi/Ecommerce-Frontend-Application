import { useState } from "react";
import { register } from "../api/api"; // Ensure this is the correct API call for registering a user

export default function Register({ onRegisterSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState(""); // Full name state

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register({ email, password, full_name: fullName });
      onRegisterSuccess(fullName); // Update parent component with full name
    } catch (err) {
      console.error("Registration error:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Register</h2>
      <div>
        <label htmlFor="email" className="block">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="password" className="block">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label htmlFor="full_name" className="block">Full Name:</label>
        <input
          type="text"
          id="full_name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-2">Register</button>
    </form>
  );
}

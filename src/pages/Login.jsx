import { useState } from "react";
import { login } from "../api/api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const handleLogin = async () => {
  try {
    const res = await login({ email, password }); // ✅ FIXED
    localStorage.setItem("token", res.access_token);
    window.location.href = "/products";
  } catch {
    alert("Invalid credentials");
  }
};

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-xl font-bold mb-4">Login</h1>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        className="input"
        value={email}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
        className="input"
        value={password}
      />
      <button onClick={handleLogin} className="btn">Login</button>
    </div>
  );
}

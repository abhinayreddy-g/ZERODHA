import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthProvider";

const Signup = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const res = await fetch("http://localhost:3002/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        const data = await res.json();
        login(data.token);
        // Redirect to your original dashboard
        window.location.href = "http://localhost:3001";
      } else {
        const data = await res.json();
        setError(data.error || "Signup failed");
      }
    } catch {
      setError("Network error. Please try again.");
    }
  };

  return (
    <div
      style={{
        maxWidth: "380px",
        margin: "40px auto",
        padding: "32px 24px",
        background: "#f7fafd",
        borderRadius: "10px",
        boxShadow: "0 2px 8px 0 rgba(40,40,60,0.10)",
      }}
    >
      <h2 style={{ textAlign: "center", color: "#555", marginBottom: "18px" }}>
        Sign Up
      </h2>
      <form onSubmit={handleSignup}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            backgroundColor: "#fff",
          }}
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            backgroundColor: "#fff",
          }}
        />
        <input
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          type="password"
          required
          style={{
            width: "100%",
            padding: "10px",
            margin: "10px 0",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "16px",
            backgroundColor: "#fff",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            background: "#4169e1",
            color: "#fff",
            padding: "11px",
            margin: "16px 0 0 0",
            border: "none",
            borderRadius: "5px",
            fontWeight: "bold",
            fontSize: "17px",
            cursor: "pointer",
            boxShadow: "0 1px 3px rgba(40,40,60,0.07)",
          }}
        >
          Sign Up
        </button>
        {error && (
          <div style={{ color: "#bb2525", marginTop: "10px" }}>{error}</div>
        )}
      </form>
    </div>
  );
};

export default Signup;

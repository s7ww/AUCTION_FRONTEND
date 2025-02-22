import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signin() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSignin = async (e) => {
    e.preventDefault();
    setError("");

    if (form.username !== "testuser" || form.password !== "password123") {
      setError("Invalid username or password.");
      return;
    }

    try {
      setLoading(true);

      // Simulating a fake API request delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Simulating successful login with a fake token
      localStorage.setItem("authToken", "fake_token_12345");
      alert("Signin successful!");
      navigate("/dashboard");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Signin</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSignin}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? "Signing in..." : "Signin"}
        </button>
      </form>
    </div>
  );
}

export default Signin;

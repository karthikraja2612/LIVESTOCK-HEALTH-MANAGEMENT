import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post("http://127.0.0.1:8000/login", { email, password });
      console.log(response.data);
      alert("Login successful!");
      onLogin();  // Call onLogin to set isLoggedIn to true
      navigate("/dashboard");  // Navigate to dashboard
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          setError("Invalid email format. Please check your email address.");
        } else if (error.response.status === 404) {
          setError("User not found. Please register first.");
        } else if (error.response.status === 401) {
          setError("Incorrect password. Please try again.");
        } else {
          setError("Something went wrong. Please try again.");
        }
      } else {
        setError("Network error. Please try again later.");
      }
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="form-group">
          <input type="email" className="form-control" placeholder="Email" name="email" required />
        </div>
        <div className="form-group">
          <input
            type={showPassword ? "text" : "password"}
            className="form-control"
            placeholder="Password"
            name="password"
            required
          />
          <span
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </span>
        </div>
        <button type="submit" className="btn-primary">Login</button>
        <button type="button" className="btn-secondary" onClick={() => navigate("/register")}>Register</button>
        {error && <div className="alert">{error}</div>}
      </form>
    </div>
  );
};

export default Login;

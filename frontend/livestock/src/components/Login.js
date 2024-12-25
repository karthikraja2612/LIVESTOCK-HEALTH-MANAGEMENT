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
      onLogin();
      navigate("/dashboard");
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
      <div className="login-left">
        <h1>WELCOME BACK</h1>
        <p>Welcome back! Please enter your details.</p>
        <form className="login-form" onSubmit={handleLogin}>
          <div className="form-group">
            <div className="text">
              Email
            </div>
            <input
              type="email"
              className="form-control"
              placeholder="Enter your email"
              name="email"
              required
            />
          </div>
          <div className="text1">
              Password
          </div>
          <div className="form-group">
            <input
              type={showPassword ? "text" : "password"}
              className="form-control"
              placeholder="Enter your password"
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
          <button type="submit" className="btn-primary">Sign in</button>
        </form>
        <p className="register-link">
          Don't have an account? <span onClick={() => navigate("/register")}>Sign up for free!</span>
        </p>
        {error && <div className="alert">{error}</div>}
      </div>
      <div className="login-right">
        <img
          src="https://connected-vet.com/wp-content/uploads/2023/10/iclassifier.png" // Replace with your actual image path
          alt="Livestock management"
          className="login-image"
        />
      </div>
    </div>
  );
};

export default Login;

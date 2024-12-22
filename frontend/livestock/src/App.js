import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Dashboard from "./components/Dashboard";
import AnimalPage from "./components/AnimalPage";
import HealthRecordsPage from "./components/HealthRecordsPage";
import ReportsPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
import Register from "./components/Register";
import Login from "./components/Login";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // A function to handle successful login
  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <div className="app-container">
        {isLoggedIn && <Sidebar />}  {/* Show Sidebar only if logged in */}
        <div className="main-content">
          {isLoggedIn && <Header />}  {/* Show Header only if logged in */}
          
          <Routes>
            {/* Redirect to Login if not logged in */}
            <Route
              path="/"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
            />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login onLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />
            <Route
              path="/dashboard"
              element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
            />
            <Route
              path="/animals"
              element={isLoggedIn ? <AnimalPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/health-records"
              element={isLoggedIn ? <HealthRecordsPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/reports"
              element={isLoggedIn ? <ReportsPage /> : <Navigate to="/login" />}
            />
            <Route
              path="/settings"
              element={isLoggedIn ? <SettingsPage /> : <Navigate to="/login" />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

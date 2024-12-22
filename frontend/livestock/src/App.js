import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/header";
import Dashboard from "./components/Dashboard";
import AnimalPage from "./components/AnimalPage";
import HealthRecordsPage from "./components/HealthRecordsPage";
import ReportsPage from "./components/ReportsPage";
import SettingsPage from "./components/SettingsPage";
// import Profile from "./components/Profile";
import "./App.css"; 

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Header />
          <Routes>
            {/* <Route path="/profile" component={Profile} /> */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/animals" element={<AnimalPage />} />
            <Route path="/health-records" element={<HealthRecordsPage />} />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/settings" element={<SettingsPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

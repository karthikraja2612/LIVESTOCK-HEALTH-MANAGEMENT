import React from "react";
import { Search, Bell, User } from "lucide-react";
import "./header.css";

function Header() {
  return (
    <header className="header">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
        />
        <Search className="search-icon" />
      </div>
      <div className="header-right">
        <Bell className="icon" />
        <div className="profile">
          <User className="icon" />
          <span className="profile-text">Profile</span>
        </div>
      </div>
    </header>
  );
}

export default Header;

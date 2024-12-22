import React from "react";
import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import "./Notification.css";

function Notification() {
  return (
    <div className="notification">
      <Link to="/notifications" className="notification-link">
        <Bell className="icon" />
        <span className="notification-count">3</span> {/* Example count */}
      </Link>
    </div>
  );
}

export default Notification;

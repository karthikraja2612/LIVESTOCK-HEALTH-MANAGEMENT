import React from "react";
import "./AnimalCard.css";  

function AnimalCard({ name, type, status, born, nextCheckup, insemination }) {
  return (
    <div className="animal-card">
      <h2 className="animal-card-title">{name}</h2>
      <p className="animal-card-type">{type}</p>
      <p className="animal-card-info">
        <strong>Born:</strong> {born}
      </p>
      <p className="animal-card-info">
        <strong>Next Checkup:</strong> {nextCheckup}
      </p>
      {insemination && (
        <p className="animal-card-info">
          <strong>Insemination:</strong> {insemination}
        </p>
      )}
      <span
        className={`animal-card-status ${
          status === "healthy"
            ? "status-healthy"
            : "status-treatment"
        }`}
      >
        {status}
      </span>
      <div className="animal-card-buttons">
        <button className="btn btn-primary">View Details</button>
        <button className="btn btn-success">Schedule Checkup</button>
      </div>
    </div>
  );
}

export default AnimalCard;

import React from "react";
import AnimalCard from "./AnimalCard";
import "./Dashboard.css"; 

function Dashboard() {
  const animals = [
    {
      name: "Bella",
      type: "Holstein cattle",
      status: "healthy",
      born: "1/15/2022",
      nextCheckup: "4/15/2024",
      insemination: "5/1/2024",
    },
    {
      name: "Max",
      type: "Yorkshire pig",
      status: "treatment",
      born: "3/20/2023",
      nextCheckup: "3/25/2024",
    },
    {
      name: "Luna",
      type: "Merino sheep",
      status: "healthy",
      born: "6/10/2023",
      nextCheckup: "4/10/2024",
    },
  ];

  return (
    <div className="dashboard-container">
      <div className="animal-cards-container">
        {animals.map((animal, index) => (
          <AnimalCard key={index} {...animal} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

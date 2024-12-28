import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "./SettingsPage.css";

function SettingsPage() {
  const [healthAlerts, setHealthAlerts] = useState(true);
  const [diseaseOutbreaks, setDiseaseOutbreaks] = useState(true);
  const [trackWeight, setTrackWeight] = useState(true);
  const [trackTemperature, setTrackTemperature] = useState(false);
  const [dataSharing, setDataSharing] = useState(false);
  const [alertFrequency, setAlertFrequency] = useState("daily");

  // Load settings from localStorage
  useEffect(() => {
    const savedHealthAlerts = localStorage.getItem("healthAlerts") === "true";
    const savedDiseaseOutbreaks = localStorage.getItem("diseaseOutbreaks") === "true";
    const savedTrackWeight = localStorage.getItem("trackWeight") === "true";
    const savedTrackTemperature = localStorage.getItem("trackTemperature") === "true";
    const savedDataSharing = localStorage.getItem("dataSharing") === "true";
    const savedAlertFrequency = localStorage.getItem("alertFrequency") || "daily";

    setHealthAlerts(savedHealthAlerts);
    setDiseaseOutbreaks(savedDiseaseOutbreaks);
    setTrackWeight(savedTrackWeight);
    setTrackTemperature(savedTrackTemperature);
    setDataSharing(savedDataSharing);
    setAlertFrequency(savedAlertFrequency);
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("healthAlerts", healthAlerts);
    localStorage.setItem("diseaseOutbreaks", diseaseOutbreaks);
    localStorage.setItem("trackWeight", trackWeight);
    localStorage.setItem("trackTemperature", trackTemperature);
    localStorage.setItem("dataSharing", dataSharing);
    localStorage.setItem("alertFrequency", alertFrequency);
  }, [healthAlerts, diseaseOutbreaks, trackWeight, trackTemperature, dataSharing, alertFrequency]);

  // Data visualization (example for weight tracking)
  const chartData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
    datasets: [
      {
        label: "Animal Weight (kg)",
        data: [150, 160, 165, 170],
        fill: false,
        borderColor: "rgba(75, 192, 192, 1)",
        tension: 0.1,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  return (
    <div className="settings">
      <h2 className="settings-title">Livestock Health Management Settings</h2>

      {/* Health Alerts */}
      <div className="setting-option">
        <label htmlFor="healthAlerts" className="setting-label">Health Alerts</label>
        <div className="switch">
          <input
            type="checkbox"
            id="healthAlerts"
            checked={healthAlerts}
            onChange={() => setHealthAlerts(!healthAlerts)}
          />
          <span className="slider"></span>
        </div>
      </div>

      {/* Disease Outbreak Notifications */}
      <div className="setting-option">
        <label htmlFor="diseaseOutbreaks" className="setting-label">Disease Outbreaks Notifications</label>
        <div className="switch">
          <input
            type="checkbox"
            id="diseaseOutbreaks"
            checked={diseaseOutbreaks}
            onChange={() => setDiseaseOutbreaks(!diseaseOutbreaks)}
          />
          <span className="slider"></span>
        </div>
      </div>

      {/* Track Weight */}
      <div className="setting-option">
        <label htmlFor="trackWeight" className="setting-label">Track Weight</label>
        <div className="switch">
          <input
            type="checkbox"
            id="trackWeight"
            checked={trackWeight}
            onChange={() => setTrackWeight(!trackWeight)}
          />
          <span className="slider"></span>
        </div>
      </div>

      {/* Track Temperature */}
      <div className="setting-option">
        <label htmlFor="trackTemperature" className="setting-label">Track Temperature</label>
        <div className="switch">
          <input
            type="checkbox"
            id="trackTemperature"
            checked={trackTemperature}
            onChange={() => setTrackTemperature(!trackTemperature)}
          />
          <span className="slider"></span>
        </div>
      </div>

      {/* Data Sharing with Veterinarians */}
      <div className="setting-option">
        <label htmlFor="dataSharing" className="setting-label">Data Sharing with Veterinarians</label>
        <div className="switch">
          <input
            type="checkbox"
            id="dataSharing"
            checked={dataSharing}
            onChange={() => setDataSharing(!dataSharing)}
          />
          <span className="slider"></span>
        </div>
      </div>

      {/* Alert Frequency */}
      <div className="setting-option">
        <label htmlFor="alertFrequency" className="setting-label">Alert Frequency</label>
        <select
          id="alertFrequency"
          value={alertFrequency}
          onChange={(e) => setAlertFrequency(e.target.value)}
          className="select"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Data Visualization: Weight Tracking */}
      {trackWeight && (
        <div className="chart-container">
          <h3>Animal Weight Tracking</h3>
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
}

export default SettingsPage;

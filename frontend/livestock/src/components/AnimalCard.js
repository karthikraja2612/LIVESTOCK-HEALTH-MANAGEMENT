import React, { useState } from "react";
import "./AnimalCard.css";

function AnimalCard({
  id,  // Animal unique id
  name,
  type,
  status,
  born,
  nextCheckup,
  insemination,
  onRemove,
  onSave,
  onScheduleCheckup,  // Function to schedule checkup
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedAnimal, setEditedAnimal] = useState({
    name,
    type,
    status,
    born,
    nextCheckup,
    insemination,
  });

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAnimal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Save the edited animal details
  const handleSave = () => {
    onSave(editedAnimal);  // Save the changes
    setIsEditing(false);    // Close the modal
  };

  // Toggle the editing mode
  const handleEdit = () => setIsEditing(true);

  // Handle Cancel (close modal)
  const handleCancel = () => setIsEditing(false);

  // Handle Remove
  const handleRemove = () => {
    onRemove(id);  // Call onRemove function with the 'id' to remove the specific card
  };

  // Handle Schedule Checkup
  const handleScheduleCheckup = () => {
    if (onScheduleCheckup) {
      onScheduleCheckup(id);  // Call onScheduleCheckup with the 'id'
    } else {
      alert("No scheduling function provided.");
    }
  };

  return (
    <div className="animal-card">
      {/* Header section with animal name and type */}
      <div className="animal-card-header">
        <h2 className="animal-card-title">{editedAnimal.name}</h2>
        <p className="animal-card-type">{editedAnimal.type}</p>
      </div>

      <div className="animal-card-details">
        {isEditing ? (
          // Form to edit animal details (Modal)
          <div className="edit-form-container show">
            <div className="edit-form">
              <button className="close" onClick={handleCancel}>&times;</button>
              <h3>Edit Animal Details</h3>

              {/* Input fields for editing animal details */}
              <div className="form-group">
                <label>Animal Name</label>
                <input
                  type="text"
                  name="name"
                  value={editedAnimal.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Type</label>
                <input
                  type="text"
                  name="type"
                  value={editedAnimal.type}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Status</label>
                <select
                  name="status"
                  value={editedAnimal.status}
                  onChange={handleChange}
                >
                  <option value="healthy">Healthy</option>
                  <option value="treatment">Treatment</option>
                  <option value="critical">Critical</option>
                </select>
              </div>
              <div className="form-group">
                <label>Date of Birth</label>
                <input
                  type="date"
                  name="born"
                  value={editedAnimal.born}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Next Checkup</label>
                <input
                  type="date"
                  name="nextCheckup"
                  value={editedAnimal.nextCheckup}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Insemination Date (optional)</label>
                <input
                  type="date"
                  name="insemination"
                  value={editedAnimal.insemination}
                  onChange={handleChange}
                />
              </div>

              {/* Form actions: Save and Cancel */}
              <div className="form-actions">
                <button className="btn save-btn" onClick={handleSave}>
                  Save
                </button>
                <button
                  className="btn cancel-btn"
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Display animal details if not editing
          <>
            <div className="info-row">
              <p className="info-label">Status:</p>
              <p className={`status-${status} info-value`}>{status}</p>
            </div>
            <div className="info-row">
              <p className="info-label">Born:</p>
              <p className="info-value">{born}</p>
            </div>
            <div className="info-row">
              <p className="info-label">Next Checkup:</p>
              <p className="info-value">{nextCheckup}</p>
            </div>
            <div className="info-row">
              <p className="info-label">Insemination Date:</p>
              <p className="info-value">
                {insemination || "Not Available"}
              </p>
            </div>

            {/* Buttons for editing, removing, or scheduling checkup */}
            <div className="animal-card-buttons">
              <button className="btn btn-primary" onClick={handleEdit}>
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={handleRemove}  // Call remove function with 'id'
              >
                Remove
              </button>
              <button
                className="btn btn-info"
                onClick={handleScheduleCheckup}  // Passing 'id' for scheduling checkup
              >
                Schedule Checkup
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default AnimalCard;

/* eslint-disable react/prop-types */
import { useState } from "react";

function Education(props) {
  // Define state variables for form fields, errors, and editing mode
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [studyDate, setStudyDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!schoolName.trim()) {
      newErrors.schoolName = "School Name is required";
    }

    if (!studyTitle.trim()) {
      newErrors.studyTitle = "Study Title is required";
    }

    if (!studyDate.trim()) {
      newErrors.studyDate = "Study Date is required";
    }

    setErrors(newErrors);

    // Return true if there are no errors, indicating the form is valid
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form
    if (!validateForm()) {
      // If there are errors, don't proceed with submission
      return;
    }

    // TODO: Submit the form data, store it in state, or send it to a parent component

    // Exit editing mode after submission
    setIsEditing(false);
  };

  return (
    <div className="education-section">
      <h2>Educational Experience</h2>

      {isEditing ? (
        // Render form inputs in editing mode
        <form onSubmit={handleSubmit}>
          <div className="editSchoolName">
            <label>
              School Name:
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
              />
            </label>
            {errors.schoolName && (
              <span className="error">{errors.schoolName}</span>
            )}
          </div>
          <div className="editStudyTitle">
            <label>
              Study Title:
              <input
                type="text"
                value={studyTitle}
                onChange={(e) => setStudyTitle(e.target.value)}
              />
            </label>
            {errors.studyTitle && (
              <span className="error">{errors.studyTitle}</span>
            )}
          </div>
          <div className="editStudyDate">
            <label>
              Study Date:
              <input
                type="text"
                value={studyDate}
                onChange={(e) => setStudyDate(e.target.value)}
              />
            </label>
            {errors.studyDate && (
              <span className="error">{errors.studyDate}</span>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        // Render displayed information in view mode
        <div className="education-info">
          <p>
            School Name:{" "}
            {schoolName
              ? schoolName
              : props.name
              ? props.name
              : "Edit to add your school name"}
          </p>
          <p>
            Study Title:{" "}
            {studyTitle
              ? studyTitle
              : props.title
              ? props.title
              : "Edit to add your study title"}
          </p>
          <p>
            Study Date:{" "}
            {studyDate
              ? studyDate
              : props.date
              ? props.date
              : "Edit to add your study date"}
          </p>
          <button className="btn eduButton" onClick={() => setIsEditing(true)}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Education;

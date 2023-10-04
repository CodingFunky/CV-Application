/* eslint-disable react/prop-types */
import { useState } from "react";

function Experience(props) {
  // Define state variables for form fields, errors, and editing mode
  const [responsiblities, setResponsiblities] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!responsiblities.trim()) {
      newErrors.responsiblities = "Company name is required";
    }

    if (!jobTitle.trim()) {
      newErrors.jobTitle = "Title is required";
    }

    if (!startDate.trim()) {
      newErrors.startDate = "Start date is required";
    }

    if (!endDate.trim()) {
      newErrors.startDate = "End date is required";
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
      {isEditing ? (
        // Render form inputs in editing mode
        <form onSubmit={handleSubmit}>
          <div className="editCompanyName">
            <label>
              School Name:
              <input
                type="text"
                value={responsiblities}
                onChange={(e) => setResponsiblities(e.target.value)}
              />
            </label>
            {errors.companyName && (
              <span className="error">{errors.companyName}</span>
            )}
          </div>
          <div className="editJobTitle">
            <label>
              Study Title:
              <input
                type="text"
                value={jobTitle}
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </label>
            {errors.jobTitle && (
              <span className="error">{errors.jobTitle}</span>
            )}
          </div>
          <div className="editStartDate">
            <label>
              Start Date:
              <input
                type="text"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
              />
            </label>
            {errors.startDate && (
              <span className="error">{errors.startDate}</span>
            )}
          </div>
          <div className="editEndDate">
            <label>
              End Date:
              <input
                type="text"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
              />
            </label>
            {errors.endDate && <span className="error">{errors.endDate}</span>}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        // Render displayed information in view mode
        <div className="education-info">
          <p>
            Job Title:{" "}
            {jobTitle
              ? jobTitle
              : props.title
              ? props.title
              : "Edit to add your job title"}
          </p>
          <p>
            Responsiblities:{" "}
            {responsiblities
              ? responsiblities
              : props.responsiblities
              ? props.responsiblities
              : "Edit to add your res"}
          </p>
          <p>
            Start Date:{" "}
            {startDate
              ? startDate
              : props.start
              ? props.start
              : "Edit to add your start date"}
          </p>
          <p>
            End Date:{" "}
            {endDate
              ? endDate
              : props.end
              ? props.end
              : "Edit to add your end date"}
          </p>
          <button
            className="btn editBtn eduButton"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </div>
      )}
    </div>
  );
}

export default Experience;

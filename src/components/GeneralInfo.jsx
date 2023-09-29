import { useState } from "react";
import "./GeneralInfo.css";

function GeneralInfo() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [errors, setErrors] = useState({});

  // Validate the form fields
  const validateForm = () => {
    const newErrors = {};

    if (!name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
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
    <div className="generalInfoSection">
      {isEditing ? (
        <form className="infoForm" onSubmit={handleSubmit}>
          <div className="editName">
            <label>
              Name:
              <input
                type="text"
                placeholder="Your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="editEmail">
            <label>
              Email:
              <input
                type="text"
                placeholder="Your email..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="editPhone">
            <label>
              Phone:
              <input
                type="text"
                placeholder="Your phone number..."
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </label>
          </div>
          <button className="submitButton infoSubmitButton" type="submit">
            Submit
          </button>
        </form>
      ) : (
        <>
          <div className="infoCard">
            <div className="generalInfo">
              <h1 className="name">Ryan Luna</h1>
              <p className="email">Ryan.namingishard@gmail.com</p>
              <p className="phone">555-555-5555</p>
            </div>
          </div>
          <button
            className="btn infoEditButton"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export default GeneralInfo;

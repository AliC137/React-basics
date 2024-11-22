import React, { useState } from "react";
import "./FormValidation.css";

function FormValidation() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name is required.";
    if (!form.lastName) newErrors.lastName = "Last name is required.";
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Invalid email address.";
    if (!form.password) newErrors.password = "Password is required.";
    if (form.password !== form.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";
    if (!form.dob) newErrors.dob = "Date of birth is required.";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      alert("Form submitted successfully!");
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h2>Registration Form</h2>
      <div>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
      </div>
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </div>
      <div>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
      </div>
      <div>
        <input
          type="date"
          name="dob"
          value={form.dob}
          onChange={handleChange}
        />
        {errors.dob && <p className="error">{errors.dob}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormValidation;

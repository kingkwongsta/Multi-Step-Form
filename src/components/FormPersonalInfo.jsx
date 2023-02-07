import { useState } from "react";
import Button from "@mui/material/Button";

export default function FormPersonalInfo({
  name,
  email,
  phone,
  handleName,
  handleEmail,
  handlePhone,
  handleNext,
}) {
  function handleSubmit(event) {
    event.preventDefault();
    handleNext();
    console.log(name, email, phone);
  }

  return (
    <>
      <div className="form-personal">
        <h2 className="form-title">Personal info</h2>
        <h4 className="form-subtitle">
          Please provide your name, email address, and phone number.
        </h4>
        <form onSubmit={handleSubmit} className="form-personal-section">
          <p className="form-personal-form-text">Name</p>
          <input
            type="text"
            value={name}
            onChange={handleName}
            className="form-personal-input"
          />
          <p className="form-personal-form-text">Email Address</p>
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            className="form-personal-input"
          />
          <p className="form-personal-form-text">Phone Number</p>
          <input
            type="tel"
            value={phone}
            onChange={handlePhone}
            className="form-personal-input"
          />
        </form>
      </div>
    </>
  );
}

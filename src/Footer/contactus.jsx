import React, { useState } from "react";
import "./contactus.css";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submit
    console.log("Form submitted:", formData);
    // Reset the form
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div id="ContactUs">
      <div className="contact-us small-form">
        <div className="container3">
          <h2 className="text-center1">Connect with us</h2>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group mx-3">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group mx-3">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group mx-3">
              <label htmlFor="Phone">Phone Number</label>
              <input
                type="number"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="small-input"
              />
            </div>
            <div className="form-group mx-3">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="small-input"
              ></textarea>
            </div>
            <div className="mx-3">
              <button type="submit" className="btn-submit small-btn">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

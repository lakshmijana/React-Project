import React, { useState } from 'react';
import "./contactus.css"

function Contactus() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your table booking is successful!');
    // Here you can handle the form data further, like sending it to an API.
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      people: 1
    });
  };

  return (
    <div className="App">
      <section className="contact-us">
        <div className="container">
          <h1>Book a Table at TastyBites</h1>
          <form onSubmit={handleSubmit} id="booking-form">
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="time">Time</label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="people">Number of People</label>
              <input
                type="number"
                id="people"
                name="people"
                min="1"
                value={formData.people}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit">Book Table</button>
          </form>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>&copy; 2024 TastyBites. All rights reserved.</p>
          <p>115/1 BanjaraHills,Hyderabad 500032 India
          </p>
          <p>Email: contact@tastybites.com | Phone: +123-456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default Contactus;

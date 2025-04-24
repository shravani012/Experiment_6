// src/App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [bookings, setBookings] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    from: "",
    to: "",
    departureDate: "",
    arrivalDate: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsert = () => {
    if (bookings.find((b) => b.phone === formData.phone)) {
      alert("Phone number already exists!");
      return;
    }
    setBookings([...bookings, formData]);
    clearForm();
  };

  const handleUpdate = () => {
    const updated = bookings.map((b) =>
      b.phone === formData.phone ? { ...formData } : b
    );
    setBookings(updated);
    clearForm();
  };

  const handleDelete = (phone) => {
    const filtered = bookings.filter((b) => b.phone !== phone);
    setBookings(filtered);
  };

  const clearForm = () => {
    setFormData({
      name: "",
      from: "",
      to: "",
      departureDate: "",
      arrivalDate: "",
      phone: "",
      email: "",
    });
  };

  return (
    <div className="App">
      <h2>🛫 Flight Booking Management</h2>
      <input name="name" placeholder="Passenger Name" value={formData.name} onChange={handleChange} />
      <input name="from" placeholder="From" value={formData.from} onChange={handleChange} />
      <input name="to" placeholder="To" value={formData.to} onChange={handleChange} />
      <input type="date" name="departureDate" value={formData.departureDate} onChange={handleChange} />
      <input type="date" name="arrivalDate" value={formData.arrivalDate} onChange={handleChange} />
      <input name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
      <input name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} />

      <div className="buttons">
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <h3>Flight Bookings</h3>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>From</th>
            <th>To</th>
            <th>Departure</th>
            <th>Arrival</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((b, index) => (
            <tr key={index}>
              <td>{b.name}</td>
              <td>{b.from}</td>
              <td>{b.to}</td>
              <td>{b.departureDate}</td>
              <td>{b.arrivalDate}</td>
              <td>{b.phone}</td>
              <td>{b.email}</td>
              <td>
                <button onClick={() => handleDelete(b.phone)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;


// src/App.js

import React, { useState } from "react";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    rollNo: "",
    password: "",
    confirmPassword: "",
    contact: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsert = () => {
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (students.some((student) => student.rollNo === formData.rollNo)) {
      alert("Roll No already exists!");
      return;
    }
    setStudents((prev) => [...prev, formData]);
    resetForm();
  };

  const handleUpdate = () => {
    const updatedStudents = students.map((student) =>
      student.rollNo === formData.rollNo
        ? { ...student, contact: formData.contact }
        : student
    );
    setStudents(updatedStudents);
    resetForm();
  };

  const handleDelete = () => {
    const updatedStudents = students.filter(
      (student) => student.rollNo !== formData.rollNo
    );
    setStudents(updatedStudents);
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      rollNo: "",
      password: "",
      confirmPassword: "",
      contact: "",
    });
  };

  return (
    <div className="App">
      <h2>🎓 Student Registration System</h2>
      <div className="form">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="rollNo"
          placeholder="Roll No/ID"
          value={formData.rollNo}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <input
          type="text"
          name="contact"
          placeholder="Contact Number"
          value={formData.contact}
          onChange={handleChange}
        />
        <div className="buttons">
          <button onClick={handleInsert}>Insert</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <h3>📋 Student Records</h3>
      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Contact</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, index) => (
            <tr key={index}>
              <td>{s.rollNo}</td>
              <td>{s.firstName}</td>
              <td>{s.lastName}</td>
              <td>{s.contact}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

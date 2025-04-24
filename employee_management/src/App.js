import React, { useState } from "react";
import "./App.css";

function App() {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    id: "",
    department: "",
    phone: "",
    joiningDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsert = () => {
    if (employees.some((emp) => emp.id === formData.id)) {
      alert("Employee ID already exists!");
      return;
    }
    setEmployees([...employees, formData]);
    clearForm();
  };

  const handleUpdate = () => {
    const updated = employees.map((emp) =>
      emp.id === formData.id ? formData : emp
    );
    setEmployees(updated);
    clearForm();
  };

  const handleDelete = (id) => {
    const filtered = employees.filter((emp) => emp.id !== id);
    setEmployees(filtered);
  };

  const clearForm = () => {
    setFormData({
      name: "",
      id: "",
      department: "",
      phone: "",
      joiningDate: "",
    });
  };

  return (
    <div className="App">
      <h2>👔 Employee Management System</h2>

      <input
        name="name"
        placeholder="Employee Name"
        value={formData.name}
        onChange={handleChange}
      />
      <input
        name="id"
        placeholder="Employee ID"
        value={formData.id}
        onChange={handleChange}
      />
      <input
        name="department"
        placeholder="Department"
        value={formData.department}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        value={formData.phone}
        onChange={handleChange}
      />
      <input
        name="joiningDate"
        type="date"
        value={formData.joiningDate}
        onChange={handleChange}
      />

      <div className="buttons">
        <button onClick={handleInsert}>Insert</button>
        <button onClick={handleUpdate}>Update</button>
        <button onClick={handleDelete}>Delete</button>
      </div>

      <h3>Employee Records</h3>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Dept</th>
            <th>Phone</th>
            <th>Joining</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, idx) => (
            <tr key={idx}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.department}</td>
              <td>{emp.phone}</td>
              <td>{emp.joiningDate}</td>
              <td>
                <button onClick={() => handleDelete(emp.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

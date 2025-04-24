import React, { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    bookName: "",
    isbn: "",
    title: "",
    author: "",
    publisher: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInsert = () => {
    const exists = books.find((book) => book.isbn === formData.isbn);
    if (exists) {
      alert("Book with this ISBN already exists!");
      return;
    }
    setBooks([...books, formData]);
    clearForm();
  };

  const handleUpdate = () => {
    const updated = books.map((book) =>
      book.isbn === formData.isbn ? formData : book
    );
    setBooks(updated);
    clearForm();
  };

  const handleDelete = (isbn) => {
    const filtered = books.filter((book) => book.isbn !== isbn);
    setBooks(filtered);
  };

  const clearForm = () => {
    setFormData({
      bookName: "",
      isbn: "",
      title: "",
      author: "",
      publisher: "",
    });
  };

  return (
    <div className="App">
      <h2>📚 Library Management System</h2>
      <div className="form">
        <input
          type="text"
          name="bookName"
          placeholder="Book Name"
          value={formData.bookName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN No"
          value={formData.isbn}
          onChange={handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type="text"
          name="author"
          placeholder="Author Name"
          value={formData.author}
          onChange={handleChange}
        />
        <input
          type="text"
          name="publisher"
          placeholder="Publisher Name"
          value={formData.publisher}
          onChange={handleChange}
        />
        <div className="buttons">
          <button onClick={handleInsert}>Insert</button>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>

      <h3>📋 Book Records</h3>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Book Name</th>
            <th>Title</th>
            <th>Author</th>
            <th>Publisher</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, idx) => (
            <tr key={idx}>
              <td>{book.isbn}</td>
              <td>{book.bookName}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.publisher}</td>
              <td>
                <button onClick={() => handleDelete(book.isbn)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

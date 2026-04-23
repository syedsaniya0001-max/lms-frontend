import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentBooks = () => {
  const navigate = useNavigate();
  // --- ADDED: State for real books ---
  const [books, setBooks] = useState([]);

  // --- ADDED: Fetch data from your backend ---
  const fetchBooks = async () => {
    try {
      const res = await axios.get('https://lms-backend-01-yn35.onrender.com/api/books');
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleRequest = async (bookName) => {
    // --- KEY CHANGE: Get name from login storage ---
    const loggedInName = localStorage.getItem('studentName'); 
    
    // Fallback: If no name in storage, ask for it (useful for testing)
    const studentName = loggedInName || prompt("Please enter your name for the request:");
    
    if (!studentName) return;

    try {
        await axios.post('https://lms-backend-01-yn35.onrender.com/api/requests', {
            studentName: studentName,
            bookName: bookName,
            requestDate: new Date().toLocaleDateString(),
            status: "Pending"
        });
        alert(`Success! Request for "${bookName}" sent under name: ${studentName}`);
    } catch (err) {
        console.error(err);
        alert("Failed to send request. Check your backend!");
    }
};

  const styles = `
    .books-page { font-family: Arial, sans-serif; background: #1e40af; min-height: 100vh; padding: 0; margin: 0; }
    header { background-color: black; color: white; text-align: center; padding: 20px; border: 1px solid black; margin-bottom: 20px; font-size: 40px; }
    .container { display: flex; flex-wrap: wrap; justify-content: space-around; padding: 10px; gap: 25px; }
    .card { background: white; width: 350px; margin: 10px; padding: 15px; text-align: center; border: 1px solid #ccc; border-radius: 10px; transition: 0.5s; box-sizing: border-box; }
    .card:hover { background-color: #e0e0e0; transform: scale(1.07); }
    .card img { width: 100px; height: 150px; margin-bottom: 10px; border-radius: 4px; object-fit: cover; }
    .card h4 { margin: 10px 0; color: #333; }
    .card p { color: #666; font-size: 14px; margin: 5px 0; }
    .card button { padding: 8px 15px; background-color: #1e40af; color: white; border: none; cursor: pointer; border-radius: 4px; transition: 0.5s; }
    .card button:hover { background-color: #1e974f; transform: scale(1.05); }
    .not-available { color: red; font-weight: bold; margin-top: 10px; }
    .back-btn { background-color: black; color: white; height: 45px; width: 100px; margin: 0 0 20px 20px; font-size: 15px; border: none; cursor: pointer; border-radius: 5px; transition: 0.3s; }
    .back-btn:hover { opacity: 0.8; }
  `;

  return (
    <div className="books-page">
      <style>{styles}</style>
      <header>Books</header>
      
      <div className="container">
        {books.map((book, index) => (
          <div key={index} className="card">
            {/* Uses the cover from your DB */}
            <img src={book.cover} alt={book.name} />
            <h4>{book.name}</h4>
            <p>Author: {book.author}</p>
            <p>Code: {book.code}</p>
            
            {/* Logic check: status is "Available" from your Librarian logic */}
            {book.status === "Available" ? (
              <button onClick={() => handleRequest(book.name)}>Request</button>
            ) : (
              <p className="not-available">Not Available</p>
            )}
          </div>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate('/student-dashboard')}>
        Back
      </button>
    </div>
  );
};

export default StudentBooks;
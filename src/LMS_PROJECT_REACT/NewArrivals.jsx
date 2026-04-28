import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { API_BASE_URL } from '../api/config';

const NewArrivals = () => {
  const [newBooks, setNewBooks] = useState([]);

  const fetchNewArrivals = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/books`);
      console.log("All books fetched:", res.data);
      
      // CRITICAL FIX: Check if isNewArrival is truly (boolean or string "true")
      const filtered = res.data.filter(book => {
        const isNew = book.isNewArrival === true || String(book.isNewArrival) === "true";
        console.log(`Book "${book.name}": isNewArrival=${book.isNewArrival} (type: ${typeof book.isNewArrival}) -> filter: ${isNew}`);
        return isNew;
      });
      
      console.log("Filtered new arrivals:", filtered);
      setNewBooks(filtered);
    } catch (err) {
      console.error("Error fetching arrivals:", err);
    }
  };

  useEffect(() => {
    fetchNewArrivals();
    const interval = setInterval(fetchNewArrivals, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="new-arrivals-page">
      <style>{`
        .new-arrivals-page { background-color: #1e40af; min-height: 100vh; padding: 20px; font-family: sans-serif; color: white; }
        .header-row { display: flex; justify-content: space-between; align-items: center; margin-bottom: 30px; border-bottom: 2px solid white; padding-bottom: 10px; }
        .back-btn { text-decoration: none; color: antiquewhite; font-weight: bold; border: 1px solid antiquewhite; padding: 5px 10px; border-radius: 5px; }
        h1 { text-align: center; color: antiquewhite; margin: 0; flex-grow: 1; }
        .arrivals-grid { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-top: 20px; }
        .book-card { background: white; color: #1e40af; padding: 15px; border-radius: 12px; width: 220px; text-align: center; box-shadow: 0 4px 15px rgba(0,0,0,0.2); }
        .book-card img { width: 100%; height: 250px; object-fit: cover; border-radius: 8px; margin-bottom: 10px; }
      `}</style>

      <div className="header-row">
        <Link to="/" className="back-btn">← Back</Link>
        <h1>Newly Arrived Books</h1>
        <div style={{ width: '80px' }}></div>
      </div>

      <div className="arrivals-grid">
        {newBooks.length > 0 ? (
          newBooks.map(book => (
            <div className="book-card" key={book._id}>
              <img src={book.cover} alt={book.name} />
              <p><strong>{book.name}</strong></p>
              <p style={{fontSize: '13px'}}>{book.author}</p>
              <span style={{fontSize: '11px', color: 'gray'}}>Added: {book.addedDate || "Recently"}</span>
            </div>
          ))
        ) : (
          <p>No new arrivals yet. Set them in Admin.</p>
        )}
      </div>
    </div>
  );
};

export default NewArrivals;
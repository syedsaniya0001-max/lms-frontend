import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const FacultyBooks = () => {
  const navigate = useNavigate();
  
  // 1. Change static data to State
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [tooltip, setTooltip] = useState({ visible: false, text: "", x: 0, y: 0 });
  const [popup, setPopup] = useState({ visible: false, text: "" });

  // 2. Fetch real data from the database
  const fetchBooks = async () => {
    try {
      const res = await axios.get('https://lms-backend-01-yn35.onrender.com/api/books');
      setBooks(res.data);
    } catch (err) {
      console.error("Error fetching library data:", err);
    }
  };
  const handleReserveRequest = async (book) => {
  const facultyName = localStorage.getItem('facultyName') || "Faculty Member";
  
  try {
    await axios.post('https://lms-backend-01-yn35.onrender.com/api/requests', {
      studentName: facultyName,
      bookName: book.name,
      requestDate: new Date().toLocaleDateString(),
      status: "Reserved" // This helps the librarian identify it's a reservation
    });
    setPopup({ 
      visible: true, 
      text: `Reservation successful! You will be notified when ${book.studentName} returns "${book.name}".` 
    });
  } catch (err) {
    alert("Failed to send reservation request.");
  }
};

  useEffect(() => {
    fetchBooks();
  }, []);

  // 3. Update Filtering to use the dynamic 'books' state
  const filteredBooks = books.filter(book => 
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // 4. Update handleBorrow to send a request (similar to students)
  const handleBorrowRequest = async (book) => {
    const facultyName = localStorage.getItem('facultyName') || "Faculty Member";
    
    try {
      await axios.post('https://lms-backend-01-yn35.onrender.com/api/requests', {
        studentName: facultyName, // Using the same schema field for simplicity
        bookName: book.name,
        requestDate: new Date().toLocaleDateString(),
        status: "Pending"
      });
      setPopup({ visible: true, text: `Request sent for: ${book.name}. Please collect from the librarian.` });
    } catch (err) {
      alert("Failed to send request.");
    }
  };

  const handleMouseMove = (e) => {
    setTooltip(prev => ({ ...prev, x: e.pageX + 10, y: e.pageY + 10 }));
  };

  const showTooltip = (text) => setTooltip(prev => ({ ...prev, visible: true, text }));
  const hideTooltip = () => setTooltip(prev => ({ ...prev, visible: false }));

  const styles = {
    page: { fontFamily: 'Arial, sans-serif', margin: 0, background: '#1e40af', minHeight: '100vh', paddingBottom: '50px' },
    title: { textAlign: 'center', padding: '20px', color: 'white', margin: 0 },
    searchBox: { textAlign: 'center', marginBottom: '20px' },
    input: { width: '60%', maxWidth: '400px', padding: '12px 20px', borderRadius: '25px', border: '1px solid #ccc', fontSize: '16px', outline: 'none' },
    container: { display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', padding: '20px' },
    bookCard: { background: 'aliceblue', width: '250px', padding: '15px', borderRadius: '10px', textAlign: 'center', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', transition: '0.3s' },
    cardImage: { width: '100%', height: '180px', objectFit: 'cover', borderRadius: '5px' },
    statusRed: { color: 'red', fontWeight: 'bold', margin: '10px 0' },
    statusGreen: { color: 'green', fontWeight: 'bold', margin: '10px 0' },
    location: { color: '#1e40af', cursor: 'pointer', margin: '10px 0', textDecoration: 'underline' },
    btn: { padding: '8px 15px', border: 'none', borderRadius: '5px', margin: '5px', cursor: 'pointer', fontWeight: 'bold' },
    borrowBtn: { background: '#1e40af', color: 'white' },
    reserveBtn: { background: 'gray', color: 'white' },
    tooltip: { position: 'absolute', background: 'rgba(0, 0, 0, 0.85)', color: 'white', padding: '8px 12px', borderRadius: '8px', display: tooltip.visible ? 'block' : 'none', left: `${tooltip.x}px`, top: `${tooltip.y}px`, pointerEvents: 'none', zIndex: 1000 },
    popupOverlay: { position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0, 0, 0, 0.5)', display: popup.visible ? 'flex' : 'none', justifyContent: 'center', alignItems: 'center', zIndex: 2000 },
    popupContent: { background: 'white', padding: '30px', borderRadius: '10px', textAlign: 'center' },
    backLink: { display: 'block', textAlign: 'center', color: 'white', marginTop: '20px', fontSize: '18px', cursor: 'pointer' }
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>📚 FACULTY LIBRARY RESOURCE</h1>

      <div style={styles.searchBox}>
        <input
          type="text"
          placeholder="Search by book name or author..."
          style={styles.input}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div style={styles.container}>
        {filteredBooks.map((book) => (
          <div key={book._id} style={styles.bookCard}>
            {/* 5. Use the cover image from the DB */}
            <img src={book.cover} alt={book.name} style={styles.cardImage} />
            <h3 style={{ margin: '10px 0' }}>{book.name}</h3>
            <p>Author: {book.author}</p>
            <p>Code: {book.code}</p>
            
            {/* 6. Availability logic based on DB status */}
            {book.status === "Available" ? (
              <>
                <p style={styles.statusGreen}>✅ Available</p>
                <p 
                  style={styles.location} 
                  onMouseEnter={() => showTooltip(`Find at: Floor ${Math.floor(Math.random()*3)+1}, Rack ${book.code.charAt(0)}`)}
                  onMouseLeave={hideTooltip}
                  onMouseMove={handleMouseMove}
                >
                  📍 View Location
                </p>
                <button 
                  style={{...styles.btn, ...styles.borrowBtn}}
                  onClick={() => handleBorrowRequest(book)}
                >
                  Request Borrow
                </button>
              </>
            ) : (
              <>
                <p style={styles.statusRed}>❌ Issued to: {book.studentName}</p>
                <p style={{fontSize: '12px'}}>Due Date: {book.dueDate}</p>
                <button 
  style={{...styles.btn, ...styles.reserveBtn}}
  onClick={() => handleReserveRequest(book)}
>
  Reserve
</button>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Tooltip */}
      <div style={styles.tooltip}>{tooltip.text}</div>

      {/* Popup */}
      <div style={styles.popupOverlay}>
        <div style={styles.popupContent}>
          <p style={{ fontSize: '16px' }}>{popup.text}</p>
          <button 
            style={{...styles.btn, ...styles.borrowBtn, marginTop: '10px'}}
            onClick={() => setPopup({ visible: false, text: "" })}
          >
            OK
          </button>
        </div>
      </div>

      <div style={styles.backLink} onClick={() => navigate('/faculty-dashboard')}>
        Go Back to Dashboard
      </div>
    </div>
  );
};

export default FacultyBooks;
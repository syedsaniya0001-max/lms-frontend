import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentReturn = () => {
  const navigate = useNavigate();
  
  // Static Data (In a real app, this would come from a database/API)
  const [books] = useState([
    { id: 1, name: "Database Management Systems", author: "R. Elmasri", date: "2026-03-12T10:30", img: "https://covers.openlibrary.org/b/id/8168936-L.jpg" },
    { id: 2, name: "Computer Networks", author: "Andrew Tanenbaum", date: "2026-03-14T13:15", img: "https://covers.openlibrary.org/b/id/8228692-L.jpg" },
    { id: 3, name: "Java Programming", author: "Herbert Schildt", date: "2026-03-18T09:45", img: "https://covers.openlibrary.org/b/id/8231990-L.jpg" },
    { id: 4, name: "Operating System Concepts", author: "Silberschatz", date: "2026-03-20T11:00", img: "https://covers.openlibrary.org/b/id/8082210-L.jpg" },
    { id: 5, name: "Artificial Intelligence", author: "Stuart Russell", date: "2026-03-21T14:00", img: "https://covers.openlibrary.org/b/id/8231855-L.jpg" },
    { id: 6, name: "Machine Learning", author: "Tom M. Mitchell", date: "2026-03-22T09:30", img: "https://covers.openlibrary.org/b/id/8235030-S.jpg" },
    { id: 7, name: "Deep Learning", author: "Ian Goodfellow", date: "2026-03-25T15:00", img: "https://covers.openlibrary.org/b/id/8231853-S.jpg" },
    { id: 8, name: "Data Science Foundations", author: "Avrim Blum", date: "2026-03-30T16:00", img: "https://covers.openlibrary.org/b/id/8231996-S.jpg" }
  ]);

  const [searchTerm, setSearchTerm] = useState("");

  const calculateFine = (returnDate) => {
    const finePerDay = 5;
    const today = new Date();
    const returned = new Date(returnDate);
    const diffTime = today - returned;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays * finePerDay : 0;
  };

  const filteredBooks = books.filter(book => 
    book.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const styles = `
    .return-body { font-family: 'Segoe UI', sans-serif; background-color: #1e40af; min-height: 100vh; padding: 40px 0; margin: 0; }
    .container { width: 95%; max-width: 1200px; margin: auto; background: aliceblue; border-radius: 12px; box-shadow: 0 8px 20px rgba(0,0,0,0.2); padding: 30px; box-sizing: border-box; }
    .heading { text-align: center; font-size: 32px; font-weight: bold; margin-bottom: 30px; color: #333; border-bottom: 3px solid #1e40af; padding-bottom: 15px; }
    
    .search-section { display: flex; justify-content: center; margin-bottom: 40px; }
    .search-section input { width: 50%; padding: 12px 20px; border: 2px solid #1e40af; border-radius: 25px; font-size: 16px; outline: none; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }

    /* The Grid for 3 to 4 columns */
    .books-grid { 
      display: grid; 
      grid-template-columns: repeat(4, 1fr); /* Default 4 per row */
      gap: 30px; /* Space between rows and columns */
      justify-items: center; 
    }

    /* Adjust to 3 columns for smaller laptop screens */
    @media (max-width: 1100px) {
      .books-grid { grid-template-columns: repeat(3, 1fr); }
    }

    .book-card { 
      width: 100%; 
      max-width: 260px;
      background: #1e40af; 
      border-radius: 12px; 
      padding: 15px; 
      color: white; 
      transition: 0.3s; 
      box-shadow: 0 5px 15px rgba(0,0,0,0.3); 
      display: flex;
      flex-direction: column;
    }
    .book-card:hover { transform: translateY(-10px); background: #1a368f; }
    
    .book-img { width: 100%; height: 180px; border-radius: 8px; object-fit: cover; background: white; margin-bottom: 15px; }
    .book-info { flex-grow: 1; line-height: 1.5; font-size: 14px; }
    .fine { color: #facc15; font-weight: bold; font-size: 16px; display: block; margin-top: 10px; }
    
    .back-btn { 
      background-color: black; 
      color: white; 
      padding: 12px 30px; 
      font-size: 16px; 
      border-radius: 8px; 
      border: none; 
      cursor: pointer; 
      margin-top: 40px; 
      transition: 0.3s; 
    }
    .back-btn:hover { background: #333; transform: scale(1.05); }
  `;

  return (
    <div className="return-body">
      <style>{styles}</style>
      <div className="container">
        <h2 className="heading">Returned Books History</h2>

        <div className="search-section">
          <input 
            type="text" 
            placeholder="Search your return history..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="books-grid">
          {filteredBooks.map(book => (
            <div key={book.id} className="book-card">
              <img src={book.img} className="book-img" alt={book.name} />
              <div className="book-info">
                <strong>{book.name}</strong><br/>
                <small>By {book.author}</small><br/>
                <div style={{marginTop: '10px', fontSize: '12px', opacity: '0.9'}}>
                  Returned: {new Date(book.date).toLocaleDateString()}
                </div>
                <span className="fine">Fine Paid: ₹{calculateFine(book.date)}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{textAlign: 'center'}}>
          <button className="back-btn" onClick={() => navigate('/student-dashboard')}>
            ← Back to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentReturn;
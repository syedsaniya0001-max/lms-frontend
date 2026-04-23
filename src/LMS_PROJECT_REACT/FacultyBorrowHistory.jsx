import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyBorrowHistory = () => {
  const navigate = useNavigate();

  const historyData = [
    { title: "Data Structures", author: "Cormen", borrowDate: "10-03-2026", time: "10:00 AM", dueDate: "20-03-2026", img: "https://covers.openlibrary.org/b/id/240726-L.jpg" },
    { title: "Operating Systems", author: "Galvin", borrowDate: "12-03-2026", time: "11:30 AM", dueDate: "25-03-2026", img: "https://covers.openlibrary.org/b/id/8231856-L.jpg" },
    { title: "DBMS", author: "Korth", borrowDate: "01-03-2026", time: "09:15 AM", dueDate: "10-03-2026", img: "https://covers.openlibrary.org/b/id/8235083-L.jpg" },
    { title: "Computer Networks", author: "Tanenbaum", borrowDate: "05-03-2026", time: "02:00 PM", dueDate: "18-03-2026", img: "https://covers.openlibrary.org/b/id/8228691-L.jpg" },
    { title: "Python Programming", author: "Guido", borrowDate: "08-03-2026", time: "12:30 PM", dueDate: "22-03-2026", img: "https://covers.openlibrary.org/b/id/8234140-L.jpg" },
    { title: "Software Engineering", author: "Pressman", borrowDate: "14-03-2026", time: "01:45 PM", dueDate: "28-03-2026", img: "https://covers.openlibrary.org/b/id/8235116-L.jpg" },
    { title: "AI Basics", author: "Russell", borrowDate: "16-03-2026", time: "03:10 PM", dueDate: "30-03-2026", img: "https://covers.openlibrary.org/b/id/8234700-L.jpg" },
    { title: "Machine Learning", author: "Tom Mitchell", borrowDate: "18-03-2026", time: "10:50 AM", dueDate: "02-04-2026", img: "https://covers.openlibrary.org/b/id/8234765-L.jpg" },
  ];

  const styles = {
    pageContainer: {
      fontFamily: 'Arial, sans-serif',
      background: '#fff',
      margin: 0,
      padding: 0,
      minHeight: '100vh',
    },
    container: {
      border: '3px solid black',
      padding: '20px',
      backgroundColor: '#1e40af',
      minHeight: '100vh',
    },
    title: {
      textAlign: 'center',
      border: '2px solid black',
      padding: '10px',
      width: '350px',
      margin: '0 auto 30px',
      fontWeight: 'bold',
      backgroundColor: 'aliceblue',
      cursor: 'pointer',
      transition: '0.9s',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: '40px',
      justifyItems: 'center',
    },
    card: {
      border: '2px solid black',
      borderRadius: '20px',
      height: '350px',
      width: '250px',
      padding: '10px',
      textAlign: 'center',
      backgroundColor: 'aliceblue',
      transition: '0.3s',
    },
    bookPic: {
      border: '2px solid black',
      borderRadius: '15px',
      marginBottom: '10px',
      height: '150px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    },
    img: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
    },
    details: {
      fontSize: '14px',
      lineHeight: '2.4',
      color: '#333',
    },
    backBtn: {
      display: 'block',
      margin: '20px auto',
      padding: '10px 20px',
      backgroundColor: 'aliceblue',
      border: '2px solid black',
      borderRadius: '10px',
      cursor: 'pointer',
      fontWeight: 'bold'
    }
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.container}>
        <div 
          style={styles.title}
          onMouseEnter={(e) => e.target.style.transform = 'scale(1.80)'}
          onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
        >
          HISTORY OF BORROWED BOOKS
        </div>

        <div style={styles.grid}>
          {historyData.map((book, index) => (
            <div 
              key={index} 
              style={styles.card}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={styles.bookPic}>
                <img src={book.img} alt={book.title} style={styles.img} />
              </div>
              <div style={styles.details}>
                <strong>{book.title}</strong><br />
                {book.author}<br />
                {book.borrowDate}<br />
                {book.time}<br />
                <span style={{color: 'red'}}>Due: {book.dueDate}</span>
              </div>
            </div>
          ))}
        </div>

        <button style={styles.backBtn} onClick={() => navigate('/faculty-dashboard')}>
           BACK TO DASHBOARD
        </button>
      </div>
    </div>
  );
};

export default FacultyBorrowHistory;
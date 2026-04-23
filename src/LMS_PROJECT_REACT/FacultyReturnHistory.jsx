import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyReturnHistory = () => {
  const navigate = useNavigate();

  const returnedBooks = [
    { title: "Compiler design", author: "Author A", isbn: "1111111111", date: "20 Mar 2026", fine: "0", img: "https://th.bing.com/th/id/OIP.3mgjAWVsvm6sWjWI-9zQ6wHaJu?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "AI", author: "Author B", isbn: "2222222222", date: "21 Mar 2026", fine: "30", img: "https://tse2.mm.bing.net/th/id/OIP.uSBU8drverjjovCHJwUAAQHaGt?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "Python", author: "Author C", isbn: "3333333333", date: "22 Mar 2026", fine: "0", img: "https://tse1.mm.bing.net/th/id/OIP.7Zy0wWoFMnhyqbRaUVFk8QHaKN?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "AI&RP", author: "Author D", isbn: "4444444444", date: "23 Mar 2026", fine: "10", img: "https://tse1.mm.bing.net/th/id/OIP.45hR2phZTbyQMazfOP3KHQHaHZ?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "Java", author: "Author E", isbn: "5555555555", date: "24 Mar 2026", fine: "0", img: "https://tse4.mm.bing.net/th/id/OIP.5eL_Lax0A8LQwIQuhtsc9gHaKC?rs=1&pid=ImgDetMain&o=7&rm=3" },
    { title: "OT", author: "Author F", isbn: "6666666666", date: "25 Mar 2026", fine: "20", img: "https://th.bing.com/th/id/OIP.aUZbqNEiQQ-uaSd8hcS30wHaLH?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" },
  ];

  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      background: '#1e40af',
      margin: 0,
      padding: '30px',
      minHeight: '100vh',
    },
    header: {
      textAlign: 'center',
      color: 'white',
      marginBottom: '30px',
      border: '2px solid black',
      backgroundColor: '#1e40af',
      padding: '10px',
      fontSize: '24px',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '20px',
      justifyContent: 'center',
    },
    card: {
      width: '280px',
      background: 'aliceblue',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      transition: '0.3s',
      cursor: 'default',
    },
    img: {
      width: '100%',
      height: '200px', // Adjusted height for visibility
      objectFit: 'cover',
    },
    details: {
      padding: '12px',
    },
    bookTitle: {
      margin: 0,
      fontSize: '18px',
      color: '#1e40af',
    },
    text: {
      margin: '5px 0',
      fontSize: '14px',
      color: '#333',
    },
    backBtn: {
      display: 'block',
      margin: '30px auto 0',
      padding: '10px 25px',
      backgroundColor: 'aliceblue',
      color: '#1e40af',
      border: 'none',
      borderRadius: '8px',
      fontWeight: 'bold',
      cursor: 'pointer',
      boxShadow: '0 4px 8px rgba(0,0,0,0.2)'
    }
  };

  return (
    <div style={styles.page}>
      <h2 style={styles.header}>Returned Books</h2>

      <div style={styles.container}>
        {returnedBooks.map((book, index) => (
          <div 
            key={index} 
            style={styles.card}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
            }}
          >
            <img src={book.img} alt={book.title} style={styles.img} />
            <div style={styles.details}>
              <h3 style={styles.bookTitle}>{book.title}</h3>
              <p style={styles.text}><strong>Author:</strong> {book.author}</p>
              <p style={styles.text}><strong>ISBN:</strong> {book.isbn}</p>
              <p style={styles.text}><strong>Returned:</strong> {book.date}</p>
              <p style={{...styles.text, color: book.fine !== "0" ? "red" : "green", fontWeight: 'bold'}}>
                Fine: ₹{book.fine}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button 
        style={styles.backBtn} 
        onClick={() => navigate('/faculty-dashboard')}
      >
        BACK TO DASHBOARD
      </button>
    </div>
  );
};

export default FacultyReturnHistory;
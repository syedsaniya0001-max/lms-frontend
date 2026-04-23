import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentBorrow = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  const styles = `
    .borrow-body {
        font-family: Arial;
        background: #1e40af;
        text-align: center;
        /* Replace with your image path */
        background-image: url('Gemini_Generated_Image_i75kbii75kbii75k.png');
        background-size: cover;
        min-height: 100vh;
        width: 100%;
        padding-top: 20px;
    }
    .btn {
        padding: 12px 25px;
        background: aliceblue;
        color: #1e40af;
        border: none;
        cursor: pointer;
        margin: 20px;
        font-size: 16px;
        border-radius: 5px;
        font-weight: bold;
    }
    h1 {
        font-size: 30px;
        text-align: center;
        background-color: #1e40af;
        border-radius: 15px;
        color: white;
        margin: 0;
        padding: 10px;
    }
    h1:hover {
        transform: scale(1.09);
        transition: 0.5s;
    }
    #borrowedSection {
        padding: 20px;
        animation: fadeIn 0.5s ease;
    }
    .heading {
        border: 3px solid black;
        padding: 15px;
        margin-bottom: 30px;
        background-color: aliceblue;
    }
    .book-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 40px;
    }
    .book {
        width: 220px;
        border: 3px solid black;
        padding: 15px;
        background: white;
        text-align: left;
    }
    .book img {
        width: 100%;
        height: 250px;
        object-fit: cover;
        margin-bottom: 10px;
    }
    .book p {
        margin: 5px 0;
        font-size: 14px;
        color: #333;
    }
    .book:hover {
        transform: scale(1.05);
        transition: 0.5s;
    }
    .back {
        background-color: black;
        color: white;
        height: 45px;
        width: 80px;
        margin: 20px;
        font-size: 15px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }
  `;

  return (
    <div className="borrow-body">
      <style>{styles}</style>

      {!isVisible && (
        <button className="btn" onClick={() => setIsVisible(true)}>
          Borrowed Books
        </button>
      )}

      {isVisible && (
        <div id="borrowedSection">
          <div className="heading" style={{ color: 'cadetblue' }}>
            <h1>Borrowed Books List</h1>
          </div>

          <div className="book-container">
            {/* Book 1 */}
            <div className="book">
              <img src="https://m.media-amazon.com/images/I/51xiwRkS2oL.jpg" alt="Java Programming" />
              <p><b>Book Name:</b> Java Programming</p>
              <p><b>Author:</b> James Gosling</p>
              <p><b>Taken:</b> 20 Mar 2026, 10:00 AM</p>
              <p><b>Return By:</b> 30 Mar 2026</p>
            </div>

            {/* Book 2 */}
            <div className="book">
              <img src="https://tse1.mm.bing.net/th/id/OIP.X3_F2u4RNkDXNaNzpsiSMwHaIb?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Python" />
              <p><b>Book Name:</b> Python Programming</p>
              <p><b>Author:</b> Guido Van Rossum</p>
              <p><b>Taken:</b> 26 Mar 2026, 11:00 AM</p>
              <p><b>Return By:</b> 6 Apr 2026</p>
            </div>

            {/* Book 3 */}
            <div className="book">
              <img src="https://tse2.mm.bing.net/th/id/OIP.LczF3YhAN35n7PRN6dwbFwHaLy?rs=1&pid=ImgDetMain&o=7&rm=3" alt="Web Dev" />
              <p><b>Book Name:</b> Web Development</p>
              <p><b>Author:</b> John Doe</p>
              <p><b>Taken:</b> 30 Mar 2026, 02:30 PM</p>
              <p><b>Return By:</b> 10 Apr 2026</p>
            </div>
          </div>
        </div>
      )}

      <button className="back" onClick={() => navigate('/student-dashboard')}>
        Back
      </button>
    </div>
  );
};

export default StudentBorrow;
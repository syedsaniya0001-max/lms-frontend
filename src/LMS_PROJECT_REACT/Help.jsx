import React from 'react';
import { Link } from 'react-router-dom';

const Help = () => {
  return (
    <div className="help-page">
      {/* CSS Styles moved into React */}
      <style>{`
        .help-page {
          margin: 0;
          padding: 40px;
          background: #1e40af;
          font-size: 20px;
          min-height: 100vh;
          font-family: sans-serif;
        }

        .back-link {
          display: inline-block;
          margin-bottom: 20px;
          color: white;
          text-decoration: none;
          font-weight: bold;
        }

        .container {
          width: 900px;
          margin: auto;
          background: white;
          padding: 30px;
          border-radius: 15px;
          box-shadow: 0 0 20px rgba(0,0,0,0.3);
        }

        h1 {
          text-align: center;
          margin-bottom: 30px;
          color: #1e3a8a;
          text-decoration: underline;
        }

        h3 {
          color: #1e40af;
          margin-top: 25px;
        }

        p {
          padding: 10px;
          color: #333;
          line-height: 1.5;
        }

        @media (max-width: 950px) {
          .container {
            width: 90%;
          }
        }
      `}</style>   

      <div className="container">
        <h1>Library Help Center</h1>

        <h3>1. How can I search books?</h3>
        <p>
          You can search for books by entering the first 3 to 4 characters of the book title 
          in the search bar. A list of matching books will appear. Select the required book 
          from the list.
        </p>

        <h3>2. How can I search books by author name?</h3>
        <p>
          Enter the first 3 to 4 characters of the author's name in the search field. 
          The system will display books written by that author.
        </p>

        <h3>3. How can I search books by subject name?</h3>
        <p>
          Type the first few letters (3–4 characters) of the subject name. 
          The system will show all related books under that subject.
        </p>

        <h3>4. How is the fine calculated?</h3>
        <p>
          The fine is calculated based on the number of days the book is overdue.
          <br />
          <strong>Fine = Number of overdue days × 10</strong>
          <br />
          (₹10 is charged per day.)
        </p>

        <h3>5. What should I do if I forget my login password?</h3>
        <p>
          Please contact the library administrator to reset your password.
        </p>

        <h3>6. Why am I not able to find a book?</h3>
        <p>
          Make sure you are entering the correct spelling. 
          Try searching with fewer characters or check by subject/author name.
        </p>

        <h3>7. Who should I contact for further help?</h3>
        <p>
          For additional support, please contact the library administration office.
        </p>
      </div>
      <Link to="/" className="back-link">← Back to Home</Link>
    </div>
  );
};

export default Help;
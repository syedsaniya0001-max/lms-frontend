import React from 'react';
import { Link } from 'react-router-dom';

const NewArrivals = () => {
  return (
    <div className="new-arrivals-page">
      <style>{`
        .new-arrivals-page {
          background-image: url("Screenshot 2026-03-26 224303.png");
          background-position: center;
          background-attachment: fixed;
          background-size: cover;
          background-repeat: no-repeat;
          min-height: 100vh;
          margin: 0;
          padding: 20px;
          font-family: sans-serif;
        }

        .back-btn {
          text-decoration: none;
          color: antiquewhite;
          font-weight: bold;
          font-size: 18px;
          display: inline-block;
          margin-bottom: 20px;
        }

        h1 {
          text-align: center;
          color: antiquewhite;
          font-weight: bolder;
          text-decoration: underline;
        }

        p, pre {
          border: 1px solid;
          border-radius: 0 5px;
          margin: 20px auto;
          max-width: 300px;
          text-align: center;
          background-color: rgb(182, 215, 245);
          color: black;
          font-weight: bold;
          font-family: monospace;
          font-size: 15px;
          padding: 10px;
        }

        .im {
          display: flex;
          justify-content: center;
          transition: 0.5s;
        }

        .im:hover {
          transform: scale(1.05);
        }

        img {
          border-radius: 10px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.5);
        }
      `}</style>

      <Link to="/" className="back-btn">← Back to Home</Link>

      <h1>Easily Access the Newly Arrived Books!</h1>

      <div className="im">
        <img 
          src="Gemini_Generated_Image_nqwoqynqwoqynqwo.png" 
          alt="AI Book" 
          height="300" 
          width="250" 
        />
      </div>

      <div className="container">
        <p>Book Name: Artificial Intelligence</p>
        <p>Arrived Date: 25-02-2026</p>
        <pre 
          onClick={() => alert('Successfully added to WishList✅')} 
          style={{ cursor: 'pointer' }}
        >
          Add to WishList ❤️
        </pre>
      </div>
    </div>
  );
};

export default NewArrivals;
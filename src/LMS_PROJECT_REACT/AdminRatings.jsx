import React from 'react';
import { Link } from 'react-router-dom';

const AdminRatings = () => {
  const ratingData = [
    { id: 1, title: "AI TextBook", rating: "⭐⭐⭐⭐⭐", img: "Gemini_Generated_Image_nqwoqynqwoqynqwo.png" },
    { id: 2, title: "Soft Skills TextBook", rating: "⭐⭐⭐⭐", img: "book1.jpeg" },
    { id: 3, title: "FSD TextBook", rating: "⭐⭐⭐⭐⭐", img: "Gemini_Generated_Image_nqwoqynqwoqynqwo.png" }
  ];

  return (
    <div className="ratings-page">
      <style>{`
        .ratings-page {
          background-color: #1e40af;
          min-height: 100vh;
          padding: 20px;
          font-family: sans-serif;
        }

        .back-link {
          color: white;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 20px;
        }

        h1.title {
          text-align: center;
          border: 3px solid black;
          margin: 0 auto 50px auto;
          width: fit-content;
          background-color: white;
          padding: 10px 20px;
          transition: 0.6s;
        }

        h1.title:hover {
          transform: scale(0.9);
        }

        .main-flex {
          display: flex;
          column-gap: 30px;
          text-align: center;
          margin: auto;
          justify-content: center;
          flex-wrap: wrap;
          row-gap: 20px;
        }

        .rating-card {
          border: 3px solid black;
          width: 250px;
          padding: 20px;
          background-color: aliceblue;
          font-size: larger;
          transition: 0.5s;
        }

        .rating-card:hover {
          transform: scale(1.05);
        }

        .rating-card h2 {
          margin-top: 0;
          color: #333;
        }

        .rating-card img {
          height: 100px;
          width: 70px;
          object-fit: cover;
          border: 1px solid #ccc;
          margin-bottom: 10px;
        }

        .rating-card p {
          margin: 5px 0;
          font-weight: bold;
        }
      `}</style>

      <Link to="/admin-mp" className="back-link">← BACK</Link>

      <h1 className="title">⭐RATINGS⭐</h1>

      <div className="main-flex">
        {ratingData.map((item) => (
          <div className="rating-card" key={item.id}>
            <h2>Ratings</h2>
            <img src={item.img} alt={item.title} />
            <p>{item.title}</p>
            <p>{item.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminRatings;
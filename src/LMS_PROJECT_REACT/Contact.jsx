import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <div className="contact-page">
      <style>{`
        .contact-page {
          margin: 0;
          padding: 40px 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          min-height: 100vh;
          background: linear-gradient(rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.2)), 
                      url("conback.jpeg") center/cover;
          font-family: sans-serif;
        }

        .back-nav {
          align-self: flex-start;
          margin-bottom: 20px;
        }

        .header-box {
          background-color: #1e40af;
          padding: 10px 100px;
          border-radius: 70px;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 50px;
          color: white;
          transition: 0.3s;
        }

        .header-box:hover {
          color: black;
          cursor: default;
        }

        .container {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap; /* Helps on smaller screens */
        }

        .card {
          background: #1e40af;
          width: 280px;
          height: 320px; /* Slightly increased to fit text better */
          padding: 25px;
          border-radius: 20px;
          text-align: center;
          transition: 0.5s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .profile-img {
          width: 120px;
          height: 150px;
          border-radius: 50%;
          border: 4px solid black;
          margin-bottom: 15px;
          object-fit: cover;
        }

        .details {
          font-size: 15px;
          line-height: 1.6;
          color: white;
          text-align: center;
        }
      `}</style>

      <div className="header-box">
        <h2>Contact Information</h2>
      </div>

      <div className="container">
       
        <div className="card">
          <img src="chairman.jpeg" alt="Chairman Image" className="profile-img" />
          <div className="details">
            <b>
              Dr. K. Chandra Sekhar Naidu<br />
              chairman@vemu.org<br />
              8885551140
            </b>
          </div>
        </div>

        <div className="card">
          <img src="principal.jpeg" alt="Principal Image" className="profile-img" />
          <div className="details">
            <b>
              Dr. Naveen Kiliari <br />
              principal@vemu.org <br />
              8884441147
            </b>
          </div>
        </div>
        
        <div className="card">
          <img src="admin.jpeg" alt="Admin Image" className="profile-img" />
          <div className="details">
            <b>
              K. Harinadh <br />
              Admin@vemu.org <br />
              8886661168
            </b>
          </div>
        </div>
        
      </div>
       <div className="back-nav">
        <Link to="/" style={{ textDecoration: 'none', color: '#1e40af', fontWeight: 'bold', fontSize: '20px',backgroundColor:'white' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
    
  );
};

export default Contact;
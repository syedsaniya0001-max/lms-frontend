import React from 'react';
import { Link } from 'react-router-dom';

const Logins = () => {
  return (
    <div className="login-selection-page">
      <style>{`
        .login-selection-page {
          display: flex;
          height: 100vh;
          font-family: sans-serif;
          margin: 0;
        }

        .left {
          width: 50%;
          height: 100vh;
          background-color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .left img {
          width: 80%;
          height: auto;
          max-height: 90%;
          border-radius: 10px;
        }

        .right {
          width: 50%;
          display: flex;
          align-items: center;
          background-color: #f2f4f7;
        }

        .container {
          width: 100%;
          padding: 20px;
          text-align: center;
        }

        .option button {
          display: block;
          margin: 17px auto;
          padding: 15px;
          text-align: center;
          font-size: 15px;
          background-color: rgb(213, 221, 237);
          border-radius: 15px 2px;
          width: 300px;
          text-transform: capitalize;
          color: black;
          border: none;
          transition: 0.3s;
        }

        .option button:hover {
          background-color: #1e40af;
          color: white;
          cursor: pointer;
          border-radius: 100px;
        }

        .back-home {
          display: block;
          margin-top: 20px;
          color: #1e40af;
          text-decoration: none;
          font-weight: bold;
        }

        h1, h2 {
          color: midnightblue;
        }
      `}</style>

      <div className="left">
        <img src="ChatGPT Image Feb 24, 2026, 09_52_24 PM.png" alt="Library Pic" />
      </div>

      <div className="right">
        <div className="container">
          <h1>Welcome To Login Page</h1>
          <h2><b>Please Select Your Role Below 👇</b></h2>
          
          <div className="option">
            {/* Using Link instead of <a> for React navigation */}
            <Link to="/admin-login"><button>Admin</button></Link>
            <Link to="/librarian-login"><button>Librarian</button></Link>
            <Link to="/student-login"><button>Student</button></Link>
            <Link to="/faculty-login"><button>Faculty</button></Link>
          </div>

          <Link to="/" className="back-home">← Return to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default Logins;
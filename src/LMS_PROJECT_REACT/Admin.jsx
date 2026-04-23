import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    const form = e.target.closest('form');
    if (form.checkValidity()) {
      e.preventDefault(); // Stop standard HTML redirect
      alert("Admin has successfully Logged in");
      navigate("/admin-mp"); 
    }
  };

  return (
    <div className="admin-login-page">
      <style>{`
        .admin-login-page {
          margin: 0;
          background-color: aliceblue;
          display: flex;
          height: 100vh;
          font-family: sans-serif;
        }

        .left {
          width: 50%;
        }

        .left img {
          width: 100%;
          height: 100vh;
          border-radius: 0 15px 15px 0;
          object-fit: cover;
        }

        .right {
          width: 50%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        form {
          width: 450px;
        }

        fieldset {
          padding: 35px;
          border: 2px solid #1e40af;
          border-radius: 10px;
          background-color: white;
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        legend {
          font-size: 20px;
          font-weight: bold;
          color: #1e40af;
          padding: 0 10px;
        }

        label {
          display: block;
          margin-top: 10px;
          font-weight: bold;
        }

        input {
          width: 100%;
          padding: 8px;
          margin-top: 5px;
          border: 1px solid black;
          border-radius: 5px;
          box-sizing: border-box;
        }

        button {
          width: 40%;
          display: block;
          padding: 10px;
          margin: 20px auto 10px auto; 
          background-color: #1e40af;
          color: white;
          border: none;
          border-radius: 10px;
          font-weight: bold;
          transition: 0.3s;
        }

        button:hover {
          background-color: #1e3a8a;
          border-radius: 20px;
          cursor: pointer;
        }

        .back-link {
          margin-top: 15px;
          color: #1e40af;
          text-decoration: none;
          font-size: 14px;
        }
      `}</style>

      <div className="left">
        <img src="book5.jpeg" alt="Admin Login Page" />
      </div>

      <div className="right">
        <form className="form">
          <fieldset>
            <legend>Admin Login</legend>
            <label>Enter UserName:</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Eg: S.Vick" 
              pattern="[A-Za-z ]{4,}" 
              required 
            />
            
            <label>Enter Password:</label>
            <input 
              type="password" 
              name="password" 
              pattern="[A-Za-z0-9]{7,15}" 
              required 
            />

            <button type="submit" onClick={handleLogin}>Login</button>
          </fieldset>
        </form>
        <Link to="/logins" className="back-link">← Back to Role Selection</Link>
      </div>
    </div>
  );
};

export default Admin;
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyLogin = () => {
  const navigate = useNavigate();
  const formRef = useRef(null);
  const nameRef = useRef(null);

  const handleLogin = (e) => {
    // Check if the HTML5 validation (patterns, required) passes
    if (formRef.current.checkValidity()) {
      e.preventDefault(); // Prevent standard form submission
      const facultyName = nameRef.current.value;
      alert("Welcome, " + facultyName);
      
      // Navigate to the Faculty Main Page (Dashboard)
      navigate('/faculty-dashboard'); 
    } else {
      // If invalid, the browser will automatically show validation errors
    }
  };

  const styles = `
    .login-body {
        margin: 0;
        background-color: aliceblue;
        display: flex;
        height: 100vh;
        width: 100%;
        font-family: Arial, sans-serif;
    }
    .left {
        width: 50%;
    }
    .left img {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        border-radius: 0 15px 15px 0;
    }
    .right {
        width: 50%;
        display: flex;
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
        margin-top: 15px;
        font-weight: bold;
    }
    input {
        width: 100%;
        padding: 10px;
        margin-top: 8px;
        border: 1px solid black;
        border-radius: 5px;
        box-sizing: border-box;
    }
    .login-btn {
        width: 45%;
        display: block;
        padding: 12px;
        margin: 30px auto 10px auto; 
        background-color: #1e40af;
        color: white;
        border: none;
        border-radius: 10px;
        font-size: 16px;
        font-weight: bold;
        transition: 0.3s;
        cursor: pointer;
    }
    .login-btn:hover {
        background-color: #1a368f;
        border-radius: 20px;
        transform: scale(1.05);
    }
  `;

  return (
    <div className="login-body">
      <style>{styles}</style>
      
      <div className="left">
        {/* Replace with your local image path or URL */}
        <img src="book3.jpeg" alt="Faculty Login Background" />
      </div>

      <div className="right">
        <form ref={formRef} className="form" onSubmit={handleLogin}>
          <fieldset>
            <legend>Faculty Login</legend>
            
            <label>Enter UserName:</label>
            <input 
              type="text" 
              ref={nameRef}
              placeholder="Eg: A.Nick" 
              pattern="[A-Za-z ]{4,}" 
              required 
            />

            <label>Enter Password:</label>
            <input 
              type="password" 
              pattern="[A-Za-z0-9]{7,15}" 
              required 
            />

            <button type="submit" className="login-btn">
              Login
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default FacultyLogin;
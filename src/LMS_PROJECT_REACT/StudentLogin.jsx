import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    roll: '',
    branch: ''
  });

  const styles = `
    .student-page-body {
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
    }
    legend {
        font-size: 20px;
        font-weight: bold;
        color: #000;
    }
    label {
        color: #000;
        display: block;
        margin-top: 10px;
    }
    input, .sele {
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
        margin: 20px auto 0 auto; 
        background-color: #1e40af;
        color: white;
        border: none;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.3s ease;
    }
    button:hover {
        background-color: #1e40af;
        border-radius: 20px;
    }
  `;

 const handleSubmit = (e) => {
    e.preventDefault();
    
    const isNameValid = formData.name.length >= 4;
    const isRollValid = /^[A-Za-z0-9]{10}$/.test(formData.roll);
    const isBranchValid = formData.branch !== "";

    if (isNameValid && isRollValid && isBranchValid) {
      
      // --- ADD THIS LINE HERE ---
      localStorage.setItem('studentName', formData.name); 
      
      alert("Student has successfully Logged in");
      navigate('/student-dashboard');
    } else {
      alert("Please fill all fields correctly.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="student-page-body">
      <style>{styles}</style>
      
      <div className="left">
        {/* Replace with your actual image path or URL */}
        <img src="book2.jpeg" alt="Student Login Page" />
      </div>

      <div className="right">
        <form onSubmit={handleSubmit} className="form">
          <fieldset>
            <legend>Student Login</legend>
            
            <label>Enter Student Name:</label>
            <input 
              type="text" 
              name="name" 
              placeholder="Eg: K.Lol" 
              required 
              value={formData.name}
              onChange={handleChange}
            />

            <label>Enter Roll Number:</label>
            <input 
              type="text" 
              name="roll" 
              placeholder="Eg: 244M1A3100" 
              required 
              value={formData.roll}
              onChange={handleChange}
            />

            <label>Select Your Branch:</label>
            <select 
              name="branch" 
              className="sele" 
              value={formData.branch}
              onChange={handleChange}
              required
            >
              <option value="" disabled>-----Select Option-----</option>
              <option value="CSE">CSE</option>
              <option value="CSE-AI">CSE-AI</option>
              <option value="EEE">EEE</option>
              <option value="ECE">ECE</option>
              <option value="AIML">AIML</option>
            </select>

            <button type="submit">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default StudentLogin;
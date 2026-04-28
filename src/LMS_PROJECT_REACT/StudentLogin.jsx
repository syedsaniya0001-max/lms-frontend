import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', roll: '', branch: '' });

  const styles = `
    .student-page-body { margin: 0; background-color: aliceblue; display: flex; height: 100vh; width: 100%; font-family: Arial, sans-serif; }
    .left { width: 50%; }
    .left img { width: 100%; height: 100vh; object-fit: cover; border-radius: 0 15px 15px 0; }
    .right { width: 50%; display: flex; justify-content: center; align-items: center; }
    form { width: 450px; }
    fieldset { padding: 35px; border: 2px solid #1e40af; border-radius: 10px; background-color: white; }
    legend { font-size: 20px; font-weight: bold; color: #000; }
    label { color: #000; display: block; margin-top: 10px; }
    input, .sele { width: 100%; padding: 8px; margin-top: 5px; border: 1px solid black; border-radius: 5px; box-sizing: border-box; }
    button { width: 40%; display: block; padding: 10px; margin: 20px auto 0 auto; background-color: #1e40af; color: white; border: none; border-radius: 10px; cursor: pointer; transition: all 0.3s ease; }
    button:hover { background-color: #1e40af; border-radius: 20px; }
  `;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // No checking, just save to local storage and go!
    localStorage.setItem('studentName', formData.name);
    localStorage.setItem('studentRoll', formData.roll);
    alert("Welcome, " + formData.name);
    navigate('/student-dashboard');
  };

  return (
    <div className="student-page-body">
      <style>{styles}</style>
      <div className="left">
        <img src="book2.jpeg" alt="Login" />
      </div>
      <div className="right">
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Student Login</legend>
            
            <label>Enter Student Name:</label>
            <input type="text" name="name" placeholder="Eg: K.Lol" required onChange={handleChange} />

            <label>Enter Roll Number:</label>
            <input type="text" name="roll" placeholder="Eg: 244M1A3100" required onChange={handleChange} />

            <label>Select Your Branch:</label>
            <select name="branch" className="sele" required onChange={handleChange}>
              <option value="">-----Select Option-----</option>
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
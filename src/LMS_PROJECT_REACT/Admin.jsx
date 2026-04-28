import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
  const navigate = useNavigate();
  // State to track inputs
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Strict check for hardcoded credentials
    if ((user === 'admin' || user ==='Admin' ||user ==='ADMIN') && pass === 'admin@2008') {
      alert("Admin successfully Logged in");
      navigate("/admin-mp"); 
    } else {
      alert("Invalid Admin Credentials! Please use the details shown below.");
    }
  };

  return (
    <div className="admin-login-page">
      <style>{`
        .admin-login-page { margin: 0; background-color: aliceblue; display: flex; height: 100vh; font-family: sans-serif; }
        .left { width: 50%; }
        .left img { width: 100%; height: 100vh; border-radius: 0 15px 15px 0; object-fit: cover; }
        .right { width: 50%; display: flex; flex-direction: column; justify-content: center; align-items: center; }
        form { width: 450px; }
        fieldset { padding: 35px; border: 2px solid #1e40af; border-radius: 10px; background-color: white; box-shadow: 0 4px 15px rgba(0,0,0,0.1); }
        legend { font-size: 20px; font-weight: bold; color: #1e40af; padding: 0 10px; }
        label { display: block; margin-top: 10px; font-weight: bold; }
        input { width: 100%; padding: 8px; margin-top: 5px; border: 1px solid black; border-radius: 5px; box-sizing: border-box; }
        button { width: 40%; display: block; padding: 10px; margin: 20px auto 10px auto; background-color: #1e40af; color: white; border: none; border-radius: 10px; font-weight: bold; transition: 0.3s; cursor: pointer; }
        button:hover { background-color: #1e3a8a; border-radius: 20px; }
        .back-link { margin-top: 15px; color: #1e40af; text-decoration: none; font-size: 14px; }
        
        .admin-info-box {
            margin-top: 15px;
            padding: 10px;
            background: #eff6ff;
            border: 1px dashed #1e40af;
            border-radius: 5px;
            font-size: 13px;
            color: #1e40af;
            text-align: center;
        }
      `}</style>

      <div className="left">
        <img src="book5.jpeg" alt="Admin Login Page" />
      </div>

      <div className="right">
        <form className="form" onSubmit={handleLogin}>
          <fieldset>
            <legend>Admin Login</legend>
            <label>User Name:</label>
            <input 
              type="text" 
              placeholder="admin" 
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required 
            />
            
            <label>Password:</label>
            <input 
              type="password" 
              placeholder="admin@2008" 
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              required 
            />

            <button type="submit">Login</button>
            
            <div className="admin-info-box">
               <strong>Access Credentials:</strong><br/>
               User: <code>admin</code> | Pass: <code>admin@2008</code>
            </div>
          </fieldset>
        </form>
        <Link to="/logins" className="back-link">← Back to Role Selection</Link>
      </div>
    </div>
  );
};

export default Admin;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LibrarianLogin = () => {
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    if (e.currentTarget.checkValidity()) {
      alert("Librarian has successfully Logged in");
      navigate('/librarian-dashboard');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh', backgroundColor: 'aliceblue' }}>
      <style>{`
        fieldset { padding:35px; border:2px solid #1e40af; border-radius: 10px; background-color: white; width: 400px; }
        .login-btn { width:40%; display:block; padding:10px; margin:20px auto; background-color:#1e40af; color:white; border: none; border-radius:10px; cursor:pointer; }
        input { width:100%; padding:5px; margin-top:5px; border:1px solid black; border-radius: 5px; }
      `}</style>
      <div style={{ width: '50%' }}><img src="book4.jpeg" style={{ width: '100%', height: '100vh', borderRadius: '15px' }} alt="Login" /></div>
      <div style={{ width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form className="form" onSubmit={handleLogin}>
          <fieldset>
            <legend style={{ fontWeight: 'bold', fontSize: '20px' }}>Librarian Login</legend>
            <label>Enter UserName:</label>
            <input type="text" placeholder='Eg: ALICE' pattern="[A-Za-z ]{4,}" required />
            <br /><br />
            <label>Enter Password:</label>
            <input type="password" pattern="[A-Za-z0-9]{7,15}" required />
            <button type="submit" className="login-btn">Login</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default LibrarianLogin;
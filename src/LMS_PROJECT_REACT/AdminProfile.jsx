import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminProfile = () => {
  // Using state to manage editability
  const [emailEditable, setEmailEditable] = useState(true);
  const [phoneEditable, setPhoneEditable] = useState(true);

  return (
    <div className="profile-wrapper">
      <style>{`
        .profile-wrapper {
          font-family: Arial, sans-serif;
          background: #1e40af;
          margin: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }
        .profile-card {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          border-radius: 15px;
          padding: 30px;
          width: 700px;
          height: 550px;
          display: flex;
          justify-content: space-between;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .profile-infor { flex: 1; }
        .profile-infor h2 {
          text-align: center;
          margin-bottom: 20px;
          color: white;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.3);
        }
        .infor-row {
          margin: 12px 0;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .infor-row span {
          font-weight: bold;
          margin-right: 10px;
          width: 160px;
          color: white;
        }
        .infor-row input {
          flex: 1;
          padding: 8px 10px;
          border: none;
          border-radius: 8px;
          background: white;
          font-size: 14px;
          outline: none;
        }
        .infor-row input:read-only {
          background: rgba(255, 255, 255, 0.7);
          color: #555;
        }
        .edit-btn {
          background: #1e40af;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 6px 12px;
          margin-left: 10px;
          cursor: pointer;
          font-size: 12px;
          transition: 0.3s;
        }
        .edit-btn:hover { background: black; }
        .profile-photo {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          width: 200px;
        }
        .photo-circle {  
          width: 150px;
          height: 150px;
          border-radius: 50%;
          border: 3px dashed white;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,0.3);
          overflow: hidden;
        }
        .photo-circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .back-btn {
          background: white;
          color: #1e40af;
          border-radius: 10px;
          padding: 12px 30px;
          cursor: pointer;
          font-size: 14px;    
          text-decoration: none;
          font-weight: bold;
          transition: 0.3s;
        }
        .back-btn:hover {
          background: black;
          color: white;
        }
      `}</style>

      <div className="profile-card">
        <div className="profile-infor">
          <h2>ADMIN PROFILE</h2>

          <div className="infor-row"><span>NAME:</span> 
            <input type="text" defaultValue="Admin User" readOnly />
          </div>

          <div className="infor-row"><span>ADMIN ID:</span> 
            <input type="text" defaultValue="ADM001" readOnly />
          </div>

          <div className="infor-row"><span>ROLE:</span> 
            <input type="text" defaultValue="System Administrator" readOnly />
          </div>

          <div className="infor-row"><span>DEPARTMENT:</span> 
            <input type="text" defaultValue="Administration" readOnly />
          </div>

          <div className="infor-row"><span>ACCESS LEVEL:</span> 
            <input type="text" defaultValue="Full Access" readOnly />
          </div>

          <div className="infor-row">
            <span>EMAIL:</span> 
            <input 
              type="email" 
              defaultValue="admin@college.edu" 
              readOnly={emailEditable} 
            />
            <button className="edit-btn" onClick={() => setEmailEditable(false)}>EDIT</button>
          </div>

          <div className="infor-row">
            <span>PHONE NUMBER:</span> 
            <input 
              type="tel" 
              defaultValue="9999999999" 
              readOnly={phoneEditable} 
            />
            <button className="edit-btn" onClick={() => setPhoneEditable(false)}>EDIT</button>
          </div>
        </div>

        <div className="profile-photo">
          <div className="photo-circle">
            <img src="stu_img.jpeg" alt="Admin" />
          </div>
          <Link to="/admin-mp" className="back-btn">BACK</Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
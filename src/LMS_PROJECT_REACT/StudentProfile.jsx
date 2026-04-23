import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentProfile = () => {
  const navigate = useNavigate();

  // State to manage editable fields
  const [profile, setProfile] = useState({
    email: 'sarunima@gmail.com',
    phone: '9876543210'
  });

  const [editStatus, setEditStatus] = useState({
    email: true, // true means readonly
    phone: true
  });

  const handleEdit = (field) => {
    setEditStatus({ ...editStatus, [field]: false });
  };

  const handleChange = (e, field) => {
    setProfile({ ...profile, [field]: e.target.value });
  };

  const styles = `
    .profile-body {
      font-family: Arial, sans-serif;
      background: #1e40af;
      margin: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      width: 100%;
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
      box-sizing: border-box;
    }
    .profile-infor {
      flex: 1;
    }
    .profile-infor h2 {
      text-align: center;
      margin-bottom: 20px;
      color: #333;
    }
    .infor-row {
      margin: 12px 0;
      font-size: 16px;
      color: #222;
      display: flex;
      align-items: center;
    }
    .infor-row span {
      font-weight: bold;
      margin-right: 10px;
      width: 160px;
      color: black;
    }
    .infor-row input {
      flex: 1;
      padding: 8px 10px;
      border: none;
      border-radius: 8px;
      background: rgba(255,255,255, 0.9);
      font-size: 14px;
      outline: none;
    }
    .infor-row input[readonly] {
      background: rgba(255,255,255, 0.5);
      cursor: default;
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
      transition: background 0.3s;
    }
    .edit-btn:hover {
      background: black;
    }
    .profile-photo {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-left: 20px;
    }
    .photo-circle {  
      width: 180px;
      height: 180px;
      border-radius: 50%;
      border: 3px dashed #555;
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
      background: #1e40af;
      color: white;
      border-radius: 10px;
      padding: 10px 25px;
      cursor: pointer;
      font-size: 14px;    
      text-decoration: none;
      border: none;
      transition: background 0.3s;
    }
    .back-btn:hover {
      background: black;
    }
  `;

  return (
    <div className="profile-body">
      <style>{styles}</style>
      <div className="profile-card">
        <div className="profile-infor">
          <h2>PROFILE</h2>
          
          <div className="infor-row">
            <span>NAME:</span> 
            <input type="text" value="S ARUNIMA" readOnly />
          </div>
          
          <div className="infor-row">
            <span>ROLL NUMBER:</span> 
            <input type="text" value="244M1A3100" readOnly />
          </div>
          
          <div className="infor-row">
            <span>BRANCH & SECTION:</span> 
            <input type="text" value="CSE-AI" readOnly />
          </div>
          
          <div className="infor-row">
            <span>YEAR & SEMESTER:</span> 
            <input type="text" value="II-II" readOnly />
          </div>

          <div className="infor-row">
            <span>EMAIL:</span> 
            <input 
              type="email" 
              value={profile.email} 
              readOnly={editStatus.email}
              onChange={(e) => handleChange(e, 'email')}
              style={!editStatus.email ? { border: '1px solid #1e40af' } : {}}
            />
            {editStatus.email && <button onClick={() => handleEdit('email')} className="edit-btn">EDIT</button>}
          </div>

          <div className="infor-row">
            <span>PHONE NUMBER:</span> 
            <input 
              type="tel" 
              value={profile.phone} 
              readOnly={editStatus.phone}
              onChange={(e) => handleChange(e, 'phone')}
              style={!editStatus.phone ? { border: '1px solid #1e40af' } : {}}
            />
            {editStatus.phone && <button onClick={() => handleEdit('phone')} className="edit-btn">EDIT</button>}
          </div>

          <div className="infor-row">
            <span>DEPARTMENT:</span> 
            <input type="text" value="CSE" readOnly />
          </div>
        </div>

        <div className="profile-photo">
          <div className="photo-circle">
            <img src="stu_img.jpeg" alt="Student Profile" />
          </div>
          <button onClick={() => navigate('/student-dashboard')} className="back-btn">
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
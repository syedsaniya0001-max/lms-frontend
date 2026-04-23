import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LibrarianProfile = () => {
  const navigate = useNavigate();
  const [isEditable, setIsEditable] = useState({ email: true, phone: true });

  return (
    <div style={{ background: '#1e40af', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <style>{`
        .profile-card { background: rgba(255, 255, 255, 0.2); backdrop-filter: blur(10px); border-radius: 15px; padding: 30px; width: 700px; display: flex; justify-content: space-between; box-shadow: 0 8px 20px rgba(0,0,0,0.2); }
        .infor-row { margin: 12px 0; display: flex; align-items: center; color: black; }
        .infor-row span { font-weight: bold; width: 160px; }
        .infor-row input { flex: 1; padding: 6px 10px; border-radius: 8px; border: none; outline: none; }
        .edit-btn { background: #1e40af; color: white; border: none; border-radius: 8px; padding: 4px 10px; margin-left: 10px; cursor: pointer; }
        .back-btn { background: #1e40af; color: white; border-radius: 10px; padding: 10px 20px; cursor: pointer; border: none; text-decoration: none; }
      `}</style>

      <div className="profile-card">
        <div style={{ flex: 1 }}>
          <h2 style={{ textAlign: 'center' }}>LIBRARIAN PROFILE</h2>
          <div className="infor-row"><span>NAME:</span><input type="text" defaultValue="Mr. Ravi Kumar" readOnly /></div>
          <div className="infor-row"><span>LIBRARIAN ID:</span><input type="text" defaultValue="LIB202" readOnly /></div>
          <div className="infor-row"><span>EMAIL:</span>
            <input type="email" defaultValue="librarian@college.edu" readOnly={isEditable.email} />
            <button className="edit-btn" onClick={() => setIsEditable({...isEditable, email: false})}>EDIT</button>
          </div>
          <div className="infor-row"><span>PHONE:</span>
            <input type="tel" defaultValue="9123456780" readOnly={isEditable.phone} />
            <button className="edit-btn" onClick={() => setIsEditable({...isEditable, phone: false})}>EDIT</button>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ width: '150px', height: '150px', borderRadius: '50%', background: 'white', overflow: 'hidden' }}>
            <img src="stu_img.jpeg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <button className="back-btn" onClick={() => navigate('/librarian-dashboard')}>BACK</button>
        </div>
      </div>
    </div>
  );
};

export default LibrarianProfile;
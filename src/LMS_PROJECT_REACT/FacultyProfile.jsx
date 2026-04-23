import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyProfile = () => {
  const navigate = useNavigate();

  // State for editable fields
  const [profileData, setProfileData] = useState({
    email: "arunima@college.edu",
    phone: "9876543210"
  });

  // State to track which field is currently editable
  const [isEditable, setIsEditable] = useState({
    email: true,
    phone: true
  });

  const handleEdit = (field) => {
    setIsEditable({ ...isEditable, [field]: false });
  };

  const handleChange = (e, field) => {
    setProfileData({ ...profileData, [field]: e.target.value });
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      background: '#1e40af',
      margin: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    profileCard: {
      background: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)', // Support for Safari
      borderRadius: '15px',
      padding: '30px',
      width: '700px',
      height: '550px',
      display: 'flex',
      justifyContent: 'space-between',
      boxShadow: '0 8px 20px rgba(0,0,0,0.2)',
      border: '1px solid rgba(255, 255, 255, 0.3)',
    },
    profileInfo: {
      flex: 1,
    },
    title: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#333',
      fontSize: '28px',
      fontWeight: 'bold',
    },
    infoRow: {
      margin: '12px 0',
      fontSize: '16px',
      color: '#222',
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      fontWeight: 'bold',
      marginRight: '10px',
      width: '160px',
      color: 'black',
    },
    input: {
      flex: 1,
      padding: '8px 12px',
      border: 'none',
      borderRadius: '8px',
      background: 'rgba(255,255,255, 0.9)',
      fontSize: '14px',
      outline: 'none',
      color: '#333',
    },
    readOnlyInput: {
      background: 'rgba(255,255,255, 0.6)',
      cursor: 'default',
    },
    editBtn: {
      background: '#1e40af',
      color: 'white',
      border: 'none',
      borderRadius: '8px',
      padding: '6px 12px',
      marginLeft: '10px',
      cursor: 'pointer',
      fontSize: '12px',
      fontWeight: 'bold',
      transition: '0.3s',
    },
    profilePhotoSection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginLeft: '20px',
    },
    photoCircle: {
      width: '150px',
      height: '150px',
      borderRadius: '50%',
      border: '3px dashed #555',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(255,255,255,0.3)',
      overflow: 'hidden',
    },
    img: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
    },
    backBtn: {
      background: '#1e40af',
      color: 'white',
      borderRadius: '10px',
      padding: '12px 30px',
      cursor: 'pointer',
      fontSize: '14px',
      textDecoration: 'none',
      textAlign: 'center',
      border: 'none',
      fontWeight: 'bold',
      transition: '0.3s',
    }
  };

  return (
    <div style={styles.body}>
      <div style={styles.profileCard}>
        <div style={styles.profileInfo}>
          <h2 style={styles.title}>PROFILE</h2>

          <div style={styles.infoRow}>
            <span style={styles.label}>NAME:</span>
            <input style={{...styles.input, ...styles.readOnlyInput}} type="text" value="Dr. S Arunima" readOnly />
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>FACULTY ID:</span>
            <input style={{...styles.input, ...styles.readOnlyInput}} type="text" value="FAC1023" readOnly />
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>DEPARTMENT:</span>
            <input style={{...styles.input, ...styles.readOnlyInput}} type="text" value="Computer Science & Engineering" readOnly />
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>DESIGNATION:</span>
            <input style={{...styles.input, ...styles.readOnlyInput}} type="text" value="Assistant Professor" readOnly />
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>QUALIFICATION:</span>
            <input style={{...styles.input, ...styles.readOnlyInput}} type="text" value="M.Tech, Ph.D" readOnly />
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>EXPERIENCE:</span>
            <input style={{...styles.input, ...styles.readOnlyInput}} type="text" value="5 Years" readOnly />
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>EMAIL:</span>
            <input 
              style={styles.input} 
              type="email" 
              value={profileData.email} 
              readOnly={isEditable.email}
              onChange={(e) => handleChange(e, 'email')}
            />
            <button style={styles.editBtn} onClick={() => handleEdit('email')}>EDIT</button>
          </div>

          <div style={styles.infoRow}>
            <span style={styles.label}>PHONE NUMBER:</span>
            <input 
              style={styles.input} 
              type="tel" 
              value={profileData.phone} 
              readOnly={isEditable.phone}
              onChange={(e) => handleChange(e, 'phone')}
            />
            <button style={styles.editBtn} onClick={() => handleEdit('phone')}>EDIT</button>
          </div>
        </div>

        <div style={styles.profilePhotoSection}>
          <div style={styles.photoCircle}>
            <img src="stu_img.jpeg" alt="Faculty" style={styles.img} />
          </div>
          <button 
            style={styles.backBtn} 
            onClick={() => navigate('/faculty-dashboard')}
            onMouseOver={(e) => e.target.style.backgroundColor = 'black'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#1e40af'}
          >
            BACK
          </button>
        </div>
      </div>
    </div>
  );
};

export default FacultyProfile;
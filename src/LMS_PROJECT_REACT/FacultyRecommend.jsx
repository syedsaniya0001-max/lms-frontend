import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyRecommend = () => {
  const navigate = useNavigate();
  const [imagePreview, setImagePreview] = useState(null);

  const loadImage = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImagePreview(URL.createObjectURL(event.target.files[0]));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Book Recommended Successfully!");
    // Reset form or navigate back
    navigate('/faculty-dashboard');
  };

  const styles = {
    page: {
      fontFamily: 'Arial, sans-serif',
      background: '#1e40af',
      minHeight: '100vh',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    mainBox: {
      width: '1100px',
      margin: '40px auto',
      border: '3px solid black',
      borderRadius: '10px',
      overflow: 'hidden',
      background: 'aliceblue',
    },
    title: {
      background: '#1e40af',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    formBox: {
      display: 'flex',
      padding: '25px',
      borderTop: '2px solid black',
    },
    left: {
      width: '50%',
      padding: '10px',
    },
    label: {
      fontWeight: 'bold',
      display: 'block',
      marginTop: '15px',
    },
    input: {
      width: '95%',
      padding: '12px',
      marginTop: '5px',
      border: '2px solid #555',
      borderRadius: '6px',
      fontSize: '14px',
    },
    textarea: {
      width: '95%',
      height: '80px',
      padding: '12px',
      marginTop: '5px',
      border: '2px solid #555',
      borderRadius: '6px',
      fontSize: '14px',
      resize: 'none'
    },
    right: {
      width: '50%',
      padding: '10px',
      textAlign: 'center',
      borderLeft: '2px solid black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    },
    imageBox: {
      width: '80%',
      height: '300px',
      border: '2px dashed #333',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '10px',
      marginBottom: '20px',
      background: '#eaf3fb',
      overflow: 'hidden'
    },
    previewImg: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain'
    },
    submitBtnContainer: {
      textAlign: 'center',
      padding: '20px',
    },
    button: {
      padding: '12px 40px',
      background: '#1e40af',
      color: 'white',
      border: 'none',
      fontSize: '16px',
      borderRadius: '6px',
      cursor: 'pointer',
      transition: '0.3s'
    },
    backLink: {
      color: 'white',
      marginTop: '10px',
      cursor: 'pointer',
      textDecoration: 'underline'
    }
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit}>
        <div style={styles.mainBox}>
          <div style={styles.title}>RECOMMEND BOOKS</div>

          <div style={styles.formBox}>
            {/* LEFT COLUMN */}
            <div style={styles.left}>
              <label style={styles.label}>BOOK NAME</label>
              <input style={styles.input} type="text" placeholder="Enter Book Name" required />

              <label style={styles.label}>AUTHOR NAME</label>
              <input style={styles.input} type="text" placeholder="Enter Author Name" required />

              <label style={styles.label}>AVAILABILITY STATUS</label>
              <select style={styles.input} required>
                <option value="">Select Availability Status</option>
                <option>Available in Library</option>
                <option>Not Available in Library</option>
              </select>

              <label style={styles.label}>ISBN</label>
              <input style={styles.input} type="text" placeholder="Enter ISBN" required />

              <label style={styles.label}>NO. OF COPIES REQUIRED</label>
              <input style={styles.input} type="number" placeholder="Enter Number of Copies" required />

              <label style={styles.label}>REASON FOR RECOMMENDING</label>
              <textarea style={styles.textarea} placeholder="Enter Reason for Recommending" required></textarea>
            </div>

            {/* RIGHT COLUMN */}
            <div style={styles.right}>
              <div style={styles.imageBox}>
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" style={styles.previewImg} />
                ) : (
                  <span style={{color: '#555'}}>No Image Selected</span>
                )}
              </div>
              <input 
                type="file" 
                accept="image/*" 
                onChange={loadImage} 
                required 
              />
            </div>
          </div>

          <div style={styles.submitBtnContainer}>
            <button 
              type="submit" 
              style={styles.button}
              onMouseOver={(e) => e.target.style.background = 'black'}
              onMouseOut={(e) => e.target.style.background = '#1e40af'}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </form>
      
      <span 
        style={styles.backLink} 
        onClick={() => navigate('/faculty-dashboard')}
      >
        Go Back to Dashboard
      </span>
    </div>
  );
};

export default FacultyRecommend;
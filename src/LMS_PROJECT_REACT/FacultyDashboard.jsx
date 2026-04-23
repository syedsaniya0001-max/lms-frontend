import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const FacultyDashboard = () => {
  const navigate = useNavigate();
  
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  const [name, setName] = useState("");
  const [dept, setDept] = useState("");
  const [feedback, setFeedback] = useState("");

  const toggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback Submitted Successfully. Thank You🙏');
    setName("");
    setDept("");
    setFeedback("");
  };

  const styles = {
    facultyPage: {
      margin: 0,
      padding: 0,
      minHeight: '100vh',
      fontFamily: 'Arial, sans-serif',
      backgroundImage: 'url("book3.jpeg")',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
    },
    subtop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      border: "1px solid black",
      borderRadius: "10px",
      margin: "55px 20px",
      backgroundColor: "#1e40af",
      color: "white",
      position: "sticky",
      top: "0px",
      height: "80px",
      zIndex: 1000,
      padding: "0 20px", // Standard padding instead of relative offsets
    },
    headerLeft: {
      display: "flex",
      alignItems: "center",
      gap: "20px"
    },
    headerRight: {
      display: "flex",
      alignItems: "center",
      gap: "40px" // Fixed gap between Notification and Help
    },
    bar: {
      cursor: "pointer",
      fontSize: "25px",
      margin: 0
    },
    homeTitle: {
      cursor: "pointer",
      fontSize: "25px",
      margin: "250%",
      
      whiteSpace: "nowrap"
    },
    notificationArea: {
      position: "relative",
      cursor: "pointer",
    },
    notiIcon: {
      fontSize: "25px",
      margin: 0
    },
    box: {
      display: isNotificationOpen ? "block" : "none",
      position: "absolute",
      top: "140%",
      left: "50%",
      transform: "translateX(-50%)",
      backgroundColor: "white",
      color: "black",
      padding: "10px",
      width: "200px",
      border: "1px solid grey",
      borderRadius: "5px",
      zIndex: 2001,
      fontSize: "16px",
      boxShadow: "0px 4px 8px rgba(0,0,0,0.2)"
    },
    help: {
      cursor: "pointer",
      fontSize: "20px",
      margin: 0
    },
    sidebar: {
      position: "fixed",
      top: 0,
      left: isSidebarOpen ? "0px" : "-240px",
      width: "240px",
      height: "100%",
      backgroundColor: "aliceblue",
      color: "#1e40af",
      paddingTop: "20px",
      transition: "0.5s",
      zIndex: 2000,
      boxShadow: isSidebarOpen ? "4px 0px 10px rgba(0,0,0,0.3)" : "none",
    },
    sidebarLink: {
      display: "block",
      padding: "8px 20px", // Decreased padding for a tighter fit
      textDecoration: "none",
      fontSize: "20px",
      color: "#1e40af",
      cursor: "pointer",
      marginBottom: "8px", // Reduced gap to make it look less clumsy
      transition: "0.2s",
    },
    menuclose: {
      backgroundColor: "#1e40af",
      color: "white",
      border: "1px solid black",
      marginLeft: "20px",
      padding: "5px 12px",
      cursor: "pointer",
    },
    logout: {
      border: "1px solid black",
      marginLeft: "20px",
      marginTop: "15px",
      padding: "8px 15px",
      backgroundColor: "#1e40af",
      color: "white",
      display: "inline-block",
      cursor: "pointer",
      textDecoration: "none"
    },
    main: {
      backgroundColor: "rgba(240, 248, 255, 0.8)",
      border: "2px ridge black",
      marginTop: "50px",
      marginRight: "30px",
      marginBottom: "30px",
      marginLeft: isSidebarOpen ? "270px" : "30px",
      borderRadius: "20px",
      transition: "0.5s",
      padding: "30px",
    }
  };

  return (
    <div style={styles.facultyPage}>
      {/* Header Bar with Fixed Ordering */}
      <div style={styles.subtop}>
        <div style={styles.headerLeft}>
          <p style={styles.bar} onClick={toggleMenu}>☰</p>
          <h2 style={styles.homeTitle} onClick={() => navigate('/faculty-dashboard')}>Faculty Dashboard</h2>
        </div>

        <div style={styles.headerRight}>
          <div 
            style={styles.notificationArea} 
            onMouseEnter={() => setIsNotificationOpen(true)}
            onMouseLeave={() => setIsNotificationOpen(false)}
          >
            <p style={styles.notiIcon}>🔔</p>
            <div style={styles.box}>
              <strong>Notifications</strong>
              <hr />
              Due date soon ⚠️<br />
              Taken: 10 Aug<br />
              Fine will be charged if extended
            </div>
          </div>
          <p style={styles.help} onClick={() => alert('Contact Librarian:\nEmail: library@college.com')}>Help</p>
        </div>
      </div>

      {/* Sidebar with tighter gaps */}
      <div style={styles.sidebar}>
        <a style={styles.menuclose} onClick={toggleMenu}>☰</a>
        <div style={{ marginTop: '30px' }}>
          <a style={styles.sidebarLink} onClick={() => navigate('/faculty-dashboard')}>Home</a>
          <a style={styles.sidebarLink} onClick={() => navigate('/faculty-profile')}>Profile</a>
          <a style={styles.sidebarLink} onClick={() => navigate('/faculty-books')}>Books</a>
          <a style={styles.sidebarLink} onClick={() => navigate('/faculty-borrow')}>Borrowed History</a>
          <a style={styles.sidebarLink} onClick={() => navigate('/faculty-return')}>Returned History</a>
          <a style={styles.sidebarLink} onClick={() => navigate('/faculty-recommend')}>Recommend Books</a>
          <a style={styles.logout} onClick={() => navigate('/')}>Log Out</a>
        </div>
      </div>

      <div style={styles.main}>
        <div style={{ fontSize: '25px' }}>
          <p>The Faculty Home Page serves as the primary interface and entry point for faculty members after successful login into the system. It is designed as a centralized dashboard that provides an overview of the user’s interaction with the library system and ensures easy access to various functionalities.</p>
        </div>
        <hr />
        
        <div style={{ fontSize: '25px' }}>
          <h3 style={{ color: '#1e40af', fontSize: '30px' }}>Purpose</h3>
          <p>The main purpose of the Faculty Home Page is to present important information in a clear and organized manner, allowing faculty members to efficiently manage their library-related activities. It reduces navigation complexity by offering quick access to frequently used features.</p>

          <h3 style={{ color: '#1e40af', fontSize: '30px' }}>Dashboard Overview</h3>
          <p>The home page displays a summary of key information such as the number of books currently borrowed, due dates, and active reservations. This helps faculty members quickly understand their current status without accessing multiple sections.</p>
        


        <h3 style={{ color: '#1e40af', fontSize: '30px' }}>Notifications and Alerts</h3>
          <p>The system provides a notification section that informs faculty about important updates such as upcoming due dates, overdue books, and availability of reserved books. These alerts help users take timely actions and avoid penalties.</p>


           <h3 style={{ color: '#1e40af', fontSize: '30px' }}>Quick Access Features</h3>
          <p>The home page includes quick access options or shortcuts to major functionalities such as searching books, viewing borrowing history, recommending new books, and accessing profile details. This improves usability and saves time.</p>



        </div>

        <hr />

        <h3 style={{ textDecoration: 'underline', color: '#1e40af', fontSize: '30px' }}>Give Feedback</h3>
        <div style={{ fontSize: '25px' }}>
          <form onSubmit={handleSubmit}>
            <label>Enter Your Name: </label><br/>
            <input 
              type="text" 
              style={{ fontSize: '20px', width: '300px', height: '35px', marginBottom: '15px' }} 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              required 
            />
            <br />
            <label>Enter Your Department:</label><br/>
            <input 
              type="text" 
              style={{ fontSize: '20px', width: '300px', height: '35px', marginBottom: '15px' }} 
              value={dept} 
              onChange={(e) => setDept(e.target.value)} 
              required 
            />
            <br />
            <label>Give Feedback:</label><br/>
            <textarea 
              style={{ width: '95%', height: '100px', fontSize: '20px', padding: '10px' }} 
              value={feedback} 
              onChange={(e) => setFeedback(e.target.value)} 
              required 
            ></textarea>
            <br /><br />
            <button type="submit" style={{ 
              backgroundColor: '#1e40af', 
              color: 'white', 
              padding: '10px 30px', 
              borderRadius: '50px', 
              border: 'none', 
              cursor: 'pointer',
              fontSize: '20px',
              marginLeft: '40%'
            }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FacultyDashboard;
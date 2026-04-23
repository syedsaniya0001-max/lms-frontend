import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showNotification, setShowNotification] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Greeting Logic
  const getGreeting = () => {
    const hours = currentTime.getHours();
    if (hours < 12) return "🌅 Good Morning!";
    if (hours < 16) return "☀ Good Afternoon!";
    return "🌙 Good Evening!";
  };

  // Toggle Sidebar
  const toggleMenu = () => setIsSidebarOpen(!isSidebarOpen);

  // Toggle Notification (Auto-hide after 5 seconds)
  const toggleNotification = () => {
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 5000);
  };

  const showHelp = () => {
    alert("Contact Librarian:\nEmail: library@college.com");
  };

  // Logout Logic (Alert only, no popup)
  const handleLogout = () => {
    alert("✅ Logged out successfully!");
    navigate('/'); // Redirect to landing page
  };

  const styles = `
    .dashboard-body { margin: 0; font-family: Arial; background: #1e40af; min-height: 100vh; color: #333; }
    .header { display: flex; justify-content: space-between; align-items: center; background: black; color: white; padding: 10px 20px; position: sticky; top: 0; z-index: 1001; }
    .menu-icon { font-size: 25px; cursor: pointer; }
    .right-icons button { margin-left: 10px; padding: 5px 15px; cursor: pointer; border-radius: 20px; border: none; background-color: #1abc9c; color: white; transition: 0.3s; }
    .right-icons button:hover { background: #16a085; }

    .sidebar { position: fixed; top: 0; left: ${isSidebarOpen ? '0' : '-250px'}; width: 250px; height: 100%; background: #1e40af; color: white; padding-top: 60px; transition: 0.3s; z-index: 1000; box-shadow: 2px 0 10px rgba(0,0,0,0.3); }
    .sidebar a { display: block; padding: 15px 20px; color: white; text-decoration: none; transition: 0.3s; cursor: pointer; }
    .sidebar a:hover { background: #1abc9c; padding-left: 30px; }

    .content { padding: 20px; }
    .box { background: white; padding: 20px; border-radius: 10px; margin-top: 20px; transition: all 0.3s ease-in-out; animation: fade 0.4s ease; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
    .box:hover { transform: translateY(-5px); box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2); }

    .notification-popup { position: fixed; top: 70px; right: 20px; background: white; border: 1px solid gray; padding: 15px; width: 250px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); z-index: 1002; border-radius: 8px; animation: fadeIn 0.4s ease; }
    
    .feedback input, .feedback textarea { width: 100%; margin-top: 10px; padding: 10px; border-radius: 5px; border: 1px solid #ccc; box-sizing: border-box; }
    .feedback input:focus, .feedback textarea:focus { outline: none; border: 2px solid #1abc9c; box-shadow: 0 0 5px #1abc9c; }
    .feedback button { display: block; margin: 20px 0 0 auto; padding: 12px 30px; background: #1e40af; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; }

    @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
    @keyframes fade { from { opacity: 0; } to { opacity: 1; } }
  `;

  return (
    <div className="dashboard-body">
      <style>{styles}</style>

      {/* Header */}
      <div className="header">
        <span className="menu-icon" onClick={toggleMenu}>☰</span>
        <h2>Student Library Dashboard</h2>
        <div className="right-icons">
          <button onClick={toggleNotification}>🔔 Notification</button>
          <button onClick={showHelp}>Help</button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <a onClick={() => { setActiveSection('home'); setIsSidebarOpen(false); }}><i className="fas fa-home"></i> Home</a>
        <a onClick={() => navigate('/student-profile')}><i className="fa-solid fa-user"></i> Profile</a>
        <a onClick={() => navigate('/student-books')}><i className="fas fa-book"></i> Books</a>
        <a onClick={() => navigate('/student-borrow')}><i className="fas fa-book-reader"></i> Borrowed</a>
        <a onClick={() => navigate('/student-return')}><i className="fas fa-check"></i> Returned</a>
        <a onClick={handleLogout} style={{color: '#ff4d4d'}}>Logout</a>
      </div>

      {/* Notification Popup */}
      {showNotification && (
        <div className="notification-popup">
          <p><b>📅 Borrowed Date:</b> 10-Mar-2026</p>
          <p><b>⏳ Days Left:</b> 3 days</p>
          <p><b>⚠ Fine:</b> ₹20 (if extended)</p>
        </div>
      )}

      <div className="content">
        {/* Greeting Box */}
        <div className="box">
          <h3>{getGreeting()}</h3>
          <p>Current Time: {currentTime.toLocaleTimeString()}</p>
        </div>

        {/* Dynamic Sections */}
        {activeSection === 'home' && (
          <div className="box">
            <h3>Home - Dashboard Overview</h3>
            <p>This is the main dashboard of the Student Library System. It provides a quick overview of all activities performed by the student.</p>
            <p>From here, you can access different features like viewing books, checking borrowed books, and returning books.</p>
          </div>
        )}

        {/* Feedback Box */}
        <div className="box feedback">
          <h3>Feedback</h3>
          <input type="text" placeholder="Your Name" />
          <textarea placeholder="Write your feedback" rows="4"></textarea>
          <button onClick={() => alert("✅ Thank you for your feedback!")}><b>Submit</b></button>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
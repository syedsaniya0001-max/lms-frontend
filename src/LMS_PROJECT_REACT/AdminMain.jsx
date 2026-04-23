import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminMain = () => {
  // State to handle sidebar opening/closing
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="admin-main-page">
      <style>{`
        .admin-main-page {
          background-image: url("background.jpeg");
          background-position: center;
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          min-height: 100vh;
          font-family: sans-serif;
          margin: 0;
        }

        /* Sidebar Toggle Button */
        .bar {
          font-size: 30px;
          padding: 8px 15px;
          cursor: pointer;
          background-color: #1e40af;
          color: white;
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10;
          border-radius: 0 0 5px 0;
        }

        /* Sidebar Container */
        .sidebar {
          position: fixed;
          top: 0;
          width: 250px;
          left: ${isOpen ? '0' : '-250px'};
          height: 100%;
          background-color: aliceblue;
          transition: 0.5s;
          z-index: 5;
          box-shadow: 2px 0 10px rgba(0,0,0,0.2);
        }

        .sidebar ul {
          padding-top: 60px;
          padding-left: 0;
          list-style: none;
        }

        .sidebar li {
          padding: 15px 20px;
          font-size: 18px;
        }

        .sidebar a {
          text-decoration: none;
          color: black;
          transition: 0.3s;
        }

        .sidebar li:hover a {
          color: #1e40af;
          font-weight: bold;
        }

        /* Main Content Area */
        .content {
          padding: 80px 20px;
          transition: 0.5s;
          margin-left: ${isOpen ? '250px' : '0'};
        }

        .title {
          text-align: center;
          background-color: #1e40af;
          color: white;
          height: 100px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 3px solid black;
          margin-bottom: 40px;
          transition: 0.5s;
          position: relative;
        }

        .title:hover {
          transform: scale(1.03);
        }

        .logo {
          height: 80px;
          position: absolute;
          right: 20px;
        }

        /* Cards Layout */
        .cards {
          display: flex;
          gap: 30px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .card {
          width: 300px;
          height: 340px;
          border: 2px solid black;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-evenly;
          background: aliceblue;
          border-radius: 9px;
          transition: 0.5s;
        }

        .card:hover {
          transform: scale(1.05);
        }

        .circle {
          width: 120px;
          height: 120px;
          border: 2px solid black;
          display: flex;
          justify-content: center;
          align-items: center;
          background: white;
          overflow: hidden;
        }

        .circle img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .card p {
          font-size: 30px;
          margin: 0;
        }

        .card a {
          color: #1e40af;
          text-decoration: none;
          font-weight: bold;
        }

        .logout-btn {
          background-color: #1e40af;
          color: white;
          cursor: pointer;
          border: none;
          padding: 10px 20px;
          font-weight: bold;
          border-radius: 5px;
        }
      `}</style>

      {/* Sidebar Toggle */}
      <div className="bar" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? '✕' : '☰'}
      </div>

      {/* Sidebar Navigation */}
      <div className="sidebar">
        <ul>
          <li><Link to="#">Home</Link></li>
          <li><Link to="/admin-profile">Profile</Link></li>
          <li><Link to="/admin-books">Books</Link></li>
          <li><Link to="/admin-student-logins">Student Logins</Link></li>
          
          <li><Link to="/admin-faculty">Faculty Logins</Link></li>
          <li><Link to="/admin-librarian">Librarian Logins</Link></li>
          <li><Link to="/admin-backup">Backup & Restore</Link></li>
          <li><Link to="/admin-ratings">Ratings</Link></li>
          <li style={{ marginTop: '20px' }}>
            <Link to="/">
              <button className="logout-btn">Log Out</button>
            </Link>
          </li>
        </ul>
      </div>

      {/* Page Content */}
      <div className="content">
        <div className="title">
          <h2>Requests From</h2>
          <img src="logo.png" alt="logo" className="logo" />
        </div>



        <div className="cards">
          {/* Student Card */}
          <div className="card">
            <div className="circle">
              <img src="stu_img.jpeg" alt="Student" />
            </div>
            <p><Link to="/admin-stu-req">Student</Link></p>
          </div>

          {/* Faculty Card */}
          <div className="card">
            <div className="circle">
              <img src="admin_re_fac1.jpeg" alt="Faculty" />
            </div>
            <p><Link to="/admin-fac-req">Faculty</Link></p>
          </div>

          {/* Librarian Card */}
          <div className="card">
            <div className="circle">
              <img src="admin_re_lib1.jpeg" alt="Librarian" />
            </div>
            <p><Link to="/admin-lib-req">Librarian</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminMain;
import { Link } from 'react-router-dom';
import React from 'react';

const Home = () => {
  return (
    <div className="home-page">
      <style>{`
        .home-page {
          background-image: url("1.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-attachment: fixed;
          min-height: 100vh;
          padding: 10px;
          font-family: sans-serif;
        }

        h1 {
          font-size: 75px;
          text-align: center;
          background-color: #1e40af;
          border-radius: 10px;
          color: white;
          padding: 10px;
          transition: 0.5s;
        }

        h1:hover {
          transform: scale(1.09);
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          background-color: #1e40af;
          border-radius: 10px;
          position: sticky;
          top: 0;
          padding: 0 20px;
          z-index: 100;
        }

        .links a {
          color: white;
          text-decoration: none;
          font-size: 25px;
          margin-right: 25px;
          padding: 5px;
        }

        .links a:hover {
          background-color: black;
          color: deepskyblue;
          border-radius: 5px;
        }

        .btn {
          font-size: 25px;
          padding: 15px;
          border-radius: 10px;
          background-color: black;
          color: white;
          text-decoration: none;
        }

        article {
          background-color: rgba(240, 248, 255, 0.9);
          font-size: 25px;
          color:black;
          border-radius: 25px;
          padding: 20px;
          margin: 50px 20px;
          border: 1px solid black;
          overflow: hidden; /* Clears the float */
        }

        .float-box {
          float: left;
          margin-right: 20px;
        }

        .logo-img {
          height: 51px;
        }

        .vemu-logo {
          height: 60px;
          transition: 0.5s;
        }

        .vemu-logo:hover {
          transform: scale(1.05);
        }

        footer {
          text-align: center;
          color: white;
          background-color: rgba(30, 64, 175, 0.8);
          border-radius: 0px 20px 0px 20px;
          margin: 20px auto;
          width: 50%;
          font-size: 21px;
          padding: 10px;
        }
      `}</style>

    
      <h1>Library Management System</h1>

      <nav>
        <div className="hello">
          <img src="logo.png" alt="VEMU IT LOGO" className="vemu-logo" />
        </div>

        <div className="links">
  <Link to="/">Home</Link>
  <Link to="/about">About</Link>
  <Link to="/contact">Contact Us</Link>
  <Link to="/new">New Arrivals</Link>
  <Link to="/help">Help</Link>
</div>

        <div className="login">
          <Link to="/logins" className="btn">Login</Link>
          
        </div>
      </nav>

      <section>
        <article>
          <h2 style={{ color: '#1e40af' }}>What is Library?</h2>
          
          <div className="float-box">
            <img src="Screenshot_22-2-2026_124049_www.bing.com.jpeg" alt="library" className="logo-img" />
          </div>

          <p>
            A library is a knowledge center where information is collected, organized, and preserved for learning and research. 
            It is a quiet space that encourages reading, thinking, and discovery.
            A library not only stores books but also provides access to digital resources, journals, and study materials, 
            helping people expand their knowledge and improve their skills.
          </p>

          <h2 style={{ textDecoration: 'underline', color: '#1e40af' }}>Famous Authors</h2>

          <div>
            <h3>1. William Shakespeare</h3>
            <p>English playwright and poet, widely regarded as one of the greatest writers in the English language.</p>
          </div>

          <div>
            <h3>2. J.K. Rowling</h3>
            <p>British author best known for writing the Harry Potter series.</p>
          </div>

          <div>
            <h3>3. Rabindranath Tagore</h3>
            <p>Indian poet and philosopher, the first non-European to win the Nobel Prize in Literature.</p>
          </div>

          <div>
            <h4>4. Dr. A.P.J. Abdul Kalam</h4>
            <p>Indian scientist and 11th President of India, author of Wings of Fire.</p>
          </div>
        </article>
      </section>

      <footer>
        <h3>“Unlock the world of wisdom with your <a href="#" style={{ color: 'bisque' }}>login</a>”</h3>
      </footer>
    </div>
  );
};

export default Home;
import { Link } from 'react-router-dom';
import React from 'react';

const About = () => {
  return (
    <div className="about-container">
      <style>{`
        .about-container {
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background-color: #f4f7f6;
          min-height: 100vh;
          text-align: center;
        }

        .header img {
          height: 80px;
          margin-bottom: 20px;
        }

        .about-us, .vision-mission {
          background-color: white;
          border-radius: 15px;
          padding: 30px;
          margin: 20px auto;
          max-width: 1000px;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          text-align: left;
        }

        h2 {
          color: #1e40af;
          border-bottom: 2px solid #1e40af;
          display: inline-block;
          margin-bottom: 20px;
        }

        .about-us p, .vm li {
          font-size: 18px;
          line-height: 1.6;
          color: #333;
        }

        .vm h3 {
          color: #1e40af;
          margin-top: 20px;
        }

        .gallery {
          display: flex;
          flex-direction: column;
          gap: 20px;
          align-items: center;
          margin-top: 30px;
        }

        .gallery div {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
        }

        .gallery img {
          border-radius: 10px;
          box-shadow: 0 4px 6px rgba(0,0,0,0.2);
          transition: transform 0.3s;
          object-fit: cover;
        }

        .gallery img:hover {
          transform: scale(1.1);
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .about-us, .vision-mission {
            margin: 10px;
            padding: 15px;
          }
        }
          .main-body{
          background-color:#1e40af;
          }
      `}</style>
<div class="main-body">
      <div className="header">
        <img src="logo.png" alt="logo" />
      </div>

      <div className="about-us">
        <h2>ABOUT US</h2>
        <p>
          The library, easily accessible to all the departments on the campus,
          has steadily increased over the years and it has about 30,339 books on
          various subjects, 4,695 titles, and 117 printed journals. The
          collection of the library includes textbooks, reference books,
          general books, Project Reports, back volumes of journals and
          magazines.
        </p>
        <h3 style={{ paddingTop: '45px', color: '#1e40af' }}>Department Libraries</h3>
        <p>
          Every department has a separate departmental library which contains
          a good number of reference books along with various project reports done
          by the students, for the reference of faculty and students.
        </p>
      </div>

      <div className="vision-mission">
        <h2 style={{ color: 'black' }}>VISION AND MISSION</h2>
        <div className="vm">
          <h3>Our Vision :</h3>
          <ul>
            <li>
              To be a premier institute for professional education producing a dynamic
              and vibrant force of technocrats with competent skills, innovative
              ideas and leadership qualities to serve the society with an ethical and
              benevolent approach.
            </li>
          </ul>
          <h3>Our Mission :</h3>
          <ul>
            <li>
              To create a learning environment with state-of-the-art infrastructure,
              well-equipped laboratories, research facilities and qualified senior
              faculty to impart high-quality technical education.
            </li>
            <li>
              To facilitate the learners to foster innovative ideas, inculcate
              competent research and consultancy skills through Industry-Institute
              Interaction.
            </li>
            <li>
              To develop hard work, honesty, leadership qualities and a sense of
              direction in rural youth by providing value-based education.
            </li>
          </ul>
        </div>
      </div>

      <h2 style={{ color: 'black', paddingTop: '50px' }}>IMAGE GALLERY</h2>
      
      <div className="gallery">
        <div>
          <img src="2 Library Reference Section.jpg.jpeg" alt="Library" width="250" height="250" />
          <img src="vemu_library.jpg.jpeg" alt="Vemu Library" width="250" height="250" />
          <img src="IMG_9709.jpg.jpeg" alt="Library Interior" width="250" height="250" />
          <img src="2.jpg.jpeg" alt="Bookshelf" width="250" height="250" />
        </div>
        <div>
          <img src="11.jpg.jpeg" alt="Study Area" width="250" height="250" />
          <img src="3.jpg.jpeg" alt="Library Hall" width="250" height="250" />
          <img src="book2.jpeg" alt="Close up books" width="250" height="250" />
          <img src="1.png" alt="Library Resource" width="250" height="250" />
        </div>
        
<div className="header">
  <Link to="/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }}>
    ← Back to Home
  </Link>
  <br />
  
</div>
      </div>
    </div>
    </div>
    
  );
};

export default About;
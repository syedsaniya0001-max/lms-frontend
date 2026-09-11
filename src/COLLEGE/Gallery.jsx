import React from "react";
import "./Gallery.css";
import homeimg from "../assets/homeimg.jpg";
// project\src\assets\homeimg3.webp
// import homeimg from "../assets/homeimg.jpg";
import homeimg1 from "../assets/homeimg1.jpg";
import homeimg2 from "../assets/homeimg2.jpg";
import homeimg3 from "../assets/homeimg3.webp";
import homeimg4 from "../assets/homeimg4.jpg";
import homeimg5 from "../assets/homeimg5.jpg";

// import img1 from "../assets/img1.jpg";
// import img2 from "../assets/img2.jpg";
// import img3 from "../assets/img3.jpg";
// import img4 from "../assets/img4.jpg";
// import img5 from "../assets/img5.jpg";
// import img6 from "../assets/img6.jpg";

function Gallery() {
  return (
    <section className="gallery-section" id="gallery">

      <h2 className="gall-head">Achievement Gallery</h2>

      <p className="gallery-text">
        Explore memorable moments from events, workshops, placements and student activities.
      </p>

      <div className="gallery-container">

        <div className="gallery-card">
          <img src={homeimg} alt="Hackathon" />
          <h3>Hackathon</h3>
        </div>

        <div className="gallery-card">
          <img src={homeimg1} alt="Workshop" />
          <h3>Workshop</h3>
        </div>

        <div className="gallery-card">
          <img src={homeimg2} alt="Placements" />
          <h3>Placements</h3>
        </div>

        <div className="gallery-card">
          <img src={homeimg3} alt="Sports" />
          <h3>Sports</h3>
        </div>

        <div className="gallery-card">
          <img src={homeimg4} alt="Cultural Fest" />
          <h3>Cultural Fest</h3>
        </div>

        <div className="gallery-card">
          <img src={homeimg5} alt="NSS" />
          <h3>NSS Activities</h3>
        </div>

      </div>

    </section>
  );
}

export default Gallery;
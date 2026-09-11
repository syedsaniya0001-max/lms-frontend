import "./Contact.css";

function Contact() {
  return (
    <section className="contact-section" id="contact">

      <h2>Contact Us</h2>
      <p className="contact-intro">
        Meet the team behind <strong>EduLentra</strong>. Feel free to reach out to us for any queries or feedback.
      </p>

      <div className="contact-cards">

        <div className="contact-card">
          <h3>👩B Janani</h3>
          <p><strong>Roll:</strong>  244M1A3104</p>
          <p>📧 janani202007@gmail.com</p>
          <p>📞 +91 98855 03580</p>
        </div>

        <div className="contact-card">
          <h3>👩 E Bhargavi</h3>
          <p><strong>Roll:</strong>  244M1A3110</p>
          <p>📧 bhargavi@gmail.com</p>
          <p>📞 +91 70325 58464</p>
        </div>

        <div className="contact-card">
          <h3>👩 S Saniya</h3>
          <p><strong>Roll:</strong>  244M1A3151</p>
          <p>📧 syedsaniya0001@gmail.com</p>
          <p>📞 +91 90323 03902</p>
        </div>

        <div className="contact-card">
          <h3>👩 Shaik Hanuf</h3>
          <p><strong>Roll:</strong> 244M1A3154</p>
          <p>📧 hanufshaik14@gmail.com</p>
          <p>📞 +91 96185 98058</p>
        </div>

      </div>

      <div className="contact-bottom">
        <div>
          <h4>EduLentra</h4>
          <p>Smart Campus Management System</p>
        </div>

        <div>
          <h4>Quick Links</h4>
          <p><a href="#home">Home</a> | <a href="#about">About</a> | <a href="#highlights">Highlights</a> | <a href="#login">Login</a> | <a href="#contact">Contact</a></p>
        </div>

        <div>
          <h4>Address</h4>
          <p>VEMU IT</p>
          <p>Chittoor, AP</p>
        </div>
      </div>

      <hr />

      <p className="copyright">
        &copy; 2026 EduLentra. All Rights Reserved.
      </p>

    </section>
  );
}

export default Contact;
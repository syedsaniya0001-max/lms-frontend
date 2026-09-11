import React, { useState } from "react";
import "./Hod.css";

function Hod() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className="hod-section">

      <div className="hod-title">
        <h1>EduLentra HoD Portal</h1>
        <p>Manage your department with ease.</p>
      </div>

      <div className="hod-container">

        {/* Department File */}
        <div className="department-file">

          <div className="file-tab">
            DEPARTMENT
          </div>

          <div className="file-content">

            <div className="file-heading">
              <span>📁</span>
              <div>
                <h2>Department Office</h2>
                <p>Head of Department</p>
              </div>
            </div>

           <div className="file-items">
    <div>✓ Monitor Department Attendance</div>
    <div>✓ Approve Outpass Requests</div>
    <div>✓ Review Student Complaints & Feedback</div>
    <div>✓ Manage Department Announcements</div>
</div>
            <div className="approval-stamp">
              ✓ APPROVED
            </div>

          </div>

        </div>

        {/* Login Box */}
        <div className="hod-login-box">

          {showLogin ? (
            <>
              <h2>HoD Login</h2>
              <p>Access your department portal</p>

              <input
                type="text"
                placeholder="HoD ID"
              />

              <input
                type="password"
                placeholder="Password"
              />

              <button>Login</button>

              <span>
                Don't have an account?
                <b onClick={() => setShowLogin(false)}>
                  Sign Up
                </b>
              </span>
            </>
          ) : (
            <>
              <h2>Create HoD Account</h2>
              <p>Register your department account</p>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="text"
                placeholder="HoD ID"
              />

              <input
                type="text"
                placeholder="Department"
              />

              <input
                type="email"
                placeholder="Email"
              />

              <input
                type="password"
                placeholder="Password"
              />

              <button>Sign Up</button>

              <span>
                Already have an account?
                <b onClick={() => setShowLogin(true)}>
                  Login
                </b>
              </span>
            </>
          )}

        </div>

      </div>

    </section>
  );
}

export default Hod;
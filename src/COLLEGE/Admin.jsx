import React, { useState } from "react";
import "./Admin.css";

function Admin() {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <section className="admin-section">

      <div className="admin-title">
        <h1>EduLentra Admin Portal</h1>
        <p>Manage your campus through one connected platform.</p>
      </div>

      <div className="laptop">

        {/* Laptop Screen */}
        <div className="laptop-screen">

          <div className="screen-content">

            <h2>Welcome to EduLentra</h2>
            <p className="admin-welcome">
              {showLogin ? "Admin Login" : "Create Admin Account"}
            </p>

            {showLogin ? (

              <div className="admin-form">

                <input
                  type="text"
                  placeholder="Admin ID"
                />

                <input
                  type="password"
                  placeholder="Password"
                />

                <button>Login</button>

                <p>
                  Don't have an account?
                  <span onClick={() => setShowLogin(false)}>
                    Sign Up
                  </span>
                </p>

              </div>

            ) : (

              <div className="admin-form">

                <input
                  type="text"
                  placeholder="Full Name"
                />

                <input
                  type="email"
                  placeholder="Email"
                />

                <input
                  type="text"
                  placeholder="Admin ID"
                />

                <input
                  type="password"
                  placeholder="Password"
                />

                <button>Sign Up</button>

                <p>
                  Already have an account?
                  <span onClick={() => setShowLogin(true)}>
                    Login
                  </span>
                </p>

              </div>

            )}

          </div>

        </div>

        {/* Laptop Base */}
        <div className="laptop-base">
          <div className="keyboard"></div>
          <div className="touchpad"></div>
        </div>

      </div>

    </section>
  );
}

export default Admin;
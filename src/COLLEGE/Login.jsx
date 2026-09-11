import React from "react";
import "./Login.css";

function Login() {
  return (
    <section className="login-section" id="login">
      <h1>Login Portal</h1>
      <p className="login-text">
        Select your role to view the login procedure.
      </p>

      <div className="cards">

        {/* Admin */}
        <div className="card">
          <div className="card-inner">

            <div className="card-front">
              <h3>👨‍💼</h3>
              <h2>Admin Login</h2>
            </div>

            <div className="card-back">
              <h3>Admin Login</h3>
              <ol>
                <li>Click <b>Admin Login</b>.</li>
                <li>Enter Admin ID.</li>
                <li>Enter Password.</li>
                <li>Click <b>Login</b>.</li>
                <li>Manage users, departments & portal.</li>
              </ol>
            </div>

          </div>
        </div>

        {/* HoD */}
        <div className="card">
          <div className="card-inner">

            <div className="card-front">
              <h3>🎓</h3>
              <h2>HoD Login</h2>
            </div>

            <div className="card-back">
              <h3>HoD Login</h3>
              <ol>
                <li>Select <b>HoD Login</b>.</li>
                <li>Enter HoD ID.</li>
                <li>Enter Password.</li>
                <li>Click <b>Login</b>.</li>
                <li>View reports & approve requests.</li>
              </ol>
            </div>

          </div>
        </div>

        {/* Faculty */}
        <div className="card">
          <div className="card-inner">

            <div className="card-front">
              <h3>👩‍🏫</h3>
              <h2>Faculty Login</h2>
            </div>

            <div className="card-back">
              <h3>Faculty Login</h3>
              <ol>
                <li>Select <b>Faculty Login</b>.</li>
                <li>Enter Faculty ID.</li>
                <li>Enter Password.</li>
                <li>Click <b>Login</b>.</li>
                <li>Manage attendance & notes.</li>
              </ol>
            </div>

          </div>
        </div>

        {/* Student */}
        <div className="card">
          <div className="card-inner">

            <div className="card-front">
              <h3>👨‍🎓</h3>
              <h2>Student Login</h2>
            </div>

            <div className="card-back">
              <h3>Student Login</h3>
              <ol>
                <li>Click <b>Student Login</b>.</li>
                <li>Enter Roll Number.</li>
                <li>Enter Password.</li>
                <li>Click <b>Login</b>.</li>
                <li>Access attendance, notes & placements.</li>
              </ol>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default Login;
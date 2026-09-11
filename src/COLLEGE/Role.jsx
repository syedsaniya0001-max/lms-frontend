import React from "react";
import { Link } from "react-router-dom";
import "./Role.css";

function Role() {
  return (
    <div className="role-page" id="role">

      <h1 className="title">Choose Your Role</h1>

      <p className="subtitle">
        Select your portal to continue
      </p>

      <div className="role-container">

        <Link to="/student" className="role-card student">
          <div className="icon">📖</div>
          <h2>Student</h2>
          <p>Learning Portal</p>
        </Link>

        <Link to="/faculty" className="role-card faculty">
          <div className="icon">🧑‍🏫</div>
          <h2>Faculty</h2>
          <p>Teaching Portal</p>
        </Link>

        <Link to="/hod" className="role-card hod">
          <div className="icon">🏫</div>
          <h2>HOD</h2>
          <p>Department Portal</p>
        </Link>

        <Link to="/admin" className="role-card admin">
          <div className="icon">💻</div>
          <h2>Admin</h2>
          <p>Management Portal</p>
        </Link>

      </div>

    </div>
  );
}

export default Role;
import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./Lregister.css";

const Lregister = () => {
  // Gmail address
  const gmailAddress = "mailto:chethana537@gmail.com";

  return (
    <div className="Admin-Dashboard">
      <header className="Home-header">
        <h1>
          <center>ADMIN DASHBOARD</center>
        </h1>
        {/* Use anchor tag to open Gmail */}
        <a href={gmailAddress} target="_blank" rel="noopener noreferrer">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginBottom: "20px",
            }}
          >
            Requests
          </button>
        </a>

        {/* Other buttons */}
        <Link to="/users">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginBottom: "20px",
            }}
          >
            Lecturers
          </button>
        </Link>

        <Link to="/students">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginBottom: "20px",
            }}
          >
            Students
          </button>
        </Link>

        <Link to="/courses">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginTop: "10px",
            }}
          >
            Course Module
          </button>
        </Link>

        <Link to="/timetables">
          <button
            className="users-button"
            style={{
              marginRight: "20px",
              width: "300px",
              height: "100px",
              marginTop: "20px",
            }}
          >
            Create Time Table
          </button>
        </Link>
      </header>
    </div>
  );
};

export default Lregister;

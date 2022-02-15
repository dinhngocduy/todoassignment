import React from "react";
import { Link } from "react-router-dom";
import profilePic from "../img/profile.jpg";
const About = () => {
  const userName = localStorage.getItem("Name").replace(/"/g, "");
  const Email = localStorage.getItem("Email").replace(/"/g, "");

  return (
    <main>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Account Details
      </h1>
      <div className="card">
        <img src={profilePic} alt="John" style={{ width: "100%" }} />
        <h1>User Name: {userName}</h1>
        <p className="title">Email: {Email}</p>
        <Link
          to="/changePassword"
          style={{ textDecoration: "underline", color: "rgb(11, 93, 215)" }}
        >
          Change Password
        </Link>

        <p>
          <Link to="/changeDetails">
            <button>Change User Details</button>
          </Link>
        </p>
      </div>
    </main>
  );
};

export default About;

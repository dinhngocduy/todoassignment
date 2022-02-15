import React, { useState } from "react";
import PropTypes from "prop-types";
import Registration from "./Registration";
import { Link } from "react-router-dom";

const Login = ({ setToken }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [flag, setFlag] = useState("");
  async function loginUser(credentials) {
    return fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(credentials),
    }).then((data) => data.json());
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      userName,
      password,
    });
    let pass = localStorage.getItem("Password").replace(/"/g, "");
    let mail = localStorage.getItem("Email").replace(/"/g, "");
    // .replace(/"/g,"") is used to remove the double quotes for the string

    if (!userName || !password) {
      setFlag(true);
      console.log("EMPTY");
    } else if (password !== pass || userName !== mail) {
      setFlag(true);
    } else {
      setFlag(false);
      setToken(token);
    }
  };
  const handleClick = () => {
    window.location.reload();
  };
  return (
    <div style={{ textAlign: "center" }}>
      <form
        className="regisForm"
        name="registerForm"
        action="#"
        onSubmit={handleSubmit}
      >
        <b>Log In</b>
        <div className="userName">
          <p>Email: </p>
          <input
            type="text"
            name="userName"
            id="userName"
            errorMessage="aaa"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
            style={{ width: "100%" }}
          />
          <div className="errorMessage" id="alertUsername"></div>
        </div>

        <div className="password">
          <p>Password: </p>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            required
            errorMessage="aaa"
            pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
            title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
            style={{ width: "100%" }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="errorMessage" id="alertPassword"></div>
        </div>
        {flag && (
          <p color="primary" variant="warning">
            Fill correct Info else keep trying.
          </p>
        )}
        <input
          type="submit"
          className="btn btn-dark btn-lg btn-block"
          value="Log In"
          name="button"
          style={{ width: "30%" }}
        />
        <Link onClick={handleClick} style={{ color: "black" }}>
          Sign Up
        </Link>
      </form>
    </div>
  );
};

export default Login;
Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

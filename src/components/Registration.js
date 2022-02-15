import React, { useState } from "react";
import { Link } from "react-router-dom";

import Login from "./Login";

function Registration({ setToken }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatNewPassword, setRepeatNewPassword] = useState();

  const [flag, setFlag] = useState(false);
  const [login, setLogin] = useState(true);

  // on form submit...
  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password) {
      setFlag(true);
    } else if (password !== repeatNewPassword) {
      setFlag(true);
    } else {
      setFlag(false);
      localStorage.setItem("Email", JSON.stringify(email));
      localStorage.setItem("Password", JSON.stringify(password));
      localStorage.setItem("Name", JSON.stringify(name));

      setLogin(!login);
    }
  }

  // Directly to the login page
  function handleClick() {
    setLogin(!login);
  }

  return (
    <section>
      <div>
        {" "}
        {login ? (
          <form className="regisForm" onSubmit={handleFormSubmit}>
            <h3>Register</h3>

            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter User Name"
                name="name"
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter password"
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Re Enter Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re Enter password"
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
                onChange={(event) => setRepeatNewPassword(event.target.value)}
              />
            </div>
            <button type="submit" className="btn btn-dark btn-lg btn-block">
              Register
            </button>
            <p className="forgot-password text-right">
              Already registered? <Link onClick={handleClick}>Log In</Link>
            </p>
            {flag && (
              <p color="primary" variant="danger">
                I got it you are in hurry! But every Field is important!
              </p>
            )}
          </form>
        ) : (
          <Login setToken={setToken} />
        )}
      </div>
      )
    </section>
  );
}

export default Registration;

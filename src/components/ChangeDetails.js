import React, { useEffect, useState } from "react";

const ChangeDetails = () => {
  const [editUserName, setEditUserName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const userName = localStorage.getItem("Name").replace(/"/g, "");
  const email = localStorage.getItem("Email").replace(/"/g, "");
  useEffect(() => {
    setEditEmail(email);
    setEditUserName(userName);
  }, []);
  const handleSave = (e) => {
    e.preventDefault();
    localStorage.setItem("Email", editEmail);
    localStorage.setItem("Name", editUserName);
    setFlag(true);
  };
  return (
    <main>
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Change User Details
      </h1>
      <form
        action=""
        onSubmit={(e) => {
          handleSave(e);
        }}
      >
        <label htmlFor="userName">Username</label>
        <input
          type="text"
          required
          id="userName"
          value={editUserName}
          onChange={(e) => {
            setEditUserName(e.target.value);
          }}
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          required
          id="email"
          value={editEmail}
          onChange={(e) => {
            setEditEmail(e.target.value);
          }}
        />

        <button
          type="submit"
          style={{ marginTop: "30px", marginBottom: "30px" }}
          className="btn btn-dark btn-lg btn-block"
        >
          Save Changes
        </button>
        {flag && (
          <b
            style={{
              backgroundColor: "rgb(211, 237, 218)",
              color: "rgb(38, 87, 36)",
              width: "50%",
              textAlign: "center",
            }}
          >
            Change Complete!
          </b>
        )}
      </form>
    </main>
  );
};

export default ChangeDetails;

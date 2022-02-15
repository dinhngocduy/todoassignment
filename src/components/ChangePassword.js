import React, { useState } from "react";

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState();
  const [newPassword, setNewPassword] = useState();
  const [repeatNewPassword, setRepeatNewPassword] = useState();

  const [flag, setFlag] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const password = localStorage.getItem("Password").replace(/"/g, "");
    console.log(currentPassword);
    console.log(password);

    if (currentPassword !== password || newPassword !== repeatNewPassword) {
      setFlag(true);
    } else if (currentPassword === password) {
      setFlag(false);

      localStorage.setItem("Password", newPassword);
      setTimeout(removeToken, 2000);
    }
  };
  const removeToken = () => {
    localStorage.removeItem("token");

    window.location.reload();
  };
  return (
    <main>
      <h1>Change Password</h1>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="password">Enter Your Current Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Current Password"
          required
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
        <label htmlFor="newPassword">Enter Your New Password</label>
        <input
          type="password"
          name="password"
          id="newPassword"
          placeholder="Enter New Password"
          required
          errorMessage="aaa"
          pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <label htmlFor="reNewPassword">Re-enter Your New Password</label>
        <input
          type="password"
          name="password"
          id="reNewPassword"
          placeholder="Re enter your new Password"
          required
          errorMessage="aaa"
          pattern="^(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
          title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters"
          onChange={(e) => setRepeatNewPassword(e.target.value)}
        />
        <button type="submit" className="btn btn-dark btn-lg btn-block">
          Change Password
        </button>
        {flag === "" ? (
          <p color="primary" variant="warning"></p>
        ) : (
          <section>
            <p color="primary" variant="warning">
              Change PassWord Success! Please Login Again!
            </p>
          </section>
        )}
        {flag && (
          <p color="primary" variant="warning">
            Fill correct Info else keep trying.
          </p>
        )}
      </form>
    </main>
  );
};

export default ChangePassword;

import React from "react";
import { DropdownButton, Dropdown } from "react-bootstrap";

const Header = () => {
  const userName = localStorage.getItem("Name").replace(/"/g, "");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };
  const deleteAccount = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <header className="Header">
      <h1>{userName}'s Missons List </h1>
      <DropdownButton id="dropdown-basic-button" title="Options">
        <Dropdown.Item href="/changePassword">Change Password</Dropdown.Item>

        <Dropdown.Item href="#/action-2" onClick={deleteAccount}>
          Delete Account
        </Dropdown.Item>
        <Dropdown.Item href="#/action-3" onClick={handleLogout}>
          Log Out
        </Dropdown.Item>
      </DropdownButton>
    </header>
  );
};

export default Header;

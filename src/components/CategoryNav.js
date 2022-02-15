import React from "react";
import { Link } from "react-router-dom";

const CategoryNav = () => {
  return (
    <nav className="Nav" id="subNav">
      <ul>
        <li>
          <Link to="/lowPrio">Low Priority</Link>
        </li>
        <li>
          <Link to="/midPrio">Medium Priority</Link>
        </li>
        <li>
          <Link to="/highPrio">High Priority</Link>
        </li>
        <li>
          <Link to="/">All Missions</Link>
        </li>
      </ul>
    </nav>
  );
};

export default CategoryNav;

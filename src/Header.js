import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "./hooks/useWindowSize";
const Header = ({ title }) => {
  const { width } = useWindowSize();
  return (
    <header className="Header">
      <h1>{title} Fixed</h1>
      {width < 768 ? (
        <FaMobileAlt className="headerIcon" />
      ) : width < 992 ? (
        <FaTabletAlt className="headerIcon" />
      ) : (
        <FaLaptop className="headerIcon" />
      )}
    </header>
  );
};

export default Header;

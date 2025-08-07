import React from "react";
import "./Header.css";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="header">
        <div className="navbar">
            <Navbar/>
        </div>
    </div>
  );
};

export default Header;

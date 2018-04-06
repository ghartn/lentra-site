import React from "react";
import { Link } from "react-router-dom";
import "../css/header.css";
import logo from "../img/logo.png";

const Header = () => {
  return (
    <div className="row">
      <div className="two columns">
        <Link className="logo" to="/">
          <img src={logo} />
        </Link>
      </div>
    </div>
  );
};

export default Header;

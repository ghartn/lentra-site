import React from "react";
import { NavLink } from "react-router-dom";
import "../css/navigation.css";

const Navigation = props => {
  return (
    <div className="navigation">
      <ul className="nav">
        <li className="nav-item">
          <NavLink to="/about" activeClassName="nav-item-active">
            about
          </NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink to="/media" activeClassName="nav-item-active">
            media
          </NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink to="/press" activeClassName="nav-item-active">
            press
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="nav-item-active">
            contact
          </NavLink>
        </li>
        <li className="nav-item">
          <a href="http://lentralentra.bigcartel.com/">merch</a>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

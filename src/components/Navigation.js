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
          <NavLink to="/music" activeClassName="nav-item-active">
            music
          </NavLink>
        </li>{" "}
        <li className="nav-item">
          <NavLink to="/contact" activeClassName="nav-item-active">
            contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;

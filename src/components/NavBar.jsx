import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => (
  <nav className="navbar navbar-expand-lg bg-primary">
      <div className="navbar-brand">brand</div>
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink exect className="nav-link active" aria-current="page" to="/">
            Home
          </NavLink>
        </li>

        <li className="nav-item">
          <NavLink exect className="nav-link active" aria-current="page" to="/about">
            About
          </NavLink>
        </li>
      </ul>
  </nav>
);

export default Navbar;

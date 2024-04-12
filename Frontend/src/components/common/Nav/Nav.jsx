import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";
function Nav() {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="./img/Bluebg_CDC.png" alt="logo" />
      </div>
      <input
        type="checkbox"
        id="click"
        checked={isActive}
        onChange={toggleMenu}
      />
      <label htmlFor="click" className="menu-btn">
        <i className="fas fa-bars"></i>
      </label>

      <ul>
        <li>
          <NavLink to={"/"} onClick={toggleMenu}>
            Home
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/about"}>About</NavLink>
        </li> */}
        <li>
          <NavLink to={"/team"} onClick={toggleMenu}>
            Team
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={"/event"}>Event</NavLink>
        </li> */}
        <li>
          <NavLink to={"/contact"} onClick={toggleMenu}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contest"} onClick={toggleMenu}>
            Contests
          </NavLink>
        </li>
        <li>
          <NavLink to={"/query"} onClick={toggleMenu}>
            Query
          </NavLink>
        </li>
        <li>
          <NavLink to={"/verify"} onClick={toggleMenu}>
            Verify
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

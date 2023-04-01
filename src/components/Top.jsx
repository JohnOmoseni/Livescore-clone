import React from "react";
import { NavLink, Routes, Route } from "react-router-dom";

function Top() {
  return (
    <nav id="tabs">
      <div className="tabs">
        <ul>
          <li>
            <NavLink to="/scores/football">Football</NavLink>
          </li>
          <li>
            <NavLink to="hockey">Hockey</NavLink>
          </li>
          <li>
            <NavLink to="basketball">Basketball</NavLink>
          </li>
          <li>
            <NavLink to="tennis">Tennis</NavLink>
          </li>
          <li>
            <NavLink to="cricket">Cricket</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Top;

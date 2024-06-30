import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex max-w-6xl item-center justify-between mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold">Auth-App</h1>
        </Link>
        <ul className="flex gap-4">
          <NavLink to="/">
            <li>Home</li>
          </NavLink>
          <NavLink to="/about">
            <li>About</li>
          </NavLink>
          <NavLink to="/sign-in">
            <li>Sign In</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Header;

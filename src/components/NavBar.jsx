import React, { useContext } from "react";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
const NavBar = () => {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="navbar bg-base-100  container mx-auto">
      <div className="navbar-start">
        <a className="btn btn-ghost  normal-case text-3xl font-mono">Shef Here</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive && "text-blue-400"
              }
            >
              {" "}
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive, isPending }) =>
                isActive && "text-blue-400"
              }
            >
              {" "}
              Blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive, isPending }) =>
                isActive && "text-blue-400"
              }
            >
              {" "}
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <span className="ring ring-green-600 rounded-full p-2">
          <FaUserAlt />
        </span>
        {currentUser ? (
          <Link to="/login" className="btn btn-outline btn-error ms-3">
            Logout
          </Link>
        ) : (
          <Link to="/login" className="btn btn-outline btn-error ms-3">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;

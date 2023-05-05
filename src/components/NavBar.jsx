import React, { useContext, useState } from "react";
import { FaUser, FaUserAlt } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
const NavBar = () => {
  const { currentUser, logOut } = useContext(AuthContext);
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const [log, setLog] = useState(true);
  const singOut = () => {
    logOut();
    navigate("/");
    setLog(false);
  };
  const menuHandler = () => {
    setNav(!nav);
  };

  const routes = [
    {
      id: 1,
      path: "/",
      pathName: "Home",
    },
    {
      id: 2,
      path: "/blogs",
      pathName: "Blogs",
    },
    {
      id: 3,
      path: "/contact",
      pathName: "Contact",
    },
  ];

  return (
    <div className=" bg-white shadow">
      <nav className="p-5 container mx-auto  md:flex md:items-center md:justify-between">
        <div className="flex justify-between items-center ">
          <Link to="/" className="text-2xl hover:text-4xl delay-200 transition-all duration-300 ease-in-out  cursor-pointer">
            Chef Here
          </Link>

          <span
            className="text-3xl cursor-pointer mx-2 md:hidden block"
            onClick={menuHandler}
          >
            <HiMenu />
          </span>
        </div>
        <ul
          className={`md:flex md:items-center z-40 md:z-auto absolute md:sticky bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100   transition-all ease-in duration-500 ${
            nav ? "top-[80px]" : "top-[-400px]"
          }`}
        >
          <li className="mx-4 my-6 md:my-0 order-last ">
            <span>
              {currentUser.photoURL && log ? (
                <img
                  src={currentUser.photoURL}
                  width="40px"
                  height="40px"
                  title={currentUser.displayName}
                  alt="user"
                  className="rounded-full ring ring-cyan-600"
                />
              ) : (
                <FaUser />
              )}
            </span>
          </li>

          {routes.map((r) => (
            <li key={r.id} className="mx-4 my-6 md:my-0">
              <NavLink
                to={r.path}
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600"
                    : "text-xl hover:text-cyan-500 duration-500"
                }
              >
                {r.pathName}
              </NavLink>
            </li>
          ))}
          {currentUser && log? (
            <button
              onClick={singOut}
              className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded "
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded "
            >
              Login
            </Link>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;

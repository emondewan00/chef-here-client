import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
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
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto flex justify-between px-4">
        <div className="text-sm my-auto">
          <p>&copy; 2023 Chef Here</p>
          <p>All rights reserved.</p>
        </div>
        <div>
          <ul>
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
          </ul>
        </div>
        <div className="text-sm">
          <p className="text-2xl">Contact Us</p>
          <p>1234 Main Street</p>
          <p>Anytown, USA 12345</p>
          <p>Phone: 555-555-5555</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

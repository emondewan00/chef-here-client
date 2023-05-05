import React from "react";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className="min-h-screen"><Outlet /></div>
      <Footer />
    </>
  );
};

export default Layout;

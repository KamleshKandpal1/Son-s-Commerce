import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import MoveToTopButton from "./Components/MoveToTopButton/MoveToTopButton";

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <MoveToTopButton />
      <Footer />
    </>
  );
}

export default Layout;

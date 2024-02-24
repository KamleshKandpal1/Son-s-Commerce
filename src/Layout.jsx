import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HeroPage from "./components/HeroPage/HeroPage";

function Layout() {
  return (
    <>
      <Header />
      <HeroPage />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;

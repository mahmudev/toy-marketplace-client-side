import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../componets/shared/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../componets/shared/Footer";

const Main = () => {
  return (
    <>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
      <ToastContainer />
    </>
  );
};

export default Main;

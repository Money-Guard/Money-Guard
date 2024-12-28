import React from "react";
import { Outlet } from "react-router";
import Header from "../Header";

const DashboardLayout = () => {
  return (
    <div>
      <Header/>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

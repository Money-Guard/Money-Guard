import React from "react";
import { Outlet } from "react-router";

const DashboardLayout = () => {
  return (
    <div>
      Dashboard
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;

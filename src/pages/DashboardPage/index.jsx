import React from "react";
import { Outlet } from "react-router";

export default function index() {
  return (
    <>
      <div>DashboardPage</div>
      <Outlet />
    </>
  );
}

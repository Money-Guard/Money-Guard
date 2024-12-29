

import React from "react";
import { Outlet } from "react-router"
export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <Outlet />
    </>
  );
}

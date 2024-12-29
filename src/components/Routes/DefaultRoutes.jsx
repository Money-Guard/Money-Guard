import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

const DefaultRoutes = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    return <Navigate to="/dashboard" replace />;
  }
  return <Outlet />;
};

export default DefaultRoutes;

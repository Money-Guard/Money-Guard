import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router";

export default function PrivateRoutes() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

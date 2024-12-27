import React from "react";
import { Outlet } from "react-router";
import Modal from "../../components/Modal";

export default function index() {
  return (
    <>
      <div>DashboardPage</div>
      <Modal/>
      <Outlet />
    </>
  );
}

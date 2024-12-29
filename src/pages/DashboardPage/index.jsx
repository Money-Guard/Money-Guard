

import React from "react";
import { Outlet } from "react-router"
import TransactionList from "../../components/TransactionList/index";
export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      <TransactionList />
      <Outlet />
    </>
  );
}

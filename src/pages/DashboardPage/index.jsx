

import React from "react";
import { Outlet } from "react-router"
import TransactionList from "../../components/TransactionList/index";
import TransactionsItem from "../../components/TransactionsItem/index";
import Modal from "../../components/Modal/index"
export default function DashboardPage() {
  return (
    <>
      <h1>Dashboard Page</h1>
      {/* Transaction List */}
      <TransactionList />
      {/* Transaction Item */}
      <Outlet />
      <Modal/>
    </>
  );
}

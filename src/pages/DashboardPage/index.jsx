

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router"
import { fetchCategories, fetchTransactions } from "../../redux/transaction/operations";
export default function DashboardPage() {
  const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchTransactions())
        dispatch(fetchCategories())
    },[dispatch])
  return (
    <>
      <Outlet />
    </>
  );
}

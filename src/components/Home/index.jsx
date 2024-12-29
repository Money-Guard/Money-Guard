import React, { useEffect } from "react";
import { fetchTransactions, fetchCategories } from "../../redux/transaction/operations";
import { useDispatch } from "react-redux";

const index = () => {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchTransactions())
      dispatch(fetchCategories())
  },[dispatch])

  return <div>Home</div>;
};

export default index;

import React, { useEffect } from "react";
import {
  fetchTransactions,
  fetchCategories,
} from "../../redux/transaction/operations";
import { useDispatch } from "react-redux";
import TransactionList from "../TransactionList";

const index = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTransactions());
    dispatch(fetchCategories());
  }, [dispatch]);

  return <div>
    Home
    <TransactionList/>
    </div>;
};

export default index;

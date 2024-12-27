import React from "react";
import { isModalOpen } from "../../redux/modal/selectors";
import Switcher from "./Switcher";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddMode } from "../../redux/modal/slice";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";

export default function Modal() {
  const dispatch = useDispatch();
  const addMode = useSelector((state) => state.modal.addMode);
  const modalMode = useSelector((state) => state.modal.modalMode);

  console.log(modalMode);

  return (
    <div className="h-screen fixed w-full bg-white/30 flex justify-center items-center backdrop-blur-sm">
      <div className=" flex flex-col justify-center w-56 items-center bg-green-300 shadow">
        <h1>add transaction</h1>
        <div className="flex items-center">
          <p
            className={`${
              addMode === false ? "text-[#FFB627]" : "text-[#FFFFFF99]"
            }`}
          >
            income
          </p>
          <Switcher onClick={() => dispatch(toggleAddMode())} />
          <p
            className={`${
              addMode === true ? "text-[#FF868D]" : "text-[#FFFFFF99]"
            }`}
          >
            gidis
          </p>
        </div>
        {modalMode === "add" && (
          <>{addMode ? <ExpenseForm /> : <IncomeForm />}</>
        )}
      </div>
    </div>
  );
}

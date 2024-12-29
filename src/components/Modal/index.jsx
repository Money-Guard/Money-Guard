import React from "react";
import Switcher from "./Switcher";
import { useSelector, useDispatch } from "react-redux";
import { toggleAddMode } from "../../redux/modal/slice";
import ExpenseForm from "./ExpenseForm";
import IncomeForm from "./IncomeForm";
import EditForm from "./EditForm";
import { closeModal } from "../../redux/modal/slice";

export default function Modal() {
  const dispatch = useDispatch();
  const addMode = useSelector((state) => state.modal.addMode);
  const modalMode = useSelector((state) => state.modal.modalMode);

  const handleClickOutside = (e) => {
    if(e.target.id === "modal-overlay"){
      dispatch(closeModal());
    }
  }

  return (
    <div onClick={handleClickOutside} id="modal-overlay" className="h-screen fixed top-0 w-full bg-white/30 flex justify-center items-center backdrop-blur-sm">
      <div className=" flex flex-col h-70 justify-center items-center bg-green-300 shadow">
        <h1>{modalMode === "add" ? "Add Transaction" : "Edit Transaction"}</h1>
        {modalMode === "add" ? (
          <>
            <div className="flex gap-4 items-center">
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
            {addMode ? <ExpenseForm /> : <IncomeForm />}
          </>
        ) : (
          <>
            <EditForm />
          </>
        )}
      </div>
    </div>
  );
}

import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    isModalOpen: false,
    addMode: false,
    modalMode: "edit",
  },
  reducers: {
    openModal: (state, action) => {
      state.isModalOpen = true;
      state.modalMode = action.payload;
    },
    closeModal: (state) => {
      state.isModalOpen = false;
    },
    toggleModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    toggleAddMode: (state) => {
      state.addMode = !state.addMode;
    }
  },
});

export const { openModal, closeModal, toggleModal, toggleAddMode } =
  modalSlice.actions;
export default modalSlice.reducer;

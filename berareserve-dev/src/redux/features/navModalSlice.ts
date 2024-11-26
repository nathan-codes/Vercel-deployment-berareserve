import { createSlice } from "@reduxjs/toolkit";

interface InitialState {
  navModal_isOpen: boolean;
 
}

const initialState: InitialState = {
    navModal_isOpen: false
};

const modalSlice = createSlice({
  name: "navModal",
  initialState,
  reducers: {
    openNavModal: (state) => {
      state.navModal_isOpen = true;
    },
    closeNavModal: (state) => {
      state.navModal_isOpen = false;
    },
    
  },
});

export default modalSlice.reducer;
export const {
 openNavModal,closeNavModal
} = modalSlice.actions;

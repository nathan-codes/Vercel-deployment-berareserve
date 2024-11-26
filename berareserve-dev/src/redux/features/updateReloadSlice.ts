import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IReloadState } from "../../types/redux.store.types";

const initialState: IReloadState = {
  isReload: false,
};

export const updateReloadSlice = createSlice({
  name: "reload",
  initialState,

  reducers: {
    setReload: (state, action: PayloadAction<IReloadState>) => {
      state.isReload = action.payload.isReload;
    },
  },
});

export const { setReload } = updateReloadSlice.actions;
export const selectReload = (state: RootState) => state.reload;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ILoaderState } from "../../types/redux.store.types";

const initialState: ILoaderState = {
  isLoaded: false,
};

export const loaderSlice = createSlice({
  name: "loader",
  initialState,

  reducers: {
    setLoader: (state, action: PayloadAction<ILoaderState>) => {
      state.isLoaded = action.payload.isLoaded;
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export const selectLoader = (state: RootState) => state.loader;

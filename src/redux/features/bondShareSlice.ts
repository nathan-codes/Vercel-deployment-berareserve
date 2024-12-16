import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IBondShareState } from "../../types/redux.store.types";

const initialState: IBondShareState = {
  tokenPrice: "0",
  remainingBrr: "0",
  discount: "0",
  bondPrice: "0",
};

export const bondShareSlice = createSlice({
  name: "bondShare",
  initialState,

  reducers: {
    setBondShare: (state, action: PayloadAction<IBondShareState>) => {
      state.tokenPrice = action.payload.tokenPrice;
      state.remainingBrr = action.payload.remainingBrr;
      state.discount = action.payload.discount;
      state.bondPrice = action.payload.bondPrice;
    },
  },
});

export const { setBondShare } = bondShareSlice.actions;
export const selectBondShare = (state: RootState) => state.bondShare;

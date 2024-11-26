import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUserBondInfo } from "../../types/redux.store.types";

const initialState: IUserBondInfo = {
  balance: "0",
  amountBonded: "0",
  vestingPeriod: "0",
  payout: "0",
};

export const bondInfoSlice = createSlice({
  name: "bondInfo",
  initialState,

  reducers: {
    setBondInfo: (state, action: PayloadAction<IUserBondInfo>) => {
      state.balance = action.payload.balance;
      state.amountBonded = action.payload.amountBonded;
      state.vestingPeriod = action.payload.vestingPeriod;
      state.payout = action.payload.payout;
    },
  },
});

export const { setBondInfo } = bondInfoSlice.actions;
export const selectBondInfo = (state: RootState) => state.bondInfo;
export default bondInfoSlice.reducer;

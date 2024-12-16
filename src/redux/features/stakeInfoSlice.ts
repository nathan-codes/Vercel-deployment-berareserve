import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IStakeInfo } from "../../types/redux.store.types";

const initialState: IStakeInfo = {
  amountStaked: "0",
  brrBalance: "0",
  sbrrBalance: "0",
};

export const stakeInfoSlice = createSlice({
  name: "stakeInfo",
  initialState,
  reducers: {
    setStakeInfo: (state, action: PayloadAction<IStakeInfo>) => {
      state.amountStaked = action.payload.amountStaked;
      state.brrBalance = action.payload.brrBalance;
      state.sbrrBalance = action.payload.sbrrBalance;
    },
  },
});

export const { setStakeInfo } = stakeInfoSlice.actions;
export const selectStakeInfo = (state: RootState) => state.stakeInfo;
export default stakeInfoSlice.reducer;

import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IStakeShareState } from "../../types/redux.store.types";

const initialState: IStakeShareState = {
  totalStaked: "0",
  apr: "0",
  depositFee: "0",
};

export const stakeShareSlice = createSlice({
  name: "stakeShare",
  initialState,

  reducers: {
    setStakeShare: (state, action: PayloadAction<IStakeShareState>) => {
      state.totalStaked = action.payload.totalStaked;
      state.apr = action.payload.apr;
      state.depositFee = action.payload.depositFee;
    },
  },
});

export const { setStakeShare } = stakeShareSlice.actions;
export const selectStakeShare = (state: RootState) => state.stakeShare;

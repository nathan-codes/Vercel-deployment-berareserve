import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IOverviewState } from "../../types/redux.store.types";

const initialState: IOverviewState = {
  tokenPrice: "0",
  totalSupply: "0",
  marketCap: "0",
  treasuryValue: "0",
  percentageOfSupplyStaked: "0",
};

export const overviewSlice = createSlice({
  name: "overview",
  initialState,

  reducers: {
    setOverviewData: (state, action: PayloadAction<IOverviewState>) => {
      state.tokenPrice = action.payload.tokenPrice;
      state.totalSupply = action.payload.totalSupply;
      state.marketCap = action.payload.marketCap;
      state.treasuryValue = action.payload.treasuryValue;
      state.percentageOfSupplyStaked = action.payload.percentageOfSupplyStaked;
    },
  },
});

export const { setOverviewData } = overviewSlice.actions;
export const selectOverviewData = (state: RootState) => state.overview;
export default overviewSlice.reducer;

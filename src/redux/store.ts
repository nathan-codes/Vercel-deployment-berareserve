import { configureStore } from "@reduxjs/toolkit";
import { overviewSlice } from "./features/overviewSlice";
import { bondInfoSlice } from "./features/bondInfoSlice";
import { stakeInfoSlice } from "./features/stakeInfoSlice";
import { loaderSlice } from "./features/loaderSlice";
import { bondShareSlice } from "./features/bondShareSlice";
import { updateReloadSlice } from "./features/updateReloadSlice";
import { stakeShareSlice } from "./features/stakeShareSlice";
import navModalSlice from "./features/navModalSlice";

const store = configureStore({
  reducer: {
    // Add reducers here
    overview: overviewSlice.reducer,
    bondInfo: bondInfoSlice.reducer,
    bondShare: bondShareSlice.reducer,
    stakeInfo: stakeInfoSlice.reducer,
    loader: loaderSlice.reducer,
    reload: updateReloadSlice.reducer,
    stakeShare: stakeShareSlice.reducer,
    navModal: navModalSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

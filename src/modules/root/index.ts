import { configureStore } from "@reduxjs/toolkit";
import { gameSlice } from "../game";

export const store = configureStore({
  reducer: {
    gameSlice: gameSlice.reducer,
  },
});

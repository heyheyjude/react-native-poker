import { configureStore } from "@reduxjs/toolkit";
import { gameProcessReducer } from "./reducer.gameProcess";

export const store = configureStore({
  reducer: {
    gameProcess: gameProcessReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { GAME } from "./types";
import { Reducer } from "redux";

const { SET_START, SET_PAUSE } = GAME;

const initialState = {
  isInProcess: false,
  isLose: false,
  isPaused: true,
};

export type GameProcessState = typeof initialState;

export const gameProcessReducer: Reducer<GameProcessState> = (
  state = initialState,
  { type, payload }: { type: string; payload?: any }
) => {
  switch (type) {
    case SET_START: {
      return {
        ...state,
        isLose: false,
        isPaused: false,
        isInProcess: true,
      };
    }

    case SET_PAUSE: {
      return {
        ...state,
        isPaused: true,
      };
    }

    default:
      return state;
  }
};

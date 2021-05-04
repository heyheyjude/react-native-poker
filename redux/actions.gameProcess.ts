import { GAME } from "./types";

export const startGame = () => ({ type: GAME.SET_START });
export const pauseGame = () => ({ type: GAME.SET_PAUSE });

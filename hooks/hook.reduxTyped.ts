import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { GameProcessState } from "../redux/reducer.gameProcess";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useGameProcessSelector: () => GameProcessState = () =>
  useAppSelector(({ gameProcess }) => gameProcess);

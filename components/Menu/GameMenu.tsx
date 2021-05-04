import React from "react";
import { View } from "react-native";
import FlexButton from "../Button/FlexButton";
import { gameMenuStyle } from "./style.menu";
import {
  useAppDispatch,
  useGameProcessSelector,
} from "../../hooks/hook.reduxTyped";
import { pauseGame } from "../../redux/actions.gameProcess";

export const GameMenu = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={gameMenuStyle.container}>
      <FlexButton
        style={gameMenuStyle.button}
        title={"Pause"}
        onPress={() => {
          dispatch(pauseGame());
        }}
        useOpacity
      />
    </View>
  );
};

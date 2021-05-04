import React from "react";
import { Button, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { startGame } from "../../redux/actions.gameProcess";
import {
  useAppDispatch,
  useGameProcessSelector,
} from "../../hooks/hook.reduxTyped";
import FlexButton from "../Button/FlexButton";
import { menuStyle } from "./style.menu";

const Menu = () => {
  const dispatch = useAppDispatch();

  return (
    <View>
      <FlexButton
        title={"Start"}
        style={menuStyle.button}
        onPress={() => dispatch(startGame())}
        useOpacity
      />
    </View>
  );
};

export default Menu;

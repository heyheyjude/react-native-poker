import React, { FC } from "react";
import { View, ImageBackground, Text, StyleSheet } from "react-native";
import { styles } from "./style.board";
import Menu from "../Menu/Menu";
import { useGameProcessSelector } from "../../hooks/hook.reduxTyped";
import { GameMenu } from "../Menu/GameMenu";

type BoardProps = {};

const Board: FC<BoardProps> = () => {
  const { isPaused } = useGameProcessSelector();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={require("../../assets/board.jpg")}
      >
        {isPaused ? <Menu /> : <GameMenu />}
      </ImageBackground>
    </View>
  );
};

export default Board;

import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Board from "./components/Board/Board";
import { appStyle } from "./style/style.app";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <View style={appStyle.app}>
        <Board />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

import { StyleSheet } from "react-native";

export const menuStyle = StyleSheet.create({
  button: {
    borderRadius: 30,
    alignSelf: "center",
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    width: "80%",
    backgroundColor: "#000000a0",
  },
});

export const gameMenuStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: "auto",
  },

  button: {
    flex: 1,
    alignSelf: "center",
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#000000a0",
  },
});

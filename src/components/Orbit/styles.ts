import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  orbit: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    marginBottom: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  majorOrbit: {
    backgroundColor: "#04471C",
    width: 125,
    height: 125,
    borderRadius: "50%",
    alignSelf: "center",
    left: 25,
  },
  minorOrbit: {
    backgroundColor: "#058C42",
    width: 55,
    height: 55,
    borderRadius: "50%",
    bottom: 70,
    left: 10,
  },
});

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE0D9",
    paddingHorizontal: 24,
  },
  orbit: {
    position: "absolute",
    bottom: 40,
    right: 55,
    alignSelf: "flex-end",
  },
  majorOrbit: {
    backgroundColor: "#04471C",
    width: 50,
    height: 50,
    borderRadius: 25,
    alignSelf: "center",
    left: 25,
  },
  minorOrbit: {
    backgroundColor: "#058C42",
    width: 20,
    height: 20,
    borderRadius: 25,
    bottom: 65,
    left: 70,
  },
});
export default styles;

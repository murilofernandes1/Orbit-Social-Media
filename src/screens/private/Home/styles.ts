import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08090A",
    paddingHorizontal: 24,
  },
  orbit: {
    position: "absolute",
    bottom: 0,
    left: 250,
    right: 0,
    alignItems: "center",
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
    left: 55,
  },
});
export default styles;

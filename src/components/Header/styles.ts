import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    backgroundColor: "#04471C",
    paddingTop: 55,
    paddingBottom: 10,

    width: "100%",
  },

  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6A6A6A",
    paddingBottom: 8,
  },

  activeTab: {
    color: "#058C42",
    borderBottomWidth: 2,
    borderBottomColor: "#058C42",
  },

  inactiveTab: {
    opacity: 0.9,
  },
});

export default styles;

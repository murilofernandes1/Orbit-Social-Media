import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 24,
    backgroundColor: "#08090A",
    paddingTop: 55,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#04471C",
  },

  headerText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#E6E6E6",
    paddingBottom: 8,
  },

  activeTab: {
    color: "#058C42",
    borderBottomWidth: 2,
    borderBottomColor: "#058C42",
  },

  inactiveTab: {
    opacity: 0.5,
  },
});

export default styles;

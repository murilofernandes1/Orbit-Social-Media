import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE0D9",
    paddingHorizontal: 24,
    paddingTop: 75,
  },

  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#04471C",
    marginBottom: 20,
  },

  searchInput: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#B8C0B4",
    fontSize: 16,
    marginBottom: 25,
  },

  resultArea: {
    flex: 1,
  },

  emptyText: {
    color: "#555",
    fontSize: 15,
  },
});

export default styles;

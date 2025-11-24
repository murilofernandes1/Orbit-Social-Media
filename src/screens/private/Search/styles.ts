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
    width: "90%",
  },

  resultArea: {
    flex: 1,
  },

  emptyText: {
    color: "#555",
    fontSize: 15,
  },
  userCard: {
    flexDirection: "row",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderColor: "#B8C0B4",
    alignItems: "center",
    gap: 10,
  },

  userName: {
    fontSize: 16,
    color: "#04471C",
    fontWeight: "700",
  },

  userEmail: {
    color: "#333",
  },
  userPic: {
    height: 50,
    width: 50,
    borderRadius: 55,
    backgroundColor: "#04471C",
    borderWidth: 3,
    borderColor: "#FFF",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    color: "#058C42",
    marginBottom: 25,
  },
});

export default styles;

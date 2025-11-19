import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE0D9",
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 90,
  },

  orbit: {
    position: "absolute",
    bottom: 10,
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

  feed: {
    marginTop: 10,
  },

  postCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 18,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: "#04471C",
  },

  postUser: {
    fontSize: 15,
    fontWeight: "700",
    color: "#04471C",
    marginBottom: 4,
  },

  postTime: {
    fontSize: 12,
    color: "#666",
    marginBottom: 10,
  },

  postText: {
    fontSize: 15,
    color: "#222",
    marginBottom: 12,
  },

  postActions: {
    flexDirection: "row",
    gap: 20,
  },

  postActionText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#04471C",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#DCE0D9",
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 90,
  },
  feed: {
    marginTop: 10,
  },
  sectionTitle: {
    color: "#04471C",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 16,
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

  postImage: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 15,
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

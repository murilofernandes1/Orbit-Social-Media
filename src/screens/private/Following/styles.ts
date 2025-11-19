import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE0D9",
    paddingHorizontal: 24,
    paddingTop: 20,
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
    paddingVertical: 18,
    paddingHorizontal: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#B8C0B4",
  },

  username: {
    fontSize: 14,
    fontWeight: "700",
    color: "#04471C",
    marginBottom: 6,
  },

  postText: {
    fontSize: 15,
    color: "#1A1A1A",
    lineHeight: 20,
  },
});

export default styles;

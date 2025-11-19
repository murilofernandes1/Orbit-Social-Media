import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DCE0D9",
    paddingHorizontal: 24,
    paddingTop: 40,
  },

  backButton: {
    marginBottom: 20,
    alignSelf: "flex-start",
  },

  postContainer: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#B8C0B4",
    gap: 20,
    marginTop: 100,
  },

  postInfo: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },

  userPfp: {
    width: 45,
    height: 45,
    backgroundColor: "#DCE0D9",
    borderRadius: 50,
  },

  postInput: {
    flex: 1,
    minHeight: 100,
    fontSize: 16,
    color: "#1A1A1A",
    paddingTop: 10,
    textAlignVertical: "top",
  },

  actionsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  icons: {
    flexDirection: "row",
    gap: 20,
  },

  postButton: {
    backgroundColor: "#04471C",
    paddingVertical: 10,
    paddingHorizontal: 22,
    borderRadius: 10,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});

export default styles;

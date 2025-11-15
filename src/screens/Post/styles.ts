import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 50,
  },

  postContainer: {
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    borderWidth: 0.2,
    borderColor: "#058C42",
    width: "100%",
    borderRadius: 10,
    padding: 10,
    gap: 1,
  },

  postInfo: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    padding: 15,
  },

  userPfp: {
    backgroundColor: "#058C42",
    borderRadius: 25,
    width: 50,
    height: 50,
    marginRight: 10,
  },

  postInput: {
    flex: 1,
    minHeight: 60,
    paddingHorizontal: 10,
    color: "white",
  },

  actionsContainer: {
    borderTopColor: "#058C42",
    borderTopWidth: 0.2,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  icons: {
    flexDirection: "row",
    gap: 20,
  },
  postButton: {
    borderRadius: 7,
    backgroundColor: "#058C42",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  buttonText: {
    fontSize: 15,
    color: "#08090A",
    fontWeight: "bold",
  },
});

export default styles;

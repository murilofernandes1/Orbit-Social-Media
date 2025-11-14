import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    marginTop: 50,
  },
  postContainer: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    borderWidth: 0.1,
    borderColor: "#058C42",
    padding: 30,
    width: "100%",
    borderRadius: 10,
  },
  postInput: {
    height: 100,
    paddingHorizontal: 10,
    color: "#058C42",
    width: "100%",
    left: 5,
  },
  postButton: {
    borderRadius: 16,
    backgroundColor: "#058C42",
    padding: 10,
    justifyContent: "center",
    alignSelf: "flex-end",
    top: 15,
  },
  buttonText: {
    fontSize: 15,
    color: "#08090A",
    fontWeight: "bold",
  },
  userPfp: {
    backgroundColor: "#058C42",
    borderRadius: "50%",
    width: 50,
    height: 50,
    left: 5,
  },
});
export default styles;

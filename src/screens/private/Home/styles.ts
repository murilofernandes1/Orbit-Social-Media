import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08090A",
    paddingHorizontal: 24,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
    marginTop: 50,
    justifyContent: "center",
  },
  headerText: {
    color: "#058C42",
    gap: 10,
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "#058C42",
  },
});
export default styles;

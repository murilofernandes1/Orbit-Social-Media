import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#DCE0D9",
  },

  userHeader: {
    backgroundColor: "#04471C",
    paddingTop: 50,
    paddingBottom: 25,
    alignItems: "center",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },

  userPic: {
    height: 110,
    width: 110,
    borderRadius: 55,
    backgroundColor: "#DCE0D9",
    borderWidth: 3,
    borderColor: "#FFF",
    marginBottom: 12,
  },

  username: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  bio: {
    marginTop: 6,
    color: "#E8E8E8",
    fontSize: 14,
    textAlign: "center",
    paddingHorizontal: 40,
  },

  statsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
    marginTop: 20,
  },

  stat: {
    alignItems: "center",
  },

  statNumber: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  statLabel: {
    fontSize: 13,
    color: "#E8E8E8",
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
    gap: 10,
  },

  button: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,
  },

  buttonText: {
    color: "#04471C",
    fontWeight: "700",
    fontSize: 14,
  },

  sectionTitle: {
    marginTop: 30,
    marginBottom: 15,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "700",
    color: "#04471C",
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  gridItem: {
    width: "32%",
    height: 120,
    backgroundColor: "#04471C",
    marginBottom: 6,
    borderRadius: 10,
  },
  feed: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },

  postCard: {
    backgroundColor: "#FFFFFF",
    padding: 16,
    borderRadius: 12,
    marginBottom: 15,
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },

  postUser: {
    fontSize: 15,
    fontWeight: "700",
    color: "#04471C",
  },

  postTime: {
    fontSize: 12,
    color: "#777",
  },

  postText: {
    fontSize: 15,
    color: "#333",
    marginBottom: 10,
    marginTop: 10,
  },

  postActions: {
    flexDirection: "row",
    gap: 18,
    marginTop: 4,
  },
  postImage: {
    width: "100%",
    height: 400,
    borderRadius: 10,
    marginBottom: 30,
    marginTop: 15,
    resizeMode: "cover",
  },
  postActionText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#04471C",
  },
  noPost: {
    color: "#04471C",
    marginTop: 100,
    alignSelf: "center",
    fontWeight: "600",
  },
  backButton: {
    alignSelf: "flex-start",
    left: 25,
    bottom: 10,
  },
});

export default styles;

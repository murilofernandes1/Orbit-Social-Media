import { StyleSheet, Dimensions } from "react-native";

const { height } = Dimensions.get("window");
const small = height < 700;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08090A",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  form: {
    width: "100%",
    maxWidth: 420,
    paddingVertical: small ? 16 : 22,
    paddingHorizontal: small ? 16 : 22,
    backgroundColor: "#0D0F10",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#1b1f20",
    gap: small ? 16 : 22,
  },

  header: {
    fontSize: small ? 30 : 40,
    fontWeight: "800",
    color: "#058C42",
    textAlign: "center",
    marginBottom: small ? 6 : 12,
  },

  inputContainer: {
    width: "100%",
    gap: 6,
    marginBottom: 25,
  },

  label: {
    fontSize: small ? 15 : 18,
    fontWeight: "500",
    color: "#c9dcd7",
  },

  input: {
    backgroundColor: "#111415",
    borderWidth: 1,
    borderColor: "#1d2625",
    height: small ? 46 : 52,
    borderRadius: 10,
    paddingHorizontal: 14,
    fontSize: small ? 14 : 16,
    color: "#e9fffb",
  },
  register: {
    alignSelf: "center",
    fontSize: 15,
    color: "#c9dcd7",
    marginTop: 20,
  },
  link: {
    color: "#058C42",
    fontWeight: "700",
  },
});

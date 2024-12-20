import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  bottomContainer: {
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    position: "absolute",
    bottom: 0,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "space-around",
    paddingVertical: "30%",
  },
  innerBottomContainer: {},
  upperContainer: {
    marginTop: "25%",
    marginLeft: "15%",
  },
  welcomeText: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
  },
  plsLoginText: {
    marginLeft: "15%",
    fontSize: 25,
    color: "white",
  },
});

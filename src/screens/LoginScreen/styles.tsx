import { StyleSheet } from "react-native";
import { COLORS } from "../../theme/Colors";

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
  rootInput: {
    justifyContent: "center",
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gradientRight,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    color: COLORS.gradientRight,
  },
  textInput: {
    fontSize: 16,
    // marginTop: 10,
    color: COLORS.gradientRight,
  },
  actionButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginHorizontal: "10%",
    marginTop: 20,
  },
});

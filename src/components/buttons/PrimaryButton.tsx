import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENTCOLORS } from "../../theme/Colors";

const PrimaryButton = ({
  btnName,
  onPress,
}: {
  btnName: string;
  onPress: () => void;
}) => {
  return (
    <LinearGradient
      style={styles.root}
      colors={GRADIENTCOLORS}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.text}>{btnName}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  root: {
    width: "60%",
    height: 50,
    marginHorizontal: "20%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
  text: {
    color: "white",
    fontSize: 18,
  },
});

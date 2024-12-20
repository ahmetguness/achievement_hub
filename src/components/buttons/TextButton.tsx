import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";

const TextButton = ({
  btnName,
  onPress,
}: {
  btnName: string;
  onPress: () => void;
}) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Text style={styles.text}>{btnName}</Text>
    </TouchableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  root: {},
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

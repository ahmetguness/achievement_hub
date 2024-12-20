import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";

export const InputArea = ({
  title,
  areaType,
}: {
  title: string;
  areaType: string;
}) => {
  const [input, setInput] = useState("");

  console.log(input);

  const dispatch = useDispatch();
  return (
    <View style={styles.root}>
      <Text style={styles.titleText}>{title}:</Text>
      <TextInput style={styles.textInput} onChangeText={setInput} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    justifyContent: "center",
    width: "90%",
    marginHorizontal: "5%",
    borderRadius: 15,
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  textInput: {
    fontSize: 16,
    flex: 1,
    marginTop: 20,
  },
});

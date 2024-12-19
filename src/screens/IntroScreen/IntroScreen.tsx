import { View, Text, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { IntroScreenNavigationProp } from "../../types/Navigation";

const IntroScreen = () => {
  const navigaiton = useNavigation<IntroScreenNavigationProp>();

  return (
    <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
      <Button title="Next" onPress={() => navigaiton.navigate("SelectionScreen")} />
    </View>
  );
};

export default IntroScreen;

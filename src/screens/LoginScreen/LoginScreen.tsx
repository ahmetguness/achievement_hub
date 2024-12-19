import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENTCOLORS } from "../../theme/Colors";
import { styles } from "./styles";

const LoginScreen = () => {
  const userType = useSelector((state: RootState) => state.UserSlice.userType);
  console.log(userType);

  return (
    <LinearGradient
      style={styles.root}
      colors={GRADIENTCOLORS}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <View style={styles.upperContainer}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <Text style={styles.plsLoginText}>
          Please Log In as {userType.toUpperCase()}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text>asdasda</Text>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

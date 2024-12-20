import { View, Text, ScrollView } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENTCOLORS } from "../../theme/Colors";
import { styles } from "./styles";
import { InputArea } from "../../components/inputs/LoginInputArea";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TextButton from "../../components/buttons/TextButton";

const LoginScreen = () => {
  const userSlice = useSelector((state: RootState) => state.UserSlice);

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
          Please Log In as {userSlice.userType.toUpperCase()}
        </Text>
      </View>
      <View style={styles.bottomContainer}>
        <InputArea title="User Name" areaType="username" />
        <InputArea title="Password" areaType="password" />
        <PrimaryButton
          btnName="Log In"
          onPress={() => console.log("Log In Clicked")}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "80%",
            marginHorizontal: "10%",
          }}
        >
          <TextButton btnName="Sign Up" onPress={() => console.log("su")} />
          <TextButton
            btnName="Sign In as GUEST"
            onPress={() => console.log("guest")}
          />
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;

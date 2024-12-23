import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, Button } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../hooks/redux_toolkit/store";
import { LinearGradient } from "expo-linear-gradient";
import { GRADIENTCOLORS } from "../../theme/Colors";
import { styles } from "./styles";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import TextButton from "../../components/buttons/TextButton";
import { user1 } from "../../data/dummy_data";
import { useNavigation } from "@react-navigation/native";
import { LoginScreenNavigationProp } from "../../types/Navigation";
import { updateUserType } from "../../hooks/redux_toolkit/slices/UserSlice";

interface InputAreaProps {
  title: string;
  onChangeText: (text: string) => void;
  value: string;
}

const InputArea: React.FC<InputAreaProps> = ({
  title,
  onChangeText,
  value,
}) => (
  <View style={styles.rootInput}>
    <Text style={styles.titleText}>{title}:</Text>
    <TextInput
      style={styles.textInput}
      onChangeText={onChangeText}
      value={value}
      placeholder={`Enter your ${title.toLowerCase()}`}
      secureTextEntry={title.toLowerCase() === "password"}
    />
  </View>
);

const LoginScreen: React.FC = () => {
  const userSlice = useSelector((state: RootState) => state.UserSlice);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [signUp, setSignUp] = useState(false);
  const dispatch = useDispatch();

  const handleLogin = () => {
    setUserName("");
    setPassword("");

    if (userName === user1.userName && password === user1.password) {
      const nav =
        userSlice.userType === "parent"
          ? "ParentHomeScreen"
          : "ChildHomeScreen";

      navigation.navigate(nav);
    } else {
      console.log("no access");
    }
  };

  const handleGuestLogin = () => {
    dispatch(updateUserType("guest"));
    navigation.navigate("GuestHomeScreen");
  };

  return (
    <LinearGradient
      style={styles.root}
      colors={GRADIENTCOLORS}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.upperContainer}>
          <Text style={styles.welcomeText}>Welcome!</Text>
          <Text style={styles.plsLoginText}>
            Please Log In as {userSlice.userType.toUpperCase()}
          </Text>
        </View>
        <View style={styles.bottomContainer}>
          {signUp ? (
            <>
              <Text>SIGN UP SCREEN HERE</Text>
              <Button title="change" onPress={() => setSignUp(false)} />
            </>
          ) : (
            <>
              <InputArea
                title="User Name"
                onChangeText={setUserName}
                value={userName}
              />
              <InputArea
                title="Password"
                onChangeText={setPassword}
                value={password}
              />
              <PrimaryButton btnName="Log In" onPress={handleLogin} />
              <View style={styles.actionButtonsContainer}>
                <TextButton btnName="Sign Up" onPress={() => setSignUp(true)} />
                <TextButton
                  btnName="Sign In as GUEST"
                  onPress={() => handleGuestLogin()}
                />
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default LoginScreen;

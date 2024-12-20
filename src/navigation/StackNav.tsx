import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import IntroScreen from "../screens/IntroScreen/IntroScreen";
import { RootStackParamList } from "../types/Navigation";
import SelectionScreen from "../screens/SelectionScreen/SelectionScreen";
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import ParentHomeScreen from "../screens/HomeScreen/ParentHomeScreen/ParentHomeScreen";
import ChildHomeScreen from "../screens/HomeScreen/ChildHomeScreen/ChildHomeScreen";
import GuestHomeScreen from "../screens/HomeScreen/GuestHomeScreen/GuestHomeScreen";

const StackNav = () => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="IntroScreen" component={IntroScreen} />
      <Stack.Screen name="SelectionScreen" component={SelectionScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="ParentHomeScreen" component={ParentHomeScreen} />
      <Stack.Screen name="ChildHomeScreen" component={ChildHomeScreen} />
      <Stack.Screen name="GuestHomeScreen" component={GuestHomeScreen} />
    </Stack.Navigator>
  );
};

export default StackNav;

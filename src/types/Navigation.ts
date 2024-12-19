import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IntroScreen: undefined;
  HomeScreen: undefined;
  SelectionScreen: undefined;
  LoginScreen: undefined;
};

export type IntroScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "IntroScreen"
>;

export type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "HomeScreen"
>;

export type SelectionScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "SelectionScreen"
>;

export type SLoginScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "LoginScreen"
>;

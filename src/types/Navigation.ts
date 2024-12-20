import { NavigationProp } from "@react-navigation/native";

export type RootStackParamList = {
  IntroScreen: undefined;
  SelectionScreen: undefined;
  LoginScreen: undefined;
  ParentHomeScreen: undefined;
  ChildHomeScreen: undefined;
  GuestHomeScreen: undefined;
};

export type IntroScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "IntroScreen"
>;

export type SelectionScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "SelectionScreen"
>;

export type LoginScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "LoginScreen"
>;
export type ParentHomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "ParentHomeScreen"
>;
export type ChildHomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "ChildHomeScreen"
>;
export type GuestHomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "GuestHomeScreen"
>;

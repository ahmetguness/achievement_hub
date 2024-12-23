import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ParentHomeScreen from "../screens/HomeScreen/ParentHomeScreen/ParentHomeScreen";
import TaskListScreen from "../screens/TaskListScreen/TaskListScreen";

const BottomTabNav = () => {
  const BottomTab = createBottomTabNavigator();

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <BottomTab.Screen name="ParentHS" component={ParentHomeScreen} />
      <BottomTab.Screen name="TaskListScreen" component={TaskListScreen} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNav;

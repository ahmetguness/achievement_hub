import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import { dummyTasks } from "../../data/dummy_data";
import ListCard from "../../components/cards/ListCard";
import Animated, { LinearTransition } from "react-native-reanimated";

const TaskListScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.flatListContainer}>
        <Animated.FlatList
          data={dummyTasks}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListCard task={item} />}
          keyboardDismissMode="on-drag"
          itemLayoutAnimation={LinearTransition}
        />
      </View>
    </View>
  );
};

export default TaskListScreen;

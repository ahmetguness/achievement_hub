import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Task } from "../../types/SharedTypes";

const ListCard = ({ task, onPress }: { task: Task; onPress?: () => void }) => {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <View style={styles.rowContainer}>
        <Text style={styles.taskNameText}>{task.taskName}</Text>
        <Text style={styles.taskNameText}>{task.taskPoint}</Text>
      </View>
      <Text style={styles.descText}>{task.taskDesc}</Text>
    </TouchableOpacity>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  root: {
    width: "96%",
    marginHorizontal: "2%",
    backgroundColor: "gray",
    marginBottom: "2%",
    height: 80,
    padding: "2%",
    borderRadius: 15,
  },
  taskNameText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: "2%",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
  },
  descText: {
    marginHorizontal: "5%",
  },
});

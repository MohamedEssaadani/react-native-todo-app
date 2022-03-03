import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodoItem({ todo, handleDelete, handleEdit }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={() => handleDelete(todo.key)}>
        <MaterialIcons
          name="delete"
          color="#fff"
          size={25}
          style={styles.touchable}
        />
      </TouchableOpacity>
      <View style={styles.todo}>
        <TextInput
          value={todo.title}
          onChangeText={(text) => handleEdit(todo.key, text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todo: {
    marginTop: 16,
    padding: 18,
    paddingHorizontal: 50,
    fontSize: 16,
    borderColor: "orange",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "dashed",
  },
  touchable: {
    margin: 16,
    padding: 18,
    backgroundColor: "orange",
    borderRadius: 15,
  },
});
export default TodoItem;

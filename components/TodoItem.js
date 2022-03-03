import React from "react";
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function TodoItem({ todo, handleDelete, handleEdit }) {
  return (
    <View>
      <View style={styles.todo}>
        <TouchableOpacity onPress={() => handleDelete(todo.key)}>
          <MaterialIcons
            name="delete"
            color="#fff"
            size={25}
            style={styles.touchable}
          />
        </TouchableOpacity>
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
    marginTop: 10,
    fontSize: 16,
    borderColor: "orange",
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: "dashed",
    flexDirection: "row",
  },
  touchable: {
    margin: 16,
    padding: 18,
    backgroundColor: "orange",
    borderRadius: 15,
  },
});
export default TodoItem;

import React from "react"
import { View, StyleSheet, TextInput, TouchableOpacity } from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

function TodoItem({ todo }) {
  return (
    <View style={{ flexDirection: "row" }}>
      <View style={styles.todo}>
        <TextInput value={todo.title} />
      </View>
      <TouchableOpacity>
        <MaterialIcons
          name="delete"
          color="#fff"
          size={25}
          style={styles.touchable}
        />
      </TouchableOpacity>
    </View>
  )
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
    marginTop: 16,
    marginLeft: 16,
    padding: 18,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 15,
  },
})
export default TodoItem

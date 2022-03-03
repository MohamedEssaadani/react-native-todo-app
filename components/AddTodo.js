import React, { useState } from "react"
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native"
import { MaterialIcons } from "@expo/vector-icons"

function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("")

  const handlePress = () => {
    if (text) {
      handleSubmit(text)
      setText("")
    }
  }
  return (
    <View>
      <TextInput
        placeholder="What to do next?"
        value={text}
        onChangeText={(text) => setText(text)}
      />
      <TouchableOpacity style={styles.touchable} onPress={handlePress}>
        <MaterialIcons name="add" color="#fff" size={20} />
        <Text style={{ color: "#fff", paddingLeft: 5 }}>Add New</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  touchable: {
    padding: 10,
    margin: 10,
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    borderRadius: 10,
  },
})

export default AddTodo

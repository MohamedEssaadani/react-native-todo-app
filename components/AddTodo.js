import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function AddTodo({ handleSubmit }) {
  const [text, setText] = useState("");

  const handlePress = () => {
    if (text.length > 3) {
      handleSubmit(text);
      setText("");
    } else {
      Alert.alert("Warning!", "Todos must be over 3 chars long!", [
        {
          text: "Understood",
          onPress: () => console.log("Alert Closed!"),
        },
      ]);
    }
  };
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
  );
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
});

export default AddTodo;

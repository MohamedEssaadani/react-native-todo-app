import React, { useState } from "react"
import { FlatList, View, Text, StyleSheet } from "react-native"
import AddTodo from "./AddTodo"
import TodoItem from "./TodoItem"

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      title: "Drink some coffee",
      key: "1",
    },
  ])

  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [{ key: Math.random().toString(), title: text }, ...prevTodos]
    })
  }

  return (
    <View style={styles.container}>
      <AddTodo handleSubmit={handleSubmit} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <TodoItem todo={item} />}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
})
export default Todo

import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import AddTodo from "./AddTodo";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState([
    {
      title: "Drink some coffee",
      key: "1",
    },
    {
      title: "Learn",
      key: "2",
    },
  ]);

  const handleSubmit = (text) => {
    setTodos((prevTodos) => {
      return [{ key: Math.random().toString(), title: text }, ...prevTodos];
    });
  };

  const handleDelete = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key !== key);
    });
  };

  const handleEdit = (key, text) => {
    let newTodos = [...todos];
    let index = todos.findIndex((todo) => todo.key === key);
    newTodos[index].title = text;
    setTodos(newTodos);
  };

  return (
    <View style={styles.content}>
      <AddTodo handleSubmit={handleSubmit} />
      <View style={styles.list}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem
              todo={item}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  content: {
    // take available space
    flex: 1,
    padding: 30,
    backgroundColor: "#fff",
  },
  list: {
    flex: 1,
  },
});
export default Todo;

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
    newTodos[key].title = text;
    setTodos(newTodos);
  };

  return (
    <View style={styles.container}>
      <AddTodo handleSubmit={handleSubmit} />
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
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
});
export default Todo;

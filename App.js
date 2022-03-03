import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Todos from "./components/Todos";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Todos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // marginTop: 40,
    // paddingTop: 40,
    // paddingHorizontal: 20,
    // alignItems: "center",
    // justifyContent: "center",
  },
});

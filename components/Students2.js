import React, { useState } from "react"
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native"

//show list of items with FlatList
//benifits of flatlist: 1 we dont need scroll view, we can scroll on items without using scorll view
//2: less code
//3: flat list didn't load all data in our screen until we need them (more scoll more loading items)
const Students2 = () => {
  const [students, setStudents] = useState([
    {
      id: 1,
      fullName: "Mohamed Es-saadani",
      age: 23,
    },
    {
      id: 2,
      fullName: "Asmaa Bouta",
      age: 22,
    },
    {
      id: 3,
      fullName: "Othmane Ramzi",
      age: 23,
    },
    {
      id: 4,
      fullName: "Ali Ghosn",
      age: 23,
    },
    {
      id: 5,
      fullName: "Abdelaziz Bathi",
      age: 25,
    },
    {
      id: 6,
      fullName: "Badr Rida",
      age: 23,
    },
    {
      id: 7,
      fullName: "Omar Oukil",
      age: 23,
    },
    {
      id: 8,
      fullName: "Fatima Essarhir",
      age: 23,
    },
    {
      id: 9,
      fullName: "Mohamed Kamal",
      age: 23,
    },
  ])

  const pressHandler = (id) => {
    setStudents((prevStudents) =>
      prevStudents.filter((student) => student.id !== id)
    )
  }

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={students}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.student}>
              {item.fullName}, {item.age} years
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  student: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    backgroundColor: "orange",
  },
})

export default Students2

import React, { useState } from "react"
import { View, ScrollView, StyleSheet, Text } from "react-native"

//show list of items with map()
const Students = () => {
  const [students, setStudents] = useState([
    {
      key: 1,
      fullName: "Mohamed Es-saadani",
      age: 23,
    },
    {
      key: 2,
      fullName: "Asmaa Bouta",
      age: 22,
    },
    {
      key: 3,
      fullName: "Othmane Ramzi",
      age: 23,
    },
    {
      key: 4,
      fullName: "Ali Ghosn",
      age: 23,
    },
    {
      key: 5,
      fullName: "Abdelaziz Bathi",
      age: 25,
    },
    {
      key: 6,
      fullName: "Badr Rida",
      age: 23,
    },
    {
      key: 7,
      fullName: "Omar Oukil",
      age: 23,
    },
    {
      key: 8,
      fullName: "Fatima Essarhir",
      age: 23,
    },
    {
      key: 9,
      fullName: "Mohamed Kamal",
      age: 23,
    },
  ])
  return (
    <View>
      <ScrollView>
        {students.map((student) => (
          <View key={student.key}>
            <Text style={styles.student}>
              {student.fullName} , {student.age} years
            </Text>
          </View>
        ))}
      </ScrollView>
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
export default Students

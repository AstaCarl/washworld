import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import React from 'react';
import TextInput from "../components/TextInput";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TextInput labelText="4. Your E-mail" placeholderText="Email address"/>
      <TextInput labelText="5. Your Password" placeholderText="Password" password={true}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 40,
  }
})

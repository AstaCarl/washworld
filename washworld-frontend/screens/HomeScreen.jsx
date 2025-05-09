import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import React from 'react';
import Button from "../components/atoms/Button";


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button variant="primary" buttonText="Hello rikke mus"/>
      <Button variant="secondary" buttonText="Hello rikke mis"/>
      <Button variant="danger" buttonText="AHHHHHHHHHHHHH"/>
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

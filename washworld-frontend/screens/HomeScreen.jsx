import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../components/atoms/Button";
import EcoCard from "../components/EcoCard";
import CustomTextInput from "../components/atoms/TextInput";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <Button variant="primary" buttonText="Hello rikke mus" />
      <Button variant="secondary" buttonText="Hello rikke mis" />
      <Button variant="danger" buttonText="AHHHHHHHHHHHHH" />
      <View style={styles.container2}>
        <Button variant="iconButtonBlack" buttonText="Previous" />
        <Button variant="iconButtonGreen" buttonText="Next" />
      </View>
      <EcoCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7F7",
    width: "100%",
    paddingHorizontal: 20,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

import { StyleSheet, View } from "react-native";
import React from "react";
import EcoCard from "../components/EcoCard";
import Title from "../components/atoms/Title";
import ViewMap from "../components/ViewMap";

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <Title title="Welcome Back" variant="green"/>
      <ViewMap/>
      <EcoCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#F7F7F7",
    width: "100%",
    paddingHorizontal: 20,
  },
});

import { Text } from "@react-navigation/elements";
import { View, StyleSheet } from "react-native";
import React from "react";
import ProgrammeComponent from "../../components/ProgrammeComponent";

export default function MapScreen() {
  return (
    <View style={styles.container}>
      <ProgrammeComponent />
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
  },
});

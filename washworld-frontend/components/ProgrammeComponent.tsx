import { Text, View, StyleSheet } from "react-native";
import ProgrammeTypeBanner from "./atoms/ProgrammeTypeBanner";

export default function ProgrammeComponent() {
  return (
    <View style={styles.container}>
      <ProgrammeTypeBanner />
      <ProgrammeTypeBanner />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    width: "100%",
    paddingHorizontal: 40,
  },
});

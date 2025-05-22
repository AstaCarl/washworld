import { View, StyleSheet } from "react-native";
import ProgrammeTypeBanner from "../../components/atoms/ProgrammeTypeBanner";

export default function ProgrammeScreen() {
  const data = [
    { id: 1, name: "Brilliant/All inclusive", price: 20 },]
  return (
    <View style={styles.container}>
      {data.map((programme) => (
      <ProgrammeTypeBanner bannerTextLeft={programme.name} bannerTextRight={programme.price} />
      ))}
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

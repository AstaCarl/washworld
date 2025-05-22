import { View, StyleSheet } from "react-native";
import ProgrammeTypeBanner from "../../components/atoms/ProgrammeTypeBanner";
import Button from "../../components/atoms/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/WashFlowStackScreen";

export default function ProgrammeScreen() {
  const navigation = useNavigation<RootStackParamList>();  
  const data = [
    { id: 1, name: "Brilliant/All inclusive", price: 20 },
    { id: 2, name: "Brilliant/All inclusive", price: 20 },
    { id: 3, name: "Brilliant/All inclusive", price: 20 },
    { id: 4, name: "Brilliant/All inclusive", price: 20 },
  ]
  return (
    <View style={styles.container}>
      {data.map((programme, index) => (
      <ProgrammeTypeBanner key={index} bannerTextLeft={programme.name} bannerTextRight={programme.price} />
      ))}
      <View style={styles.buttonGroup}>
      <Button variant="iconButtonBlack" buttonText="Back" onPress={() => navigation.navigate("HomeScreen")}/>
      <Button variant="iconButtonGreen" buttonText="Next" onPress={() => navigation.navigate("AdditionalProgramme")}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    paddingHorizontal: 40,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});

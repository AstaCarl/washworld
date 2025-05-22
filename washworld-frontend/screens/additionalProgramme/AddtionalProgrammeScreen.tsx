import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import AdditionalProgramme from "../../components/AdditonalProgramme";

export default function AdditionalProgrammeScreen() {
  const data = [
    { id: 1, name: "Foam Splash", description: "Foam wash with light effect", price: 20 },
  ]
  return (
    <View style={styles.container}>
      {data.map((programme, index) => (
        <AdditionalProgramme key={index} title={programme.name} text={programme.description} price={programme.price}/>
      ))}
      <View style={styles.buttonGroup}>
      <Button variant="iconButtonBlack" buttonText="Back"/>
      <Button variant="iconButtonGreen" buttonText="Next"/>
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

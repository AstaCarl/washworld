import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { Text } from "@react-navigation/elements";
import CarAlertIcon from "../../components/icons/CarAlertIcon";

export default function AntennaDismountScreen() {
  const navigation = useNavigation<RootTabParamList>();

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        <CarAlertIcon color="#FFF" />
        <Text style={styles.title}>Remember to dismount your antenna!</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button
          variant="iconButtonBlack"
          buttonText="Previous"
          onPress={() => navigation.navigate("AdditionalProgramme")}
        />
        <Button variant="iconButtonGreen" buttonText="Next" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    paddingHorizontal: 40,
    paddingVertical: 80,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  programmeList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
  },
});

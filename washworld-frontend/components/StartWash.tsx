import { StyleSheet, View } from "react-native";
import Paragraf from "./atoms/Paragraf";
import Button from "./atoms/Button";
import QrIcon from "./icons/QrIcon";
import LocationIcon from "./icons/LocationIcon";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../navigation/WashFlowStackScreen";

export default function StartWash() {
  const navigation = useNavigation<RootStackParamList>();


  return (
    <View style={styles.container}>
      <View>
        <Paragraf variant="bold" text="Is this your current location?" />
        <View style={styles.locationContainer}>
          <LocationIcon color="#000" />
          <Paragraf variant="primary" text="Roskildevej 375, 2630 Taastrup" />
        </View>
      </View>
      <Button buttonText="Start Wash" variant="primary" onPress={() => navigation.navigate("WashFlow")} />
      <View style={styles.qrContainer}>
        <View>
          <Paragraf variant="primary" text="Not your location?" />
          <Paragraf variant="label" text="Scan the QR code" />
        </View>
        <QrIcon color="#000" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 20,
    gap: 20,
    backgroundColor: "#fff",
    marginVertical: 20,
  },
  qrContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  locationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});

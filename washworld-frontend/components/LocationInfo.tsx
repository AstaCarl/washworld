import { Text } from "@react-navigation/elements";
import { Dimensions, StyleSheet, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import Paragraf from "./atoms/Paragraf";
import HallCard from "./HallCard";
import ClockIcon from "./icons/ClockIcon";
import DirectionsIcon from "./icons/DirectionsIcon";

type LocationInfoProps = {
  selectedLocation?: any;
};


export default function LocationInfo({ selectedLocation }: LocationInfoProps) {
  console.log("Selected location:", selectedLocation);

  if (!selectedLocation) return null;
  return (
    <View style={styles.container}>
        <View style={styles.row}>
      <Subtitle style={styles.width} title={selectedLocation.address} variant="blackLight" />
      <View style={styles.iconBox}>
      <DirectionsIcon color="#FFF" />
      </View>
      </View>
      <View style={styles.row}>
      <ClockIcon color="#000"/>
      <Paragraf text={selectedLocation.openingHours.openHours} />
      </View>
        <HallCard halls={selectedLocation.halls} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#FFFFFF",
    width: "90%",
    marginBottom: 30,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
    row: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 10,
    },
    iconBox: {
        backgroundColor: "#06C167",
        padding: 8,
    },
    width: {
        width: "80%",
    }
});

import { StyleSheet, View } from "react-native";
import Paragraf from "./atoms/Paragraf";
import Button from "./atoms/Button";
import QrIcon from "./icons/QrIcon";
import LocationIcon from "./icons/LocationIcon";
import { useNavigation } from "@react-navigation/native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { RootTabParamList } from "../navigation/TabsNavigation";

export default function ViewMap() {
  const navigation = useNavigation<RootTabParamList>();

  const [region, setRegion] = useState({
    latitude: 55.7635,
    longitude: 12.4949,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  // Request location permission and get the current location of the user
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setRegion((prev) => ({
        ...prev,
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      }));
    })();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        region={region}
        showsUserLocation={true}
      ></MapView>
      <View>
        <Paragraf variant="bold" text="Is this your current location?" />
        <View style={styles.locationContainer}>
          <LocationIcon color="#000" />
          <Paragraf variant="primary" text="Roskildevej 375, 2630 Taastrup" />
        </View>
      </View>
      <Button
        buttonText="Find Wash Location"
        variant="primary"
        onPress={() => navigation.navigate("Map")}
      />
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
  map: {
    width: "100%",
    height: 200,
  },
});

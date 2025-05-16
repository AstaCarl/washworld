import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import LocationInfo from "./LocationInfo";

const { height, width } = Dimensions.get("window");

type mapProps = {
  mapData: any[];
};

export default function Map({ mapData = [] }: mapProps) {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const initialRegion = {
    latitude: 55.6761, // Latitude of Copenhagen
    longitude: 10.5683, // Longitude of Copenhagen
    latitudeDelta: 6, // Zoom level
    longitudeDelta: 6, // Zoom level
  }; // ✅ This will now run on every render

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={initialRegion}
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        onPress={() => {
          setSelectedLocation(null);
        }}
      >
        {mapData &&
          mapData.map((data) => (
            <Marker
              key={data.id}
              coordinate={{
                latitude: data.coordinate.latitude,
                longitude: data.coordinate.longitude,
              }}
              onPress={() => {
                setSelectedLocation(data);
                console.log("Selected location:", data);
              }}
            />
          ))}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    width: width,
    height: height,
  },

});

import React from "react";
import { Dimensions, Keyboard, StyleSheet, Text, View } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import LocationInfo from "./LocationInfo";

const { height, width } = Dimensions.get("window");

type mapProps = {
  mapData: any[];
};

export default function Map({ mapData = []}: mapProps) {
  const [selectedLocation, setSelectedLocation] = React.useState(null);
  const initialRegion = {
    latitude: 55.6761,
    longitude: 10.5683,
    latitudeDelta: 6, // Zoom level
    longitudeDelta: 6, // Zoom level
  }; 

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
              onPress={(e) => {
                // Prevent default behavior of marker press
                e.stopPropagation?.();
                setSelectedLocation(data);
                Keyboard.dismiss();
              }}
              tracksViewChanges={false}
            />
          ))}
      </MapView>
      {selectedLocation && (
        <View style={styles.callout}>
          <LocationInfo selectedLocation={selectedLocation} />
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: width,
    height: height - 85,
  },
  callout: {
    alignItems: "center",
  },
});

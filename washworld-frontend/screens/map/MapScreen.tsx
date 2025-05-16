import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import React from "react";
import Map from "../../components/Map";
import { useGetLocations } from "./mapQuery";

export default function MapScreen() {
    const { data: locations } = useGetLocations();
    console.log("Locations data:", locations);

    if (!locations) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        )
    }

  return (
    <View>
      <Map
      mapData={locations}
      />
    </View>
  );
}

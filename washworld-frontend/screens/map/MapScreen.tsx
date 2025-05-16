import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import React from "react";
import Map from "../../components/Map";
import { useGetLocations } from "./mapQuery";
import CustomTextInput from "../../components/atoms/TextInput";

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
      <View style={styles.search}>
      <CustomTextInput
      search
      placeholderText="Find location"
      />
      </View>
      <Map
      mapData={locations}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    position: "absolute",
    top: 40,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
});

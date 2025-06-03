import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import React from "react";
import Map from "../../components/Map";
import { useGetLocations } from "./mapQuery";
import CustomTextInput from "../../components/atoms/TextInput";

export default function MapScreen() {
  // Fetch locations using the custom hook
    const { data: locations, isLoading } = useGetLocations();

    if (isLoading) {
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
      mapData={locations} // Pass the fetched locations to the Map component
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

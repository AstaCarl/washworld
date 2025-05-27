import { StyleSheet, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import Paragraf from "./atoms/Paragraf";
import HallCard from "./HallCard";
import ClockIcon from "./icons/ClockIcon";
import DirectionsIcon from "./icons/DirectionsIcon";
import Button from "./atoms/Button";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";

type LocationInfoProps = {
  selectedLocation?: any;
};

export default function LocationInfo({ selectedLocation }: LocationInfoProps) {
  const navigation = useNavigation<any>();
  const [washObject, setWashObject] = useState({});
  const [selectedHallId, setSelectedHallId] = useState<number | null>(null);

  console.log("Selected location:", selectedLocation);

  React.useEffect(() => {
    if (selectedLocation) {
      setWashObject((prev) => ({
        ...prev,
        locationId: selectedLocation.id,
      }));
    }
  }, [selectedLocation]);

  React.useEffect(() => {
    if (selectedHallId) {
      setWashObject((prev) => ({
        ...prev,
        hallId: selectedHallId,
      }));
    }
  }, [selectedHallId]);

  console.log("Wash object from location info:", washObject);
  console.log("Wash object from location info with out programme:", washObject);


  if (!selectedLocation) return null;
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Subtitle
          style={styles.width}
          title={selectedLocation.address}
          variant="blackLight"
        />
        <View style={styles.iconBox}>
          <DirectionsIcon color="#FFF" />
        </View>
      </View>
      <View style={styles.row}>
        <ClockIcon color="#000" />
        <Paragraf text={selectedLocation.openingHours.openHours} />
      </View>
      <HallCard
        halls={selectedLocation.halls}
        selectedHallId={selectedHallId}
        setSelectedHallId={setSelectedHallId}
      />
      <Button
        onPress={
          selectedHallId
            ? () =>
                navigation.navigate("WashFlow", {
                  screen: "Programme",
                  params: { washObject, setWashObject },
                })
            : undefined
        }
        disabled={!selectedHallId}
        variant="primary"
        buttonText="Start Wash"
      />
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
  },
});

import { View, StyleSheet } from "react-native";
import ProgrammeTypeBanner from "../../components/atoms/ProgrammeTypeBanner";
import Button from "../../components/atoms/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { useGetProgrammes } from "./ProgrammeQuery";

type Programme = {
  id: number;
  name: string;
  price: number;
};

export default function ProgrammeScreen() {
  const route = useRoute();
  const { washObject } = route.params as { washObject: any };
  const { setWashObject } = route.params as { setWashObject: any };
  const { data: programmes } = useGetProgrammes() as { data: Programme[] };
  const navigation = useNavigation<any>();
  const [selectedprogrammeId, setSelectedProgrammeId] = useState<number | null>(
    null
  );
  console.log("Programmes data:", programmes);
  console.log("Selected wash object from programmescreen:", washObject);

  const handleProgrammePress = (value: number) => {
    setSelectedProgrammeId(value);
    setWashObject((prev: any) => ({
      ...prev,
      programmeId: value,
    }));
    console.log("Selected additional programme id:", value);
  };

  return (
    <View style={styles.container}>
      {programmes &&
        programmes.map((programme, index) => (
          <ProgrammeTypeBanner
            onPress={handleProgrammePress}
            value={programme.id}
            key={index}
            selected={selectedprogrammeId === programme.id}
            bannerTextLeft={programme.name}
            bannerTextRight={programme.price}
          />
        ))}
      <View style={styles.buttonGroup}>
        <Button
          variant="iconButtonBlack"
          buttonText="Back"
          onPress={() => navigation.navigate("MapScreen")}
        />
        <Button
          variant="iconButtonGreen"
          buttonText="Next"
          // onPress={() => navigation.navigate("AdditionalProgramme")}
          onPress={() =>
            navigation.navigate("WashFlow", {
              screen: "AdditionalProgramme",
              params: {
                washObject: { ...washObject, programmeId: selectedprogrammeId },
                setWashObject,
              },
            })
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    paddingHorizontal: 40,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
});

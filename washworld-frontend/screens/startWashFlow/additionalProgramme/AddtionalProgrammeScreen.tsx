import { View, StyleSheet } from "react-native";
import Button from "../../../components/atoms/Button";
import AdditionalProgramme from "../../../components/AdditonalProgramme";
import CrossIcon from "../../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useGetAdditionalProgrammes } from "./AdditionalProgrammeQuery";
import { Text } from "@react-navigation/elements";

type AdditionalProgramme = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export default function AdditionalProgrammeScreen() {
  const route = useRoute();
  const params = route.params as any;
  const washObject = params.washObject?.washObject ?? params.washObject;
  const setWashObject =
    params.setWashObject ?? params.washObject?.setWashObject ?? (() => {});

  // Fetch additional programmes using the tanstack query
  const { data: additionalProgrammes, isLoading } =
    useGetAdditionalProgrammes();
  const navigation = useNavigation<any>();
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleProgrammePress = (value: number) => {
    setSelectedValue(value);
    // Update the washObject with the selected additional programme id
    setWashObject((prev: any) => ({
      ...prev,
      additionalProgrammeId: value,
    }));
  };

  // If the data is loading, return a loading indicator
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        {additionalProgrammes.map(
          (programme: AdditionalProgramme, index: number) => (
            <AdditionalProgramme
              key={index}
              title={programme.name}
              text={programme.description}
              price={programme.price}
              value={programme.id}
              onPress={handleProgrammePress}
              selected={selectedValue === programme.id}
            />
          )
        )}
      </View>
      <View style={styles.buttonGroup}>
        <Button
          variant="iconButtonBlack"
          buttonText="Previous"
          // This button navigates back to the previous screen and passes the washObject
          onPress={() => {
            // Remove additionalProgrammeId from washObject if it exists
            const {
              additionalProgrammeId,
              ...washObjectWithoutAdditionalProgrammeId
            } = washObject;

            navigation.navigate("WashFlow", {
              screen: "Programme",
              params: {
                washObject: {
                  washObject: washObjectWithoutAdditionalProgrammeId, // Pass the modified washObject
                  setWashObject, // Pass the setWashObject function
                },
              },
            });
          }}
        />
        <Button
          variant="iconButtonGreen"
          buttonText="Next"
          // This button navigates to the AntennaDismount screen and passes the washObject
          onPress={
            selectedValue
              ? () =>
                  navigation.navigate("WashFlow", {
                    screen: "AntennaDismount",
                    params: {
                      // Pass the modified washObject
                      washObject: {
                        ...washObject,
                        additionalProgrammeId: selectedValue,
                        setWashObject, // Pass the setWashObject function
                      },
                    },
                  })
              : undefined
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-end",
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
    paddingHorizontal: 40,
    paddingVertical: 80,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
  },
  programmeList: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
  },
});

import { View, StyleSheet } from "react-native";
import Button from "../../../components/atoms/Button";
import AdditionalProgramme from "../../../components/AdditonalProgramme";
import CrossIcon from "../../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { useGetAdditionalProgrammes } from "./AdditionalProgrammeQuery";

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
  const { data: additionalProgrammes } = useGetAdditionalProgrammes() as {
    data: AdditionalProgramme[];
  };
  console.log("Programmes data:", additionalProgrammes);

  console.log(
    "Selected wash object from additional programme screen:",
    washObject
  );

  const navigation = useNavigation<any>();
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  const handleProgrammePress = (value: number) => {
    setSelectedValue(value);
    setWashObject((prev: any) => ({
      ...prev,
      additionalProgrammeId: value,
    }));
    console.log("Selected additional programme id:", value);
  };

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        {additionalProgrammes &&
          additionalProgrammes.map((programme, index) => (
            <AdditionalProgramme
              key={index}
              title={programme.name}
              text={programme.description}
              price={programme.price}
              value={programme.id}
              onPress={handleProgrammePress}
              selected={selectedValue === programme.id}
            />
          ))}
      </View>
      <View style={styles.buttonGroup}>
        <Button
          variant="iconButtonBlack"
          buttonText="Previous"
          // onPress={() => navigation.navigate("Programme")}
          onPress={() => {
            const { additionalProgrammeId, ...washObjectWithoutAdditionalProgrammeId } =
              washObject;

            navigation.navigate("WashFlow", {
              screen: "Programme",
              params: {
                washObject: {
                  washObject: washObjectWithoutAdditionalProgrammeId,
                  setWashObject,
                },
              },
            });
          }}
        />
        <Button
          variant="iconButtonGreen"
          buttonText="Next"
        onPress={
          selectedValue
            ? () =>
                navigation.navigate("WashFlow", {
                  screen: "AntennaDismount",
                  params: {
                    washObject: {
                      ...washObject,
                      additionalProgrammeId: selectedValue,
                      setWashObject,
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

import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import AdditionalProgramme from "../../components/AdditonalProgramme";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { useState } from "react";
import { useGetAdditionalProgrammes } from "./AdditionalProgrammeQuery";

type AdditionalProgramme = {
  id: number;
  name: string;
  price: number;
  description: string;
};
export default function AdditionalProgrammeScreen() {
  const { data: additionalProgrammes } = useGetAdditionalProgrammes() as {
    data: AdditionalProgramme[];
  };
  console.log("Programmes data:", additionalProgrammes);

  const navigation = useNavigation<RootTabParamList>();
  const [selectedValue, setSelectedValue] = useState<number | null>(null);

  

  const handleProgrammePress = (value: number) => {
    setSelectedValue(value);
    console.log("Selected additional programme id:", value);
  };

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        {additionalProgrammes && additionalProgrammes.map((programme, index) => (
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
          onPress={() => navigation.navigate("Programme")}
        />
        <Button
          variant="iconButtonGreen"
          buttonText="Next"
          onPress={() => navigation.navigate("AntennaDismount")}
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

import { View, StyleSheet } from "react-native";
import ProgrammeTypeBanner from "../../components/atoms/ProgrammeTypeBanner";
import Button from "../../components/atoms/Button";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/WashFlowStackScreen";
import { useState } from "react";
import { useGetProgrammes } from "./ProgrammeQuery";

type Programme = {
  id: number;
  name: string;
  price: number;
};

export default function ProgrammeScreen() {
  const { data: programmes } = useGetProgrammes() as { data: Programme[] };
  const navigation = useNavigation<RootStackParamList>();
  const [selectedprogrammeId, setSelectedProgrammeId] = useState<number | null>(
    null
  );
  console.log("Programmes data:", programmes);

  const handleProgrammePress = (value: number) => {
    setSelectedProgrammeId(value);
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
          onPress={() => navigation.navigate("AdditionalProgramme")}
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

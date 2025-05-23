import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { Text } from "@react-navigation/elements";
import { useCreateWash } from "./washQuery";

export default function StartWashScreen() {
  const navigation = useNavigation<RootTabParamList>();
  const route = useRoute();
  const params = route.params as any;
  const washObject = params.washObject?.washObject || params.washObject;
  const { mutate } = useCreateWash();


  const handleStartWash = () => {
    const formattedWashObject = {
      user: { id: 1 },
      hall: { id: washObject.hallId },
      programme: { id: washObject.programmeId },
      additionalProgramme: { id: washObject.additionalProgrammeId },
    };
    console.log("Wash object before sending", formattedWashObject);

    mutate(formattedWashObject);
  };

  console.log("Selected wash object from start wash:", washObject);

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        <Text style={styles.title}>Start wash</Text>
      </View>
      <View style={styles.buttonGroup}>
        <Button
          variant="primary"
          buttonText="Start Wash"
          onPress={handleStartWash}
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
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    width: "100%",
  },
  title: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    width: "80%",
  },
});

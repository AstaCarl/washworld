import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "@react-navigation/elements";
import CarAlertIcon from "../../components/icons/CarAlertIcon";

export default function AntennaDismountScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const params = route.params as any;
  // const washObject = params.washObject?.washObject ?? params.washObject;
  const washObject = params.washObject;
  const setWashObject =
    params.setWashObject ?? params.washObject?.setWashObject ?? (() => {});

  console.log("Selected wash object from antenna dismount screen:", washObject);

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        <CarAlertIcon color="#FFF" />
        <Text style={styles.title}>Remember to dismount your antenna!</Text>
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
              screen: "AdditionalProgramme",
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
          // This button navigates to the StartWash screen and passes the washObject
          onPress={() =>
            navigation.navigate("WashFlow", {
              screen: "StartWash",
              params: {
                washObject: { washObject },
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

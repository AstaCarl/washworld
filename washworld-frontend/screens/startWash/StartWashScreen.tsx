import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Text } from "@react-navigation/elements";
import { useCreateWash, useGetWashById } from "./washQuery";
import React, { useEffect } from "react";
import { reloadJwtFromStorage } from "../auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import { RootState } from "../../store/store";

export default function StartWashScreen() {
  const navigation = useNavigation<any>();
  const route = useRoute();
  const params = route.params as any;
  const washObject = params.washObject?.washObject || params.washObject;
  const [createdWashObject, setCreatedWashObject] = React.useState({});
  const token = useSelector((state: RootState) => state.auth.token);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(reloadJwtFromStorage());
  }, []);

  const { mutate } = useCreateWash((data) => {
    console.log("Wash started successfully:", data);
    setCreatedWashObject(data);
    navigation.navigate("WashFlow", {
      screen: "ActiveWash",
      params: {
        createdWashObject: data,
      },
    });
  });

  const handleStartWash = () => {
    const formattedWashObject = {
      hall: { id: washObject.hallId },
      programme: { id: washObject.programmeId },
      additionalProgramme: { id: washObject.additionalProgrammeId },
    };
    console.log("Wash object before sending", formattedWashObject);

    mutate({ washObject: formattedWashObject, token });
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

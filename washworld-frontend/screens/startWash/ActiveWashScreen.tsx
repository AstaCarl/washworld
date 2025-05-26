import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { Text } from "@react-navigation/elements";
import { useCreateWash, useGetWashById } from "./washQuery";
import React, { use, useEffect } from "react";
import Counter from "../../components/atoms/Counter";

type WashObject = {
  id: number;
  startedTimeDate: Date;
  programme: {
    id: number;
    name: string;
    price: number;
    runTimeInSeconds: number;
  };
  additionalProgramme: {
    id: number;
    name: string;
    description: string;
    price: number;
    runTimeInSeconds: number;
  };
  finishedTime: string;
};

export default function ActiveWashScreen() {
  const navigation = useNavigation<RootTabParamList>();
  const route = useRoute();
  const params = route.params as any;
  const createdWashObject =
    params.createdWashObject?.createdWashObject || params.createdWashObject;
  const { data: wash } = useGetWashById(createdWashObject.id) as {
    data: WashObject;
  };

  console.log("Washes data11111111111111111111:", wash && wash);

  return (
    <View style={styles.container}>
      <CrossIcon
        onPress={() => navigation.navigate("MapScreen")}
        color="#fff"
      />
      <View style={styles.programmeList}>
        {wash ? (
          <>
            <Text style={styles.title}>{wash.programme.name}</Text>
            <Text style={styles.title}>{wash.additionalProgramme.name}</Text>
            <Counter
              number={wash.finishedTime}
              onFinish={() => navigation.navigate("Home")}
            />
          </>
        ) : (
          <Text style={styles.title}>Loading...</Text>
        )}
      </View>
      <View style={styles.buttonGroup}>
        <Button
          variant="danger"
          buttonText="EMERGENCY STOP"
          // onPress={handleStartWash}
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

import { View, StyleSheet } from "react-native";
import Button from "../../components/atoms/Button";
import CrossIcon from "../../components/icons/CrossIcon";
import { useNavigation, useRoute } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { Text } from "@react-navigation/elements";
import { useGetWashById } from "./washQuery";
import React from "react";
import Counter from "../../components/atoms/Counter";
import Subtitle from "../../components/atoms/Subtitle";

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
      <View style={styles.washList}>
        {wash && wash ? (
          <>
          <View style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Text style={styles.title}>{wash.programme.name}</Text>
            <View style={styles.row}>
            <Text style={styles.plus}>+</Text>
            <Subtitle variant="whiteCapital" title={wash.additionalProgramme.name}/>
            </View>
            </View>
            <Counter
            style={{fontSize: 58,}}
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
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  washList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    height: "70%",
    gap: 20,
  },
  title: {
    color: "#fff",
    fontSize: 38,
    fontWeight: "bold",
    textAlign: "center",
  },
  plus: {
    color: "#0CE578",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
  row:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10
  }
});

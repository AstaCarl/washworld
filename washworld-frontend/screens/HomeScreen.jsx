import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";
import React, {useEffect} from "react";
import Button from "../components/atoms/Button";
import EcoCard from "../components/EcoCard";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "../store/store";
import { reloadJwtFromStorage } from "../screens/auth/authSlice";
import Title from "../components/atoms/Title";
import StartWash from "../components/StartWash";

export default function HomeScreen() {
const token = useSelector((state) => state.token || null);
const dispatch = useDispatch();

  useEffect(() => {
    dispatch(reloadJwtFromStorage());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Title title="Welcome Back" variant="green"/>
      <StartWash/>
      <EcoCard/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    backgroundColor: "#F7F7F7",
    width: "100%",
    paddingHorizontal: 20,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

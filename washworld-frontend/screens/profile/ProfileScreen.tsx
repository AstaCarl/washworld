import { StyleSheet, View } from "react-native";
import React from "react";
import Button from "../../components/atoms/Button";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";
import Title from "../../components/atoms/Title";
import Subtitle from "../../components/atoms/Subtitle";


export default function ProfileScreen() {
  const dispatch = useDispatch();


  const handleLogout = async () => {
    await dispatch(logout());
    console.log("Logout successful");
  };

  return (
    <View style={styles.container}>
      <View>
      <Title variant="green" title="Your profile"/>
      <Subtitle variant="blackLight" title="Here you can edit your membership, profile or logout"/>
      </View>
      <Button variant="danger" buttonText="Logout" onPress={handleLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#F7F7F7",
    width: "100%",
    height: "100%",
    paddingHorizontal: 20,
    paddingVertical: 80,
  },
  container2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});

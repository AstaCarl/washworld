import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import React from 'react';
import Button from "../../components/atoms/Button";
import { AppDispatch } from "../../store/store";
import { useDispatch } from "react-redux";
import { logout } from "../auth/authSlice";


export default function ProfileScreen() {
  const dispatch = useDispatch<AppDispatch>();

  const handleLogout = async () => {
    await dispatch(logout());
    console.log("Logout successful");
  }

  return (
    <View>
      <Text>Profile</Text>
      <Button
      variant="danger"
      buttonText="Logout"
      onPress={handleLogout}
      />
    </View>
  );
}

import { Label } from "@react-navigation/elements";
import { View } from "react-native";
import { StyleSheet, TextInput } from "react-native";
import PasswordIcon from "./icons/PasswordIcon";
import React from "react";

type inputProps = {
  labelText: string;
  placeholderText: string;
  value?: string;
  password?: boolean;
  onChangeText?: (text: string) => void;
};

export default function CustomTextInput({
  labelText,
  placeholderText,
  value,
  onChangeText,
  password,
}: inputProps) {
    const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);


  return (
    <View style={styles.inputGroup}>
      <Label style={styles.label}>{labelText}</Label>
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#666666"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={!isPasswordVisible} // Show password if isPasswordVisible is true
      />{" "}
      {password ? (
        <View style={styles.icon}>
        <PasswordIcon
          color="#666666"
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
        />
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  inputGroup: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    gap: 5,
    width: "100%",
    position: "relative",
  },
  input: {
    width: "100%",
    height: 60,
    backgroundColor: "#F7F7F7",
    borderBottomColor: "#E5E5E5",
    borderBottomWidth: 2,
    paddingHorizontal: 12,
  },
  icon: {
    position: "absolute",
    right: 12, 
    top: 45, 
  }
});

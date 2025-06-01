import { Label } from "@react-navigation/elements";
import { StyleSheet, TextInput, View } from "react-native";
import PasswordIcon from "../icons/PasswordIcon";
import React from "react";
import Paragraf from "./Paragraf";
import SearchIcon from "../icons/SearchIcon";

type inputProps = {
  labelText?: string;
  placeholderText: string;
  value?: string;
  password?: boolean;
  paragraf?: string;
  search?: boolean;
  onChangeText?: (text: string) => void;
};

export default function CustomTextInput({
  labelText,
  placeholderText,
  value,
  onChangeText,
  password,
  paragraf,
  search,
}: inputProps) {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);

  return (
    <View style={styles.inputGroup}>
      {labelText ? <Label style={styles.label}>{labelText}</Label> : null}
      {paragraf ? <Paragraf text={paragraf} variant="label" /> : null}
      <TextInput
        style={styles.input}
        placeholder={placeholderText}
        placeholderTextColor="#666666"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={password ? !isPasswordVisible : false}
      />
      {password ? (
        <View style={styles.icon}>
          <PasswordIcon
            color="#666666"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        </View>
      ) : null}
            {search ? (
        <View style={styles.searchIcon}>
          <SearchIcon
            color="#666666"
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
  },
    searchIcon: {
    position: "absolute",
    right: 12,
    top: 20,
  },
});

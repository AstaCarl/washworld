import { Label } from "@react-navigation/elements";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import ChevronIcon from "../icons/ChevronIcon";

type selectInputProps = {
  labelText: string;
  placeholderText?: string;
  data: any[];
  value?: any;
  onSelect?: (selectedItem: any) => void;
  error?: boolean;
  errorText?: string;
};

export default function SelectInput({
  labelText,
  placeholderText,
  data,
  value,
  onSelect,
  error,
  errorText,
}: selectInputProps) {


  return (
    <View style={styles.inputGroup}>
      <Label style={styles.label}>{labelText}</Label>
      <SelectDropdown
        data={data}
        onSelect={(selectedItem) => {
          console.log("Selected item:", selectedItem);
          onSelect && onSelect(selectedItem);
        }}
        renderButton={(selectedItem) => {
          return (
            <View style={error ? styles.inputError : styles.input}>
              <Text style={error ? styles.dropdownButtonTxtStyleError : styles.dropdownButtonTxtStyle}>
                {selectedItem ? selectedItem.name : placeholderText}
              </Text>
            </View>
          );
        }}
        renderItem={(item, isSelected) => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
                ...(isSelected && { backgroundColor: "#f7f7f7" }),
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.name}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
            {error ? <Label style={styles.errorLabel}>{errorText}</Label> : null}

      <View style={styles.icon}>
        <ChevronIcon color={`${error ? "#FF6B06" : "#06C167"}`} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },
  errorLabel: {
    fontSize: 12,
    color: "#FF6B06",
    fontWeight: "bold", 
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
    justifyContent: "center",
  },
  inputError: {
    width: "100%",
    height: 60,
    backgroundColor: "#F7F7F7",
    borderColor: "#FF6B06",
    borderWidth: 2,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  dropdownButtonTxtStyle: {
    fontSize: 14,
    color: "#666666",
  },
  dropdownButtonTxtStyleError: {
    fontSize: 14,
    color: "#FF6B06",
  },
  dropdownMenuStyle: {
    backgroundColor: "#f7f7f7",
  },
  dropdownItemStyle: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: "500",
    color: "#333333",
  },
  icon: {
    position: "absolute",
    right: 12,
    top: 48,
  },
});

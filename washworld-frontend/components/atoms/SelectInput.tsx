import { Label } from "@react-navigation/elements";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import React from "react";
import SelectDropdown from "react-native-select-dropdown";
import ChevronIcon from "../icons/ChevronIcon";

type selectInputProps = {
  labelText: string;
  placeholderText?: string;
};

export default function SelectInput({ labelText, placeholderText }: selectInputProps) {
  const testData = [
    { id: "1", name: "Item 1" },
    { id: "2", name: "Item 2" },
    { id: "3", name: "Item 3" },
    { id: "4", name: "Item 4" },
  ];

  return (
    <View style={styles.inputGroup}>
      <Label style={styles.label}>{labelText}</Label>
      <SelectDropdown
        data={testData}
        onSelect={(selectedItem) => {
          console.log("Selected item:", selectedItem);
        }}
        renderButton={(selectedItem) => {
          return (
            <View style={styles.input}>
              <Text style={styles.dropdownButtonTxtStyle}>
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
      <View style={styles.icon}>
        <ChevronIcon color="#06C167" />
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
  dropdownButtonTxtStyle: {
    fontSize: 14,
    color: "#666666",
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

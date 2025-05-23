import { View, StyleSheet, TouchableOpacity } from "react-native";
import Paragraf from "./Paragraf";
import Subtitle from "./Subtitle";
import { useState } from "react";

type ProgrammeTypeBannerProps = {
  bannerTextLeft: string;
  bannerTextRight: number;
  value: number;
  onPress?: (value: number) => void;
  selected?: boolean;
};

export default function ProgrammeTypeBanner({
  bannerTextLeft,
  bannerTextRight,
  value,
  onPress,
  selected = false,
}: ProgrammeTypeBannerProps) {

    const handlePress = () => {
    if (onPress) {
      onPress(value);
    }
  };

  return (
      <TouchableOpacity  onPress={handlePress} style={styles.container}>
        <View style={styles.left}>
          <Subtitle title={bannerTextLeft} variant="whiteBold" />
        </View>
        <View style={selected ? styles.rightSelected : styles.right}>
          <View style={styles.innerContainer}>
            <Paragraf text={`+ ${bannerTextRight},-`} variant="white" />
          </View>
        </View>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06c167",
    flexDirection: "row",
    overflow: "hidden",
    height: 60,
    marginVertical: 20,
  },
  left: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 3,
    justifyContent: "center",
  },
  right: {
    backgroundColor: "#666666",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ skewX: "-40deg" }],
  },
  rightSelected: {
    backgroundColor: "#06c167",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ skewX: "-40deg" }],
  },
  innerContainer: {
    transform: [{ skewX: "40deg" }],
  },
  whiteBannerText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

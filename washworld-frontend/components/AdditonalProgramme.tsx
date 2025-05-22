import { StyleSheet, TouchableOpacity, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import Paragraf from "./atoms/Paragraf";
import { useState } from "react";

type AdditionalProgrammeProps = {
  title: string;
  text: string;
  price: string | number;
};

export default function AdditionalProgramme({
  title,
  text,
  price,
}: AdditionalProgrammeProps) {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={!selected ? styles.container : styles.containerSelected}
    >
      <View>
        <Subtitle title={title} variant="whiteCapital" />
        <Paragraf text={text} variant="white" />
      </View>
      <Subtitle title={price} variant="whiteCapital" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#666666",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  containerSelected: {
    backgroundColor: "#0CE578",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

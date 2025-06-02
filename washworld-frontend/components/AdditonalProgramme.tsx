import { StyleSheet, TouchableOpacity, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import Paragraf from "./atoms/Paragraf";

type AdditionalProgrammeProps = {
  title: string;
  text: string;
  price: string | number;
  value: number;
  onPress?: (value: number) => void;
  selected?: boolean;
};

export default function AdditionalProgramme({
  title,
  text,
  price,
  onPress,
  value,
  selected = false,
}: AdditionalProgrammeProps) {
  // Function to handle the press event and sets the value if onPress is provided
  const handlePress = () => {
    if (onPress) {
      onPress(value);
    }
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
      <Subtitle title={`+ ${price},-`} variant="whiteCapital" />
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

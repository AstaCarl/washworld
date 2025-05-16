import { Text } from "@react-navigation/elements";
import { StyleSheet, View } from "react-native";

type LocationInfoProps = {
  selectedLocation?: any;
};

export default function LocationInfo({ selectedLocation }: LocationInfoProps) {
    return (
      <View>
        <Text>
            hello
        </Text>
      </View>
    );
}

const styles = StyleSheet.create({
    card: {
      position: "absolute",
      zIndex: 2,
      bottom: 0,
      left: 0,
      right: 0,
      height: 100,
      backgroundColor: "white",
      padding: 10,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
});

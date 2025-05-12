import { View, StyleSheet } from "react-native";
import Paragraf from "./Paragraf";


type ProgrammeTypeBannerProps = {
  buttonText: string;
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "iconButtonGreen"
    | "iconButtonBlack";
};

export default function ProgrammeTypeBanner() {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Paragraf text="Brilliant/All inclusive" variant="white" />
      </View>
      <View style={styles.right}>
      <Paragraf text="+ 65,-" variant="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#06c167",
    flexDirection: "row",
    overflow: "hidden",
    margin: 10,
  },
  left: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    flex: 3,
    justifyContent: "center",
  },
  right: {
    backgroundColor: "#666666",
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
    transform: [{ skewX: "-40deg" }],
  },
  price: {
    color: "white",
    fontWeight: "bold",
  },
});

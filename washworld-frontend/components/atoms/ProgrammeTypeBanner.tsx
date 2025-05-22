import { View, StyleSheet } from "react-native";
import Paragraf from "./Paragraf";

type ProgrammeTypeBannerProps = {
  bannerTextLeft: string;
  bannerTextRight: number;
};

export default function ProgrammeTypeBanner({
  bannerTextLeft,
  bannerTextRight,
}: ProgrammeTypeBannerProps) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Paragraf text={bannerTextLeft} variant="white"></Paragraf>
      </View>
      <View style={styles.right}>
        <View style={styles.innerContainer}>
          <Paragraf text={bannerTextRight} variant="white" />
        </View>
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
  innerContainer: {
    transform: [{ skewX: "40deg" }],
  },
  whiteBannerText: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
});

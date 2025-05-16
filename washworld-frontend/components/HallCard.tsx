import { StyleSheet, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";


export default function HallCard({ halls }: any) {
  return (
    <View style={styles.container}>
      {halls.map((hall: any, index: number) => (
        <View style={styles.column} key={index}>
          <Subtitle title={`hall ${index + 1}`} variant="whiteCapital" />
          {hall.washes[0]?.startedTimeDate ? (
            <Subtitle
              title="In use"
              variant="whiteCapital"
            />
          ) : hall.operationalStatus ? (
            <CheckIcon color="#0CE578" />
          ) : (
            <CrossIcon color="#FF6B06" />
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#000",
    paddingHorizontal: 10,
    paddingVertical: 15,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: 40,
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 5,
  }
});

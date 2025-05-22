import { StyleSheet, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";
import Counter from "./atoms/Counter";
import { useState } from "react";

export default function HallCard({ halls }: any) {
    const [_, setRerender] = useState(false); // dummy state to force rerender

  console.log("halls data:", halls);

  const formattedDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    // Full date and time in Danish locale
    return date.toLocaleString("da-DK", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return (
    <View style={styles.container}>
      {halls.map((hall: any, index: number) => {
        const now = new Date();

        const isAnyWashRunning = hall.washes?.some(
          (wash: any) =>
            wash.startedTimeDate &&
            wash.finishedTime &&
            now >= new Date(wash.startedTimeDate) &&
            now < new Date(wash.finishedTime)
        );

        const runningWash = hall.washes.find(
          (wash: any) =>
            wash.startedTimeDate &&
            wash.finishedTime &&
            now >= new Date(wash.startedTimeDate) &&
            now < new Date(wash.finishedTime)
        );

        return (
          <View style={styles.column} key={index}>
            <Subtitle title={`hall ${index + 1}`} variant="whiteCapital" />
            {!hall.operationalStatus ? (
              <CrossIcon color="#FF6B06" />
            ) : isAnyWashRunning && runningWash ? (
              <Counter
                number={runningWash.finishedTime}
                onFinish={() => setRerender(r => !r)}
              />
            ) : (
              <CheckIcon color="#0CE578" />
            )}
          </View>
        );
      })}
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
  },
});

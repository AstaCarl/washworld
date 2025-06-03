import { StyleSheet, TouchableOpacity, View } from "react-native";
import Subtitle from "./atoms/Subtitle";
import CheckIcon from "./icons/CheckIcon";
import CrossIcon from "./icons/CrossIcon";
import Counter from "./atoms/Counter";
import { useState } from "react";

export default function HallCard({
  halls,
  selectedHallId,
  setSelectedHallId,
}: any) {
  const [_, setRerender] = useState(false); // State to trigger rerender when a wash finishes

  // Function to handle hall selection
  const handleHallPress = (id: number) => {
    setSelectedHallId(id);
  };

  return (
    <View style={styles.container}>

      {halls.map((hall: any, index: number) => {
        const now = new Date(); // Get the current date and time

        // Check if any wash is currently running in the hall
        const isAnyWashRunning = hall.washes?.some(
          (wash: any) =>
            wash.startedTimeDate &&
            wash.finishedTime &&
            // Check if the current time is between the started and finished times
            now >= new Date(wash.startedTimeDate) &&
            now < new Date(wash.finishedTime)
        );

        // Find the currently running wash in the hall
        const runningWash = hall.washes.find(
          (wash: any) =>
            wash.startedTimeDate &&
            wash.finishedTime &&
            now >= new Date(wash.startedTimeDate) &&
            now < new Date(wash.finishedTime)
        );

        return (
          <TouchableOpacity
            onPress={() => handleHallPress(hall.id)}
            disabled={!hall.operationalStatus || isAnyWashRunning} // Disable if hall is not operational or if any wash is running
            key={index}
            style={selectedHallId === hall.id ? styles.boxSelected : styles.box}
          >
            <View style={styles.column}>
              <Subtitle title={`hall ${index + 1}`} variant="whiteCapital" />
              {!hall.operationalStatus ? (
                <CrossIcon color="#FF6B06" />
              ) : isAnyWashRunning && runningWash ? (
                <Counter
                  number={runningWash.finishedTime}
                  onFinish={() => setRerender((r) => !r)} // trigger rerender
                />
              ) : (
                <CheckIcon color="#0CE578" />
              )}
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
    height: "100%",
    justifyContent: "center",
  },
  box: {
    backgroundColor: "#000",
    height: 80,
    width: 110,
  },
  boxSelected: {
    backgroundColor: "#666",
    height: 80,
    width: 110,
  },
});

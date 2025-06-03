import { useEffect, useState } from "react";
import { StyleSheet, Text, TextStyle, StyleProp } from "react-native";

type counterProps = {
  number: string;
  onFinish?: () => void; // Callback function when the counter reaches zero
  style?: StyleProp<TextStyle>;
};

export default function Counter({ number, onFinish, style }: counterProps) {
  // Function to calculate the remaining time in seconds
  const getTimeRemaining = (finishedTimeString: string) => {
    if (!finishedTimeString) return 0;
    const now = new Date(); // get current time
    const finishedTime = new Date(finishedTimeString); // convert string to Date object

    let diff = Math.floor((finishedTime.getTime() - now.getTime()) / 1000); // calculate the time remaining
    return diff < 0 ? 0 : diff; // If diif is negative, return 0
    // Otherwise, return the difference in seconds
  };

  const [secondsLeft, setSecondsLeft] = useState(getTimeRemaining(number));

  useEffect(() => {
    // If seconds left is 0, call the onFinish callback and stop the interval
    if (secondsLeft === 0) {
      onFinish && onFinish();
      return;
    }
    // Update the seconds left every second
    const interval = setInterval(() => {
      setSecondsLeft(getTimeRemaining(number));
    }, 1000);
    return () => clearInterval(interval); // cleanup function to clear the interval anytime the component unmounts or updates
  }, [number, secondsLeft, onFinish]);

  if (secondsLeft === 0) return null;

  // Format the seconds left into MM:SS format
  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60; // Get the remaining seconds
  const formatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  return <Text style={[styles.subtitleWhiteCapital, style]}>{formatted}</Text>;
}

const styles = StyleSheet.create({
  subtitleWhiteCapital: {
    color: "#FFFFFF",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

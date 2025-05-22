import { useEffect, useState } from "react";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

type counterProps = {
  number: string;
  onFinish?: () => void;
};

export default function Counter({ number, onFinish }: counterProps) {

  const getTimeRemaining = (finishedTimeString: string) => {
    if (!finishedTimeString) return 0;
    const now = new Date();
    const finishedTime = new Date(finishedTimeString);
    let diff = Math.floor((finishedTime.getTime() - now.getTime()) / 1000);
    return diff < 0 ? 0 : diff;
  };

  const [secondsLeft, setSecondsLeft] = useState(getTimeRemaining(number));

  useEffect(() => {
    if (secondsLeft === 0) {
      onFinish && onFinish();
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft(getTimeRemaining(number));
    }, 1000);
    return () => clearInterval(interval);
  }, [number, secondsLeft, onFinish]);

  if (secondsLeft === 0) return null;

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formatted = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;


  return (
    <Text
      style={styles.subtitleWhiteCapital}
    >
      {formatted}
    </Text>
  );
}

const styles = StyleSheet.create({
  subtitle: {
    fontSize: 24,
  },
  subtitleBlack: {
    color: "#000000",
    fontWeight: "bold",
  },
  subtitleLight: {
    color: "#000000",
  },
    subtitleGreyLight: {
    color: "#666666",
    fontSize: 16,
  },
  subtitleGreen: {
    color: "#06C167",
    fontWeight: "bold",
  },
  subtitleGreenCapital: {
    fontSize: 18,
    textTransform: "uppercase",
  },
  subtitleWhiteCapital: {
    color: "#FFFFFF",
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

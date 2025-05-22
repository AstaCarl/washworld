import { Text } from "react-native";
import { StyleSheet } from "react-native";

type paragrafProps = {
  text: string | number;
  variant?: "primary" | "bold" | "white";
};

export default function Paragraf({ text, variant }: paragrafProps) {
  return (
    <Text
      style={[
        variant === "primary" && styles.paragrafPrimary,
        variant === "bold" && styles.paragrafBold,
        variant === "white" && styles.paragrafWhite,
      ]}
    >
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  paragrafPrimary: {
    fontSize: 16,
  },
  paragrafBold: {
    color: "#000000",
    fontWeight: "bold",
  },
  paragrafWhite: {
    color: "#ffffff",
  },
});

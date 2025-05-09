import { Text } from "react-native";
import { StyleSheet } from "react-native";

type subtitleProps = {
  title: string;
  variant?: "blackBold" | "blackLight" | "green" | "greenCapital";
};

export default function Subitle({ title, variant }: subtitleProps) {
  return (
    <Text
      style={[
        styles.subtitle,
        variant === "blackBold" && styles.subtitleBlack,
        variant === "blackLight" && styles.subtitleLight,
        variant === "green" && styles.subtitleGreen,
        variant === "greenCapital" && [
          styles.subtitleGreen,
          styles.subtitleGreenCapital,
        ],
      ]}
    >
      {title}
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
  subtitleGreen: {
    color: "#06C167",
    fontWeight: "bold",
  },
  subtitleGreenCapital: {
    fontSize: 18,
    textTransform: "uppercase",
  },
});

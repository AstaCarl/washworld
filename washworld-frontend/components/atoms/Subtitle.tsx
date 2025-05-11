import { Text } from "react-native";
import { StyleSheet } from "react-native";

type subtitleProps = {
  title: string;
  variant?: "blackBold" | "blackLight" | "green" | "greenCapital" | "greyLight" | "whiteCapital";
};

export default function Subtitle({ title, variant }: subtitleProps) {
  return (
    <Text
      style={[
        styles.subtitle,
        variant === "blackBold" && styles.subtitleBlack,
        variant === "blackLight" && styles.subtitleLight,
        variant === "greyLight" && styles.subtitleGreyLight,
        variant === "green" && styles.subtitleGreen,
        variant === "whiteCapital" && styles.subtitleWhiteCapital,
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

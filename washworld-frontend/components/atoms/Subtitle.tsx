import { Text } from "react-native";
import { StyleSheet } from "react-native";

type subtitleProps = {
  title: string;
  variant?: "blackBold" | "blackLight" | "green" | "greenCapital" | "greyLight" | "whiteCapital" | "whiteBold";
  style?: any;
};

export default function Subtitle({ title, variant, style }: subtitleProps) {
  return (
    <Text
      style={[
        styles.subtitle,
        variant === "blackBold" && styles.subtitleBlack,
        variant === "whiteBold" && styles.subtitleWhite,
        variant === "blackLight" && styles.subtitleLight,
        variant === "greyLight" && styles.subtitleGreyLight,
        variant === "green" && styles.subtitleGreen,
        variant === "whiteCapital" && styles.subtitleWhiteCapital,
        variant === "greenCapital" && [
          styles.subtitleGreen,
          styles.subtitleGreenCapital,
        ],
        style
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
  subtitleWhite: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 20,
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

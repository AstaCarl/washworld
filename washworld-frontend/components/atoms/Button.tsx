import { Text } from "@react-navigation/elements";
import { StyleSheet, TouchableOpacity } from "react-native";
import ChevronIcon from "../icons/ChevronIcon";

type ButtonProps = {
  buttonText: string;
  variant:
    | "primary"
    | "secondary"
    | "danger"
    | "iconButtonGreen"
    | "iconButtonBlack"
    | "greenLink";
    onPress?: () => void;
};

export default function Button({ buttonText, variant, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
    onPress={onPress}
      style={[
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
        variant === "danger" && styles.dangerButton,
        variant === "iconButtonGreen" && styles.iconButtonGreen,
        variant === "iconButtonBlack" && styles.iconButtonBlack,
        variant === "greenLink" && styles.greenLink,
      ]}
    >
      <Text
        style={[
          variant === "primary" && styles.whiteButtonText,
          variant === "secondary" && styles.whiteButtonText,
          variant === "danger" && styles.whiteButtonText,
          variant === "iconButtonGreen" && styles.whiteButtonText,
          variant === "iconButtonBlack" && styles.whiteButtonText,
          variant === "greenLink" && styles.greenLinkText,
        ]}
      >
        {buttonText}
      </Text>
      {variant === "iconButtonGreen" || variant === "iconButtonBlack" ? (
        <ChevronIcon
          style={
            variant === "iconButtonGreen"
              ? styles.nextIcon
              : variant === "iconButtonBlack"
              ? styles.previousIcon
              : {}
          }
          color="white"
        />
      ) : null}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  primaryButton: {
    backgroundColor: "#06c167",
    height: 60,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#02AD5b",
    borderBottomWidth: 4,
  },
  whiteButtonText: {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
  },
  secondaryButton: {
    backgroundColor: "#666666",
    height: 60,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#484848",
    borderBottomWidth: 4,
  },
  dangerButton: {
    backgroundColor: "#FF6B06",
    height: 60,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#CA5302",
    borderBottomWidth: 4,
  },
  nextIcon: {
    transform: [{ rotate: "-90deg" }],
  },
  previousIcon: {
    transform: [{ rotate: "90deg" }],
  },
  iconButtonGreen: {
    backgroundColor: "#06c167",
    width: "50%",
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderBottomColor: "#02AD5b",
    borderBottomWidth: 4,
  },
  iconButtonBlack: {
    backgroundColor: "#000000",
    display: "flex",
    height: 50,
    flexDirection: "row-reverse",
    justifyContent: "center",
    alignItems: "center",
    width: "50%",
    gap: 10,
  },
  greenLink: {
    // backgroundColor: "#000",
  },
  greenLinkText: {
    color: "#06c167",
    fontSize: 16,
    fontWeight: "bold",
  }
});

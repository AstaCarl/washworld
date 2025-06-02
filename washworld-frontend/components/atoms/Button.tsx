import { StyleSheet, TouchableOpacity, Text } from "react-native";
import ChevronIcon from "../icons/ChevronIcon";

type ButtonProps = {
  buttonText: string;
  disabled?: boolean;
  variant: // Define the variant type
  | "primary"
    | "secondary"
    | "danger"
    | "iconButtonGreen"
    | "iconButtonBlack"
    | "greenLink";
  onPress?: () => void; // Optional onPress function
};

export default function Button({
  buttonText,
  variant,
  onPress,
  disabled,
}: ButtonProps) {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
        variant === "danger" && styles.dangerButton,
        variant === "iconButtonGreen" && styles.iconButtonGreen,
        variant === "iconButtonBlack" && styles.iconButtonBlack,
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
      {/* If the variant is "iconButtonGreen" or "iconButtonBlack", render the ChevronIcon */}
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
    width: "40%",
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
  greenLinkText: {
    color: "#06c167",
    fontSize: 16,
    fontWeight: "bold",
  },
});

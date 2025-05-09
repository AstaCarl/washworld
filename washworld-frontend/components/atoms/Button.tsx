import { Text } from "@react-navigation/elements";
import { StyleSheet, TouchableOpacity } from "react-native";

type ButtonProps = {
  buttonText: string;
  variant: "primary" | "secondary" | "danger" | "tertiary";
};

export default function Button({ buttonText, variant }: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        variant === "primary" && styles.primaryButton,
        variant === "secondary" && styles.secondaryButton,
        variant === "danger" && styles.dangerButton,
        // variant === "tertiary" && [
        //   styles.subtitleGreen,
        //   styles.subtitleGreenCapital,
        // ],
      ]}
    >
      <Text
        style={[
          variant === "primary" && styles.whiteButtonText,
          variant === "secondary" && styles.whiteButtonText,
          variant === "danger" && styles.whiteButtonText,
          // variant === "tertiary" && [
          //   styles.subtitleGreen,
          //   styles.subtitleGreenCapital,
          // ],
        ]}
      >
        {buttonText}
      </Text>
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
  // subtitleBlack: {
  //   color: "#000000",
  //   fontWeight: "bold",
  // },
  // subtitleLight: {
  //   color: "#000000",
  // },
  // subtitleGreen: {
  //   color: "#06C167",
  //   fontWeight: "bold",
  // },
  // subtitleGreenCapital: {
  //   fontSize: 18,
  //   textTransform: "uppercase",
  // },
});

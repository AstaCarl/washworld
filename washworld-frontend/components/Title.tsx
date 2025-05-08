import { title } from "process";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

type titleProps = {
  title: string;
  variant?: "green" | "white";
};

export default function Title({ title, variant }: titleProps) {
  return (
    <Text
      style={[
        styles.title,
        variant === "green" && styles.titleGreen,
        variant === "white" && styles.titleWhite,
      ]}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 40,
    fontWeight: "bold",
  },
  titleGreen: {
    color: "#06C167",
  },
  titleWhite: {
    color: "#FFFFFF",
  }
});

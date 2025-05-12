import { StyleSheet, View } from "react-native";
import React from "react";
import Title from "../../components/atoms/Title";
import CustomTextInput from "../../components/atoms/TextInput";
import Button from "../../components/atoms/Button";
import { useNavigation } from "@react-navigation/native";
import { RootTabParamList } from "../../navigation/TabsNavigation";

export default function LoginScreen() {
    const navigation = useNavigation<RootTabParamList>();
  return (
    <View style={styles.container}>
      <Title variant="green" title="Login to start your wash" />
      <View style={styles.loginForm}>
        <CustomTextInput labelText="E-mail" placeholderText="Your e-mail" />
        <View style={styles.buttonGroup}>
        <CustomTextInput
          labelText="Password"
          placeholderText="Your password"
          password
        />
        <Button buttonText="Forgot password?" variant="greenLink" />
        </View>
        <View style={styles.buttonGroup}>
          <Button
            buttonText="Login"
            variant="primary"
            onPress={() => console.log("Login button pressed")}
          />
          <Button onPress={() => navigation.navigate("Signup")} buttonText="Become a member" variant="greenLink" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  loginForm: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    marginTop: 40,
  },
  buttonGroup: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: 10,
  },
});

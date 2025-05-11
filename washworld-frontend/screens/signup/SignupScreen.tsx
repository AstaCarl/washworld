import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import Title from "../../components/atoms/Title";
import Subtitle from "../../components/atoms/Subtitle";
import CustomTextInput from "../../components/atoms/TextInput";
import SelectInput from "../../components/atoms/SelectInput";
import Button from "../../components/atoms/Button";
import Paragraf from "../../components/atoms/Paragraf";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
    const navigation = useNavigation<RootTabParamList>();;
  return (
    <ScrollView style={styles.container}>
      <Title variant="green" title="Become a member and wash anytime" />
      <View style={styles.loginGroup}>
        <Paragraf variant="primary" text="Already a member?" />
        <Button variant="greenLink" buttonText="Login now" onPress={() => {navigation.navigate("Login")}} />
      </View>
      <View style={styles.signupForm}>
        <CustomTextInput
          labelText="1. Your Car"
          placeholderText="AB12345"
          paragraf="Your membership applies to this car"
        />
        <SelectInput
          placeholderText="Choose a primary wash location"
          labelText="2. Where do you want to wash?"
        />
        <SelectInput
          placeholderText="Select a membership"
          labelText="3. Which membership suits you?"
        />
        <CustomTextInput
          labelText="4. Your E-mail"
          placeholderText="E-mail address"
        />{" "}
        <View style={styles.nameGroup}>
          <CustomTextInput
            labelText="5. Your Name"
            placeholderText="Firstname"
          />{" "}
          <CustomTextInput placeholderText="Lastname" />{" "}
        </View>
        <CustomTextInput
          labelText="6. Choose a password"
          placeholderText="Password"
        />
        <Button variant="primary" buttonText="Sign up" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    paddingVertical: 80,
    paddingHorizontal: 20,
  },
  signupForm: {
    display: "flex",
    flexDirection: "column",
    gap: 40,
    marginTop: 40,
    paddingBottom: 80,
  },
  loginGroup: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    marginTop: 20,
  },
  nameGroup: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  }

});

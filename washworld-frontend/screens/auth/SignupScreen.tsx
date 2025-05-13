import {
  ScrollView,
  StyleSheet,
  View,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import React from "react";
import Title from "../../components/atoms/Title";
import CustomTextInput from "../../components/atoms/TextInput";
import SelectInput from "../../components/atoms/SelectInput";
import Button from "../../components/atoms/Button";
import Paragraf from "../../components/atoms/Paragraf";
import { RootTabParamList } from "../../navigation/TabsNavigation";
import { useNavigation } from "@react-navigation/native";
import { AppDispatch, RootState } from "../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { signup } from "./authSlice";
import { useGetLocations, useGetMemberships } from "./userQuery";

export default function SignupScreen() {
  const [license, setLicense] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [membership, setMembership] = React.useState(0);
  const [location, setLocation] = React.useState(0);
  const navigation = useNavigation<RootTabParamList>();
  const dispatch = useDispatch<AppDispatch>();

  const { data: memberships } = useGetMemberships();
  const { data: locations } = useGetLocations();

  const handleSignup = async () => {
    const newUser = {
      license: license,
      email: email,
      password: password,
      firstname: firstName,
      lastname: lastName,
      membership: membership,
      location: location,
      currentLocation: 1,
      createdAt: new Date(),
    };
    const response = await dispatch(signup(newUser));
    // Check if the signup action was rejected
    if (response.meta.requestStatus === "rejected") {
      const payload = response.payload;

      // Check for specific error (409 Conflict) user already exists
      if (
        payload?.statusCode === 409 &&
        payload?.message === "User already exists"
      ) {
        Alert.alert(
          "Sign up failed",
          "User already exists. Please try a different email.",
          [{ text: "OK" }]
        );
      } else {
        // Handle other errors
        Alert.alert(
          "Sign up failed",
          payload?.message || "An unknown error occurred.",
          [{ text: "OK" }]
        );
      }
    } else {
      console.log("Signup successful:", response.payload);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView style={styles.container}>
        <Title variant="green" title="Become a member and wash anytime" />
        <View style={styles.loginGroup}>
          <Paragraf variant="primary" text="Already a member?" />
          <Button
            variant="greenLink"
            buttonText="Login now"
            onPress={() => {
              navigation.navigate("Login");
            }}
          />
        </View>
        <View style={styles.signupForm}>
          <CustomTextInput
            labelText="1. Your Car"
            placeholderText="AB12345"
            paragraf="Your membership applies to this car"
            onChangeText={(text: string) => setLicense(text)}
            value={license}
          />
          <SelectInput
            placeholderText="Choose a primary wash location"
            labelText="2. Where do you want to wash?"
            data={locations}
            value={location}
            onSelect={(selectedItem) => setLocation(selectedItem.id)}
          />
          <SelectInput
            placeholderText="Select a membership"
            labelText="3. Which membership suits you?"
            data={memberships}
            value={membership}
            onSelect={(selectedItem) => setMembership(selectedItem.id)}
          />
          <CustomTextInput
            labelText="4. Your E-mail"
            placeholderText="E-mail address"
            onChangeText={(text: string) => setEmail(text)}
            value={email}
          />
          <View style={styles.nameGroup}>
            <CustomTextInput
              labelText="5. Your Name"
              placeholderText="Firstname"
              onChangeText={(text: string) => setFirstName(text)}
              value={firstName}
            />
            <CustomTextInput
              placeholderText="Lastname"
              onChangeText={(text: string) => setLastName(text)}
              value={lastName}
            />
          </View>
          <CustomTextInput
            labelText="6. Choose a password"
            placeholderText="Password"
            onChangeText={(text: string) => setPassword(text)}
            value={password}
            password={true}
          />
          <Button
            onPress={handleSignup}
            variant="primary"
            buttonText="Sign up"
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
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
  },
});

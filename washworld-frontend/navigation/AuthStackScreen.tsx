import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/LoginScreen";
import SignupScreen from "../screens/auth/SignupScreen";

// Define the types for the stack navigator
export type RootStackParamList = {
    Login: undefined;
    Signup: undefined;
  };

  // Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create the AuthStackScreen component fo rthe login and signup screens
export const AuthStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }}  name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: false }}  name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};
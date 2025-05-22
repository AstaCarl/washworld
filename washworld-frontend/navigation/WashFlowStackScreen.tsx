import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProgrammeScreen from "../screens/Programme/ProgrammeScreen";

// Define the types for the stack navigator
export type RootStackParamList = {
    navigate(arg0: string): void;
    Programme: undefined;
  };

  // Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create the AuthStackScreen component
export const WashFlowStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }}  name="Programme" component={ProgrammeScreen} />
      {/* <Stack.Screen name="Signup" component={SignupScreen} /> */}
    </Stack.Navigator>
  );
};
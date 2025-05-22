import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProgrammeScreen from "../screens/programme/ProgrammeScreen";
import AdditionalProgrammeScreen from "../screens/additionalProgramme/AddtionalProgrammeScreen";

// Define the types for the stack navigator
export type RootStackParamList = {
    navigate(arg0: string): void;
    Programme: undefined;
    "Additional-Programme": undefined;
  };

  // Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create the AuthStackScreen component
export const WashFlowStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }}  name="Programme" component={ProgrammeScreen} />
      <Stack.Screen options={{ headerShown: false }}  name="Additional-Programme" component={AdditionalProgrammeScreen} />
    </Stack.Navigator>
  );
};
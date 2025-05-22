import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProgrammeScreen from "../screens/programme/ProgrammeScreen";
import AdditionalProgrammeScreen from "../screens/additionalProgramme/AddtionalProgrammeScreen";
import AntennaDismountScreen from "../screens/antennaDismount/AntennaDismountScreen";

// Define the types for the stack navigator
export type RootStackParamList = {
    navigate(arg0: string): void;
    Programme: undefined;
    AdditionalProgramme: undefined;
    AntennaDismount: undefined;
  };

  // Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create the AuthStackScreen component
export const WashFlowStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen options={{ headerShown: false }}  name="Programme" component={ProgrammeScreen} />
      <Stack.Screen options={{ headerShown: false }}  name="AdditionalProgramme" component={AdditionalProgrammeScreen} />
      <Stack.Screen options={{ headerShown: false }}  name="AntennaDismount" component={AntennaDismountScreen} />
    </Stack.Navigator>
  );
};
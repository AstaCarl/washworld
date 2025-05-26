import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProgrammeScreen from "../screens/programme/ProgrammeScreen";
import AdditionalProgrammeScreen from "../screens/additionalProgramme/AddtionalProgrammeScreen";
import AntennaDismountScreen from "../screens/antennaDismount/AntennaDismountScreen";
import StartWashScreen from "../screens/startWash/StartWashScreen";
import ActiveWashScreen from "../screens/startWash/ActiveWashScreen";

// Define the types for the stack navigator
export type RootStackParamList = {
    navigate(arg0: string): void;
    Programme: { washObject: any, setWashObject: any };
    AdditionalProgramme: { washObject: any, setWashObject: any };
    AntennaDismount: { washObject: any, setWashObject: any };
    StartWash: { washObject: any, setWashObject: any };
    ActiveWash: { washObject: any, setWashObject: any };
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
      <Stack.Screen options={{ headerShown: false }}  name="StartWash" component={StartWashScreen} />
      <Stack.Screen options={{ headerShown: false }}  name="ActiveWash" component={ActiveWashScreen} />

    </Stack.Navigator>
  );
};
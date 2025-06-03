import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AdditionalProgrammeScreen from "../screens/startWashFlow/additionalProgramme/AddtionalProgrammeScreen";
import AntennaDismountScreen from "../screens/startWashFlow/AntennaDismountScreen";
import ProgrammeScreen from "../screens/startWashFlow/programme/ProgrammeScreen";
import StartWashScreen from "../screens/startWashFlow/startWash/StartWashScreen";
import ActiveWashScreen from "../screens/startWashFlow/startWash/ActiveWashScreen";

// Define the types for the stack navigator
export type RootStackParamList = {
  navigate(arg0: string): void;
  Programme: { washObject: any; setWashObject: any };
  AdditionalProgramme: { washObject: any; setWashObject: any };
  AntennaDismount: { washObject: any; setWashObject: any };
  StartWash: { washObject: any; setWashObject: any };
  ActiveWash: { washObject: any; setWashObject: any };
};

// Create the stack navigator
const Stack = createNativeStackNavigator<RootStackParamList>();

// Create the WashFlowStackScreen component
export const WashFlowStackScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Programme"
        component={ProgrammeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AdditionalProgramme"
        component={AdditionalProgrammeScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="AntennaDismount"
        component={AntennaDismountScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="StartWash"
        component={StartWashScreen}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="ActiveWash"
        component={ActiveWashScreen}
      />
    </Stack.Navigator>
  );
};

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { WashFlowStackScreen } from "./WashFlowStackScreen";
import MapScreen from "../screens/map/MapScreen";

// Create the stack navigator
const Stack = createNativeStackNavigator();

export default function MapStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="WashFlow" component={WashFlowStackScreen} />
    </Stack.Navigator>
  );
}
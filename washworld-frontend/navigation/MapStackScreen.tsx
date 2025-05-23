import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { WashFlowStackScreen } from "./WashFlowStackScreen";
import MapScreen from "../screens/map/MapScreen";

const Stack = createNativeStackNavigator();

export default function MapStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
      <Stack.Screen name="MapScreen" component={MapScreen} />
      <Stack.Screen name="WashFlow" component={WashFlowStackScreen} />
    </Stack.Navigator>
  );
}
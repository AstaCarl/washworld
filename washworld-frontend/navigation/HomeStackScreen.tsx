import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import { WashFlowStackScreen } from "./WashFlowStackScreen";

const Stack = createNativeStackNavigator();

export default function HomeStackScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WashFlow" component={WashFlowStackScreen} />
    </Stack.Navigator>
  );
}
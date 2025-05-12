import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MapScreen from "../screens/map/MapScreen";
import MapIcon from "../components/icons/MapIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ProfileIcon from "../components/icons/ProfileIcon";

// Define the types for the tab navigator
export type RootTabParamList = {
  navigate(arg0: string): void;
  Profile: undefined;
  Map: undefined;
  Home: undefined;
  Signup: undefined;
  Login: undefined;
};

// Create the tab navigator
const Tab = createBottomTabNavigator<RootTabParamList>();

// Create the TabsNavigation component
export const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#000000",
          height: 85,
          paddingTop: 14,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <HomeIcon color={focused ? "#0CE578" : "white"} />
          ),
        }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <MapIcon color={focused ? "#0CE578" : "white"} />
          ),
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ focused }) => (
            <ProfileIcon color={focused ? "#0CE578" : "white"} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

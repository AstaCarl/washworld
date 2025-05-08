import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import ProfileScreen from "../screens/profile/ProfileScreen";
import MapScreen from "../screens/map/MapScreen";
import MapIcon from "../components/icons/MapIcon";
import HomeIcon from "../components/icons/HomeIcon";
import ProfileIcon from "../components/icons/ProfileIcon";

export type RootTabParamList = {
  navigate(arg0: string): void;
  Profile: undefined;
  Map: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<RootTabParamList>();

export const TabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
      options={{
        tabBarIcon: () => <HomeIcon />,

      }}
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: () => <MapIcon />,
        }}
        name="Map"
        component={MapScreen}
      />
      <Tab.Screen
      options={{
        tabBarIcon: () => <ProfileIcon/>
      }}
        name="Profile"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

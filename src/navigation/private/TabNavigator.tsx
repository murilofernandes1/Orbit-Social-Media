import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../../screens/private/Home/HomeScreen";
import { House } from "phosphor-react-native";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#359152",
          borderTopWidth: 0,
          height: 110,
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarIconStyle: { marginTop: 10, marginBottom: 10 },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <House size={40} color="#FFFF" weight="bold" />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

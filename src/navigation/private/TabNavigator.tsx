import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House } from "phosphor-react-native";

import HomeScreen from "../../screens/private/Home/HomeScreen";
import HomeStack from "./stacks/HomeStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        animation: "none",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#04471C",
          borderTopColor: "#04471C",
          paddingTop: 10,
          height: 100,
        },
      }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <House
              size={40}
              color={focused ? "#058C42" : "#6A6A6A"}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

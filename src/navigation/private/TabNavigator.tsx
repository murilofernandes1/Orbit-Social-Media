import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { House } from "phosphor-react-native";
import HomeStack from "../../navigation/private/HomeStack";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        animation: "none",
        headerShown: false,

        tabBarStyle: {
          backgroundColor: "#08090A",
          borderTopWidth: 1,
          borderTopColor: "#04471C",
          height: 100,
        },

        tabBarShowLabel: false,
        tabBarIconStyle: {
          marginTop: 12,
          marginBottom: 12,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <House
              size={34}
              color={focused ? "#058C42" : "#6A6A6A"}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { House, User, MagnifyingGlassIcon } from "phosphor-react-native";

import ProfileStack from "./stacks/ProfileStack";
import HomeStack from "./stacks/HomeStack";
import SearchStack from "./stacks/SearchStack";

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
      <Tab.Screen
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <MagnifyingGlassIcon
              size={40}
              color={focused ? "#058C42" : "#6A6A6A"}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <User
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

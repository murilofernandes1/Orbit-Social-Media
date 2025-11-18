import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FollowingScreen from "../../screens/private/Following/FollowingScreen";
import PostScreen from "../../screens/private/Post/PostScreen";
import HomeScreen from "../../screens/private/Home/HomeScreen";
import TabNavigator from "./TabNavigator";
import HomeStack from "./stacks/HomeStack";
export type RootStackParamList = {
  HomeStack: undefined;

  TabNavigator: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}

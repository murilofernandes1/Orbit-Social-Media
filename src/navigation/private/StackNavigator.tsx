import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import FollowingScreen from "../../screens/private/Following/FollowingScreen";
import PostScreen from "../../screens/private/Post/PostScreen";

export type RootStackParamList = {
  TabNavigator: undefined;
  PostScreen: undefined;
  FollowingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
    </Stack.Navigator>
  );
}

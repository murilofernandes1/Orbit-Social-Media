import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import HomeScreen from "../../screens/private/Home/HomeScreen";
import FollowingScreen from "../../screens/private/Following/FollowingScreen";
import PostScreen from "../../screens/private/Post/PostScreen";

const Stack = createNativeStackNavigator();

export default function SubStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
}

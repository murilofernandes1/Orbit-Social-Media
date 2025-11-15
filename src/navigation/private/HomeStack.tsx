import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/private/Home/HomeScreen";
import FollowingScreen from "../../screens/private/Following/FollowingScreen";
import PostScreen from "../../screens/private/Post/PostScreen";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
    </Stack.Navigator>
  );
}

import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/private/Home/HomeScreen";
import FollowingScreen from "../../screens/private/Following/FollowingScreen";
const Stack = createStackNavigator();

export default function PrivateStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
    </Stack.Navigator>
  );
}

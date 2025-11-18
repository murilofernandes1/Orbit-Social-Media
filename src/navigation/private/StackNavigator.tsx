import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FollowingScreen from "../../screens/private/Following/FollowingScreen";
import PostScreen from "../../screens/private/Post/PostScreen";
import HomeScreen from "../../screens/private/Home/HomeScreen";

export type RootStackParamList = {
  HomeScreen: undefined;
  PostScreen: undefined;
  FollowingScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  console.log("StackNavigator renderizou");

  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="PostScreen" component={PostScreen} />
      <Stack.Screen name="FollowingScreen" component={FollowingScreen} />
    </Stack.Navigator>
  );
}

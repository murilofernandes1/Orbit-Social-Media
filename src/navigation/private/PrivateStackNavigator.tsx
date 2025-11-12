import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../../screens/private/HomeScreen";

const Stack = createStackNavigator();

export default function PrivateStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

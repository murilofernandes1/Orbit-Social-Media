import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../../screens/public/Login/LoginScreen";
import RegisterScreen from "../../screens/public/Register/RegisterScreen";

const Stack = createStackNavigator();

export default function PublicStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

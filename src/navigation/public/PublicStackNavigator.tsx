import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../../screens/public/Login/LoginScreen";
import RegisterScreen from "../../screens/public/Register/RegisterScreen";

const Stack = createNativeStackNavigator();

export default function PublicStackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

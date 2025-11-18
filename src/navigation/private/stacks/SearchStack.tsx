import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../../screens/private/Search/SearchScreen";

export type RootStackParamList = {
  SearchScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
    </Stack.Navigator>
  );
}

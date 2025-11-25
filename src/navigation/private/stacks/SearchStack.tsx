import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SearchScreen from "../../../screens/private/Search/SearchScreen";
import UserProfiles from "../../../screens/private/UsersProfiles/UsersProfiles";

export type RootStackParamList = {
  SearchScreen: undefined;
  UserProfiles: {
    id: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function SearchStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false, animation: "none" }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="UserProfiles" component={UserProfiles} />
    </Stack.Navigator>
  );
}

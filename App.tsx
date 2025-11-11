import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/TabNavigator";
import StaticNavigator from "./src/navigation/StaticNavigator";

export default function App() {
  let UserAuthenticated = true;
  return UserAuthenticated ? (
    <NavigationContainer>
      <StaticNavigator />
    </NavigationContainer>
  ) : (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

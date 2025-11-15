import { NavigationContainer } from "@react-navigation/native";
import TabNavigator from "./src/navigation/private/TabNavigator";
import PublicStackNavigator from "./src/navigation/public/PublicStackNavigator";
import { AuthProvider } from "./src/providers/AuthProvider";
import { useAuth } from "./src/hooks/useAuth";

function Routes() {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <TabNavigator />
        </>
      ) : (
        <PublicStackNavigator />
      )}
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

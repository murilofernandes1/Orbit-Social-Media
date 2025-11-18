import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./src/navigation/private/StackNavigator";
import PublicStackNavigator from "./src/navigation/public/PublicStackNavigator";
import { AuthProvider } from "./src/providers/AuthProvider";
import { useAuth } from "./src/hooks/useAuth";

function Routes() {
  const { isLoggedIn } = useAuth();
  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <>
          <StackNavigator />
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

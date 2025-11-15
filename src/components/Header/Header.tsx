import { View, Text } from "react-native";
import {
  useNavigation,
  NavigationProp,
  useRoute,
} from "@react-navigation/native";
import styles from "./styles";

export default function Header() {
  const navigation = useNavigation<NavigationProp<any>>();
  const route = useRoute();

  const current = route.name;

  return (
    <View style={styles.header}>
      <Text
        onPress={() => navigation.navigate("HomeScreen")}
        style={[
          styles.headerText,
          current === "HomeScreen" ? styles.activeTab : styles.inactiveTab,
        ]}
      >
        Para mim
      </Text>

      <Text
        onPress={() => navigation.navigate("FollowingScreen")}
        style={[
          styles.headerText,
          current === "FollowingScreen" ? styles.activeTab : styles.inactiveTab,
        ]}
      >
        Seguindo
      </Text>
    </View>
  );
}

import { Text, View } from "react-native";
import styles from "./styles";
import Post from "../../../components/Post/Post";
import { useNavigation, NavigationProp } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Para mim</Text>
        <Text
          onPress={() => navigation.navigate("FollowingScreen")}
          style={styles.headerText}
        >
          Seguindo
        </Text>
      </View>
      <Post />
    </View>
  );
}

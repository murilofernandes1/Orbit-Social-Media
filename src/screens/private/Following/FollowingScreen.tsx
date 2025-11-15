import { View, Text } from "react-native";
import Header from "../../../components/Header/Header";
import styles from "./styles";
export default function FollowingScreen() {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text>Olá, este sao os posts de quem você segue</Text>
      </View>
    </>
  );
}

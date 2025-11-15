import { TouchableOpacity, View } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import styles from "./styles";
import Header from "../../../components/Header/Header";
export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<any>>();
  return (
    <>
      <Header />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.navigate("PostScreen")}
          style={styles.orbit}
        >
          <View style={styles.majorOrbit}></View>
          <View style={styles.minorOrbit}></View>
        </TouchableOpacity>
      </View>
    </>
  );
}

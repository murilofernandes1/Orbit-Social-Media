import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";
import Header from "../../../components/Header/Header";
import Posts from "../../../components/Posts/Posts";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Posts />
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("HomeStack", { screen: "PostScreen" })
          }
          style={styles.orbit}
        >
          <View style={styles.majorOrbit}></View>
          <View style={styles.minorOrbit}></View>
        </TouchableOpacity>
      </View>
    </>
  );
}

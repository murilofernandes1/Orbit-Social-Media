import React from "react";
import { TouchableOpacity, View } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";
import Header from "../../../components/Header/Header";
import { RootStackParamList } from "../../../navigation/private/StackNavigator";

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeScreenNavigationProp>();

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

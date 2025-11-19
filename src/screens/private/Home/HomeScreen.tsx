import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";

import Header from "../../../components/Header/Header";

export default function HomeScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <Header />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.feed}>
          {[1, 2, 3].map((i) => (
            <View key={i} style={styles.postCard}>
              <Text style={styles.postUser}>@Usuario</Text>
              <Text style={styles.postTime}>4h atrás</Text>

              <Text style={styles.postText}>
                Este é um post de exemplo no feed.
              </Text>

              <View style={styles.postActions}>
                <Text style={styles.postActionText}>Curtir</Text>
                <Text style={styles.postActionText}>Comentar</Text>
                <Text style={styles.postActionText}>Compartilhar</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeStack", {
            screen: "PostScreen",
          })
        }
        style={styles.orbit}
      >
        <View style={styles.majorOrbit} />
        <View style={styles.minorOrbit} />
      </TouchableOpacity>
    </>
  );
}

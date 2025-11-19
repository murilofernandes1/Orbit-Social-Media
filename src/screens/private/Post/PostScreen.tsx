import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, Paperclip, ArrowLeft } from "phosphor-react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function PostScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("HomeScreen")}
        >
          <ArrowLeft size={28} color="#058C42" weight="bold" />
        </TouchableOpacity>

        <View style={styles.postContainer}>
          <View style={styles.postInfo}>
            <View style={styles.userPfp} />

            <TextInput
              style={styles.postInput}
              placeholderTextColor="#6B6B6B"
              placeholder="No que você está pensando?"
              multiline
            />
          </View>

          <View style={styles.actionsContainer}>
            <View style={styles.icons}>
              <Image size={26} color="#058C42" weight="bold" />
              <Paperclip size={26} color="#058C42" weight="bold" />
            </View>

            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.buttonText}>Postar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

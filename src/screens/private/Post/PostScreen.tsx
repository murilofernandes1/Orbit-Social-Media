import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, Paperclip, ArrowLeft } from "phosphor-react-native";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../navigation/private/StackNavigator";

type PostScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PostScreen"
>;

export default function PostScreen() {
  const navigation = useNavigation<PostScreenNavigationProp>();

  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    }
  };
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={handleGoBack}>
          <ArrowLeft style={styles.back} size={32} color="#058C42" />
        </TouchableOpacity>

        <View style={styles.postContainer}>
          <View style={styles.postInfo}>
            <View style={styles.userPfp}></View>
            <TextInput
              style={styles.postInput}
              placeholderTextColor="gray"
              placeholder="No que você está pensando?"
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.icons}>
              <Image size={25} color="#058C42" weight="bold" />
              <Paperclip size={25} color="#058C42" weight="bold" />
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

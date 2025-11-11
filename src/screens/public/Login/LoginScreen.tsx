import { View, Text, TextInput } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Button from "../../../components/Button/Button";
import Orbit from "../../../components/Orbit/Orbit";
import { styles } from "./styles";

export default function LoginScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Orbit />
      <View style={styles.form}>
        <Text style={styles.header}>Entrar</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite seu email..."
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha..."
          ></TextInput>
        </View>
        <Button title="Entrar" />
        <Text style={styles.register}>
          Ainda não tem uma conta?{" "}
          <Text
            onPress={() => navigation.navigate("RegisterScreen")}
            style={styles.link}
          >
            Registre-se
          </Text>
        </Text>
      </View>
    </View>
  );
}

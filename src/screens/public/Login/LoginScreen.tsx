import { View, Text, TextInput } from "react-native";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Button from "../../../components/Button/Button";
import Orbit from "../../../components/Orbit/Orbit";
import { styles } from "./styles";
import { useAuth } from "../../../hooks/useAuth";

export default function LoginScreen() {
  const { login } = useAuth();
  const navigation = useNavigation<NavigationProp<any>>();

  async function handleLogin() {
    const token = "12345";
    login(token);
  }
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
        <Button onPress={handleLogin} title="Entrar" />
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

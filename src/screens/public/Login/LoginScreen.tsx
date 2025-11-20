import { View, Text, TextInput, ActivityIndicator } from "react-native";
import { useState } from "react";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import Button from "../../../components/Button/Button";
import Orbit from "../../../components/Orbit/Orbit";
import { styles } from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import api from "../../../services/api";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const { login } = useAuth();
  const navigation = useNavigation<NavigationProp<any>>();

  async function handleLogin() {
    try {
      if (!email || !password) {
        return setFormError(true);
      }
      const response = await api.post("/auth/login", {
        email: email,
        password: password,
      });
      setFormError(false);
      setError(false);
      setLoading(false);
      login(response.data);
    } catch (error) {
      setFormError(false);
      setError(true);
      console.log(error);
    }
  }
  return (
    <>
      {loading === true ? (
        <ActivityIndicator size="large" color="#058C420" />
      ) : (
        <View style={styles.container}>
          <Orbit />
          <View style={styles.form}>
            <Text style={styles.header}>Entrar</Text>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Email</Text>
              <TextInput
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Digite seu email..."
              ></TextInput>
            </View>
            <View style={styles.inputContainer}>
              <Text style={styles.label}>Senha</Text>
              <TextInput
                value={password}
                secureTextEntry={true}
                onChangeText={setPassword}
                style={styles.input}
                placeholderTextColor="gray"
                placeholder="Digite sua senha..."
              ></TextInput>
              {formError == true ? (
                <Text style={styles.error}>
                  Os campos não podem estar vazios
                </Text>
              ) : null}
              {error === true ? (
                <Text style={styles.error}>
                  Dados inválidos. Verifique os campos digitados e tente
                  novamente.
                </Text>
              ) : null}
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
      )}
    </>
  );
}

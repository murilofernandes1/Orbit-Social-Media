import { ScrollView, View, Text, TextInput } from "react-native";
import { useState } from "react";
import Button from "../../../components/Button/Button";
import Orbit from "../../../components/Orbit/Orbit";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { useAuth } from "../../../hooks/useAuth";
import { styles } from "./styles";
import api from "../../../services/api";

type RootStackParamList = {
  LoginScreen: undefined;
};

export default function RegisterScreen() {
  const { login } = useAuth();
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [formError, setFormError] = useState(false);
  const [error, setError] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  async function handleRegister() {
    try {
      if (!name || !email || !password) {
        return setFormError(true);
      }
      if (password !== repeatPassword) {
        setPasswordMismatch(true);
        setFormError(false);
        return;
      }
      const response = await api.post("/auth/register", {
        name: name,
        email: email,
        password: password,
      });
      setFormError(false);
      setPasswordMismatch(false);
      login(response.data);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  }
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Orbit />
      <View style={styles.form}>
        <Text style={styles.header}>Registre-se</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Seu nome de usuário</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite seu nome..."
          ></TextInput>
          <Text style={styles.label}>Seu Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite seu email..."
          ></TextInput>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite sua senha..."
            secureTextEntry={true}
          ></TextInput>
          {passwordMismatch === true ? (
            <Text style={styles.error}>As senhas não coincidem.</Text>
          ) : null}
          <Text style={styles.label}>Repita sua senha</Text>
          <TextInput
            value={repeatPassword}
            onChangeText={setRepeatPassword}
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite sua senha..."
            secureTextEntry={true}
          ></TextInput>
          {passwordMismatch === true ? (
            <Text style={styles.error}>As senhas não coincidem.</Text>
          ) : null}
          {formError === true ? (
            <Text style={styles.error}>Os campos não podem estar vazios.</Text>
          ) : null}
          {error === true ? (
            <Text style={styles.error}>
              Ocorreu um erro ao criar sua conta. Tente novamente mais tarde.
            </Text>
          ) : null}
        </View>
        <Button onPress={() => handleRegister()} title="Criar conta" />
        <Text
          onPress={() => navigation.navigate("LoginScreen")}
          style={styles.register}
        >
          Já tem uma conta? <Text style={styles.link}>Entrar</Text>
        </Text>
      </View>
    </ScrollView>
  );
}

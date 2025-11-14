import { ScrollView, View, Text, TextInput } from "react-native";
import Button from "../../../components/Button/Button";
import Orbit from "../../../components/Orbit/Orbit";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import { styles } from "./styles";

type RootStackParamList = {
  LoginScreen: undefined;
};

export default function RegisterScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Orbit />
      <View style={styles.form}>
        <Text style={styles.header}>Registre-se</Text>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite seu nome..."
          ></TextInput>
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite seu email..."
          ></TextInput>
          <Text style={styles.label}>Telefone</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite seu telefone..."
          ></TextInput>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            placeholderTextColor="gray"
            placeholder="Digite sua senha..."
          ></TextInput>
        </View>
        <Button title="Entrar" />
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

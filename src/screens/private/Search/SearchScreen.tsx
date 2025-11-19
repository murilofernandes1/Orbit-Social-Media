import { View, Text, TextInput } from "react-native";
import Header from "../../../components/Header/Header";
import styles from "./styles";

export default function SearchScreen() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Buscar usuários</Text>

        <TextInput
          placeholder="Pesquisar..."
          placeholderTextColor="#6B6B6B"
          style={styles.searchInput}
        />

        <View style={styles.resultArea}>
          <Text style={styles.emptyText}>Nenhum resultado ainda</Text>
        </View>
      </View>
    </>
  );
}

import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MagnifyingGlassIcon } from "phosphor-react-native";
import api from "../../../services/api";
import styles from "./styles";

type UsersProps = {
  name: string;
  image: string | null;
};
export default function SearchScreen() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [notFound, setNotFound] = useState(false);

  async function handleUsers() {
    try {
      const response = await api.get(`/search/user?name=${name}`);
      console.log(response.data);
      setUsers(response.data);
      if (response.data.length === 0) {
        setNotFound(true);
      } else {
        setNotFound(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Buscar usuários</Text>

        <View style={styles.searchContainer}>
          <TextInput
            placeholder="Pesquisar..."
            placeholderTextColor="#6B6B6B"
            style={styles.searchInput}
            value={name}
            onChangeText={setName}
          />
          <TouchableOpacity onPress={handleUsers}>
            <MagnifyingGlassIcon
              size={40}
              weight={"fill"}
              style={styles.searchIcon}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.resultArea}>
          {notFound === true && (
            <Text style={styles.emptyText}>Nenhum usuário encontrado</Text>
          )}

          {users.map((item: any, index) => (
            <View key={index} style={styles.userCard}>
              {item.image ? (
                <Text>Tem foto</Text>
              ) : (
                <View style={styles.userPic} />
              )}
              <Text style={styles.userName}>@{item.name}</Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

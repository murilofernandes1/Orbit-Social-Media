import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useState } from "react";
import { MagnifyingGlassIcon } from "phosphor-react-native";
import api from "../../../services/api";
import styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";

type UsersProps = {
  name: string;
  image: string | null;
  id: string;
};
export default function SearchScreen() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<UsersProps[]>([]);
  const [notFound, setNotFound] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const { userId } = useAuth();
  async function handleUsers() {
    try {
      if (!name) {
        setUsers([]);
        setSearchError(true);
        return;
      }

      setSearchError(false);
      const response = await api.get(`/search/user?name=${name}`);
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
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Buscar usuários</Text>

        <View style={styles.searchContainer}>
          <TextInput
            onSubmitEditing={handleUsers}
            returnKeyType="search"
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
        {searchError && (
          <Text style={{ color: "red" }}>O campo não pode estar vazio!</Text>
        )}
        <View style={styles.resultArea}>
          {notFound === true && (
            <Text style={styles.emptyText}>Nenhum usuário encontrado</Text>
          )}

          {users.map((u) => (
            <TouchableOpacity
              key={u.id}
              onPress={() => {
                if (u.id === userId) {
                  navigation.navigate("ProfileStack", {
                    screen: "ProfileScreen",
                  });
                } else {
                  navigation.navigate("SearchStack", {
                    screen: "UserProfiles",
                    params: { id: u.id },
                  });
                }
              }}
            >
              <View style={styles.userCard}>
                {u.image ? (
                  <Image source={{ uri: u.image }} />
                ) : (
                  <View style={styles.userPic} />
                )}
                <Text style={styles.userName}>@{u.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </>
  );
}

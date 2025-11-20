import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";

export default function ProfileScreen() {
  const { logout } = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.userHeader}>
        <View style={styles.userPic} />
        <Text style={styles.username}>@Murilo</Text>
        <Text style={styles.bio}>Biografia insana</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>0</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Compartilhar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => logout()} style={styles.button}>
            <Text style={styles.buttonText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.feed}>
        {[1, 2, 3, 4].map((i) => (
          <View key={i} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Text style={styles.postUser}>@Usuário</Text>
              <Text style={styles.postTime}>2h atrás</Text>
            </View>

            <Text style={styles.postText}>
              Aqui é um placeholder de texto. Tá funfando
            </Text>

            <View style={styles.postActions}>
              <Text style={styles.postActionText}>Curtir</Text>
              <Text style={styles.postActionText}>Comentar</Text>
              <Text style={styles.postActionText}>Compartilhar</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

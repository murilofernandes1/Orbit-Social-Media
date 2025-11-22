import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import api from "../../../services/api";
import { useState, useEffect } from "react";

interface UserProps {
  user: object | null;
  name: string | null;
  id: string;
  posts: PostProps[] | null;
}
interface PostProps {
  id: string;
  body: string;
  image: string | null;
  createdAt: string;
}
export default function ProfileScreen() {
  const [user, setUser] = useState<UserProps>();
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get("/me");
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadUser();
  }, []);

  function timeAgo(dateString: string) {
    const now = Date.now();
    const postTime = new Date(dateString).getTime();
    const diffMs = now - postTime;

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) return "agora mesmo";
    if (minutes < 60) return `há ${minutes} minuto${minutes > 1 ? "s" : ""}`;
    if (hours < 24) return `há ${hours} hora${hours > 1 ? "s" : ""}`;
    if (days === 1) return "ontem";
    return `há ${days} dias`;
  }

  const { logout } = useAuth();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.userHeader}>
        <View style={styles.userPic} />
        <Text style={styles.username}>@{user?.name}</Text>
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
        {user?.posts?.length ? (
          user.posts.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <Text style={styles.postUser}>@{user.name}</Text>
              <Text style={styles.postTime}>{timeAgo(post.createdAt)}</Text>
              <Text style={styles.postText}>{post.body}</Text>
              {post.image && (
                <Image
                  style={styles.postImage}
                  source={{ uri: post.image }}
                  resizeMode="cover"
                />
              )}
            </View>
          ))
        ) : (
          <Text style={styles.noPost}>Você não tem nenhum post ainda.</Text>
        )}
      </View>
    </ScrollView>
  );
}

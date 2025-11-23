import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { useState, useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import styles from "./styles";
import Header from "../../../components/Header/Header";
import api from "../../../services/api";

type PostProps = {
  id: string;
  user: UserProps;
  body: string;
  createdAt: string;
  image: string;
};
type UserProps = {
  name: string;
};
export default function HomeScreen() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  useEffect(() => {
    async function loadPosts() {
      try {
        const response = await api.get("/post");
        setPosts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadPosts();
  }, []);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

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

  return (
    <>
      <Header />

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.feed}>
          {posts?.map((post) => (
            <View key={post.id} style={styles.postCard}>
              <Text style={styles.postUser}>@{post?.user.name}</Text>
              <Text style={styles.postTime}>{timeAgo(post.createdAt)}</Text>

              <Text style={styles.postText}>{post.body}</Text>
              {post.image && (
                <Image
                  style={styles.postImage}
                  source={{ uri: post.image }}
                  resizeMode="cover"
                />
              )}
              <View style={styles.postActions}>
                <Text style={styles.postActionText}>Curtir</Text>
                <Text style={styles.postActionText}>Comentar</Text>
                <Text style={styles.postActionText}>Compartilhar</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeStack", {
            screen: "PostScreen",
          })
        }
        style={styles.orbit}
      >
        <View style={styles.majorOrbit} />
        <View style={styles.minorOrbit} />
      </TouchableOpacity>
    </>
  );
}

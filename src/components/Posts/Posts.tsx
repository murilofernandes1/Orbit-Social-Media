import { useState, useEffect } from "react";
import axios from "axios";
import { ScrollView, Text, View } from "react-native";
import styles from "./styles";
interface PostsProps {
  id: number;
  userId: number;
  title: string;
  body: string;
  p: string;
}
export default function Posts() {
  const [posts, setPosts] = useState<PostsProps[]>([]);
  useEffect(() => {
    async function loadData() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {posts === null ? (
        <Text>Nenhum post ainda</Text>
      ) : (
        <>
          {posts.map((p) => (
            <View style={styles.postContainer} key={p.id}>
              <Text style={styles.username}>@{p.userId || "Placeholder"}</Text>
              <Text style={styles.postTitle}>{p.title || "Placeholder"}</Text>
              <Text style={styles.postBody}>{p.body || "Placeholder"}</Text>
            </View>
          ))}
          <Text>Fim dos posts</Text>
        </>
      )}
    </ScrollView>
  );
}

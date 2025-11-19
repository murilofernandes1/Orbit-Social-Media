import { View, Text, FlatList } from "react-native";
import Header from "../../../components/Header/Header";
import styles from "./styles";
import { useState } from "react";

interface Post {
  id: string;
  username: string;
  content: string;
}

export default function FollowingScreen() {
  const [followingPosts] = useState<Post[]>([
    {
      id: "1",
      username: "fulano silva",
      content: "o de baixo é gay",
    },
    {
      id: "2",
      username: "beltrano andrade",
      content: "eu posso postar",
    },
  ]);

  return (
    <>
      <Header />

      <View style={styles.container}>
        <Text style={styles.sectionTitle}>
          Postagens de pessoas que você segue
        </Text>

        <FlatList
          data={followingPosts}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingTop: 20 }}
          renderItem={({ item }) => (
            <View style={styles.postCard}>
              <Text style={styles.username}>@{item.username}</Text>
              <Text style={styles.postText}>{item.content}</Text>
            </View>
          )}
        />
      </View>
    </>
  );
}

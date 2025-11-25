import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import { useAuth } from "../../../hooks/useAuth";
import api from "../../../services/api";
import { useState, useEffect } from "react";
import { useRoute, RouteProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../navigation/private/stacks/SearchStack";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowLeft } from "phosphor-react-native";

type UserProfilesRouteProp = RouteProp<RootStackParamList, "UserProfiles">;

interface UserProps {
  user: object | null;
  name: string | null;
  id: string;
  posts: PostProps[] | null;
  followers: FollowerProps[];
  following: FollowingProps[];
}
interface PostProps {
  id: string;
  body: string;
  image: string | null;
  createdAt: string;
}
interface FollowerProps {
  id: string;
  followerId: string;
  followedId: string;
}
interface FollowingProps {
  id: string;
  followerId?: string;
  followedId: string;
}
export default function UserProfiles() {
  const { userId } = useAuth();
  const [follow, setFollow] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<any>>();
  const [user, setUser] = useState<UserProps>();
  const route = useRoute<UserProfilesRouteProp>();
  const { id } = route.params;
  useEffect(() => {
    async function loadUser() {
      try {
        const response = await api.get(`/search/profile/${id}`);
        const userData = response.data;

        setUser(userData);

        if (userId) {
          const isFollowing = userData.followers.some(
            (f: FollowerProps) => f.followerId === userId
          );
          setFollow(isFollowing);
        }
        console.log("userId atual:", userId);
        console.log("followers recebidos:", userData.followers);
      } catch (error) {
        console.log(error);
      }
    }

    loadUser();
  }, [userId, id]);

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
  async function handleFollow() {
    try {
      const response = await api.post(`/follow/${id}`, {
        data: {
          followerId: userId,
          followedId: id,
        },
      });

      setFollow((prevFollow) => {
        const nextFollow = !prevFollow;

        setUser((prevUser) => {
          if (!prevUser) return prevUser;

          const prevFollowers = prevUser.followers ?? [];

          if (nextFollow) {
            return {
              ...prevUser,
              followers: [
                ...prevFollowers,
                {
                  id: `local-${userId}`,
                  followerId: userId,
                  followedId: id,
                } as FollowerProps,
              ],
            };
          } else {
            return {
              ...prevUser,
              followers: prevFollowers.filter((f) => f.followerId !== userId),
            };
          }
        });

        return nextFollow;
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.userHeader}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.navigate("SearchScreen")}
        >
          <ArrowLeft size={28} color="#FFFFFF" weight="bold" />
        </TouchableOpacity>
        <View style={styles.userPic} />
        <Text style={styles.username}>@{user?.name}</Text>
        <Text style={styles.bio}>Biografia insana</Text>

        <View style={styles.statsContainer}>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user?.posts?.length}</Text>
            <Text style={styles.statLabel}>Posts</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user?.followers?.length}</Text>
            <Text style={styles.statLabel}>Seguidores</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.statNumber}>{user?.following?.length}</Text>
            <Text style={styles.statLabel}>Seguindo</Text>
          </View>
        </View>

        <View style={styles.buttonsRow}>
          {follow ? (
            <TouchableOpacity onPress={handleFollow} style={styles.button}>
              <Text style={styles.buttonText}>Deixar de seguir</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={handleFollow} style={styles.button}>
              <Text style={styles.buttonText}>Seguir</Text>
            </TouchableOpacity>
          )}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Compartilhar</Text>
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
          <Text style={styles.noPost}>
            O usuário ainda não tem nenhum post.
          </Text>
        )}
      </View>
    </ScrollView>
  );
}

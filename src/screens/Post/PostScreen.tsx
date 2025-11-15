import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { Image, Paperclip } from "phosphor-react-native";
import styles from "./styles";

export default function PostScreen() {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.postContainer}>
          <View style={styles.postInfo}>
            <View style={styles.userPfp}></View>
            <TextInput
              style={styles.postInput}
              placeholderTextColor="gray"
              placeholder="No que você está pensando?"
              multiline={true}
              numberOfLines={4}
            />
          </View>
          <View style={styles.actionsContainer}>
            <View style={styles.icons}>
              <Image size={25} color="#058C42" weight="bold" />
              <Paperclip size={25} color="#058C42" weight="bold" />
            </View>
            <TouchableOpacity style={styles.postButton}>
              <Text style={styles.buttonText}>Postar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

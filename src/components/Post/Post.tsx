import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
export default function Post() {
  return (
    <View style={styles.container}>
      <View style={styles.postContainer}>
        <View style={styles.userPfp}></View>
        <TextInput
          style={styles.postInput}
          placeholderTextColor="gray"
          placeholder="No que você está pensando?"
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <TouchableOpacity style={styles.postButton}>
        <Text style={styles.buttonText}>Postar</Text>
      </TouchableOpacity>
    </View>
  );
}

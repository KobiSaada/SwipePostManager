import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Post } from "../types/post";

export default function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title} numberOfLines={1}>{post.title}</Text>
      <Text style={styles.body} numberOfLines={3}>{post.body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor:"#fff", padding:16, borderRadius:12, elevation:2, marginVertical:8 },
  title:{ fontSize:16, fontWeight:"600", marginBottom:8 },
  body:{ fontSize:14, lineHeight:20, color:"#334155" }
});

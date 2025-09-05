import React from "react";
import { View, FlatList, ActivityIndicator, StyleSheet } from "react-native";
import { usePosts } from "../context/PostsContext";
import PostCard from "../components/PostCard";
import Swipe from "../components/Swipe";

export default function HomeScreen() {
  const { loading, error, posts, deletePost, savePost } = usePosts();

  if (loading) return <View style={styles.center}><ActivityIndicator /></View>;
  if (error)   return <View style={styles.center}><ActivityIndicator /></View>;

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item)=> String(item.id)}
        contentContainerStyle={{ padding:16 }}
        renderItem={({item}) => (
          <Swipe
            onSwipeLeft={() => deletePost(item.id)}
            onSwipeRight={() => savePost(item)}
          >
            <PostCard post={item} />
          </Swipe>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:"#f1f5f9" },
  center:{ flex:1, alignItems:"center", justifyContent:"center" }
});

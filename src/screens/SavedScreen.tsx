import React from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { usePosts } from "../context/PostsContext";
import PostCard from "../components/PostCard";

export default function SavedScreen() {
  const { saved } = usePosts();

  return (
    <View style={styles.container}>
      {saved.length === 0 ? (
        <View style={styles.empty}><Text>No saved posts yet.</Text></View>
      ) : (
        <FlatList
          data={saved}
          keyExtractor={(item)=> String(item.id)}
          contentContainerStyle={{ padding:16 }}
          renderItem={({item}) => <PostCard post={item} />}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, backgroundColor:"#f1f5f9" },
  empty:{ flex:1, alignItems:"center", justifyContent:"center" }
});

import React from "react";
import RootNavigator from "./src/navigation";
import { PostsProvider } from "./src/context/PostsContext";

export default function App() {
  return (
    <PostsProvider>
      <RootNavigator />
    </PostsProvider>
  );
}

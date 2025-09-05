
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Post } from "../types/post";
import { postsService } from "../Service/postsService";

type PostsContextValue = {
  loading: boolean;
  error: string | null;
  posts: Post[];
  saved: Post[];
  deletedIds: Set<number>;
  deletePost: (id: number) => void;
  savePost: (post: Post) => void;
  restoreAll: () => void;
};

const PostsContext = createContext<PostsContextValue | null>(null);

export const PostsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [loading, setLoading]   = useState(true);
  const [error, setError]       = useState<string | null>(null);
  const [allPosts, setAllPosts] = useState<Post[]>([]);
  const [saved, setSaved]       = useState<Post[]>([]);
  const [deletedIds, setDeletedIds] = useState<Set<number>>(new Set());

  useEffect(() => {
    (async () => {
      try {
        const data = await postsService.getAll();   
        setAllPosts(data);
      } catch (e: any) {
        setError(e?.message ?? "Unknown error");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const posts = useMemo(
    () => postsService.visible(allPosts, deletedIds),
    [allPosts, deletedIds]
  );

  const deletePost = (id: number) => {
    setDeletedIds(prev => postsService.addDeleted(id, prev));
  };

  const savePost = (post: Post) => {
    setSaved(prev => postsService.addSaved(post, prev));
  };

  const restoreAll = () => {
    setDeletedIds(postsService.restoreDeleted());
    setSaved(postsService.restoreSaved());
  };

  const value = { loading, error, posts, saved, deletedIds, deletePost, savePost, restoreAll };
  return <PostsContext.Provider value={value}>{children}</PostsContext.Provider>;
};

export const usePosts = () => {
  const ctx = useContext(PostsContext);
  if (!ctx) throw new Error("usePosts must be used within PostsProvider");
  return ctx;
};

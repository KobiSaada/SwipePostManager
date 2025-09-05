import { fetchPosts } from "../api/postsApi";
import type { Post } from "../types/post";

export const postsService = {

  async getAll(): Promise<Post[]> {
    return fetchPosts();
  },


  visible(all: Post[], deletedIds: Set<number>): Post[] {
    return all.filter(p => !deletedIds.has(p.id));
  },


  addDeleted(id: number, prev: Set<number>): Set<number> {
    const next = new Set(prev);
    next.add(id);
    return next;
  },


  addSaved(post: Post, prev: Post[]): Post[] {
    return prev.some(p => p.id === post.id) ? prev : [post, ...prev];
  },


  restoreDeleted(): Set<number> {
    return new Set<number>();
  },
  restoreSaved(): Post[] {
    return [];
  },
};

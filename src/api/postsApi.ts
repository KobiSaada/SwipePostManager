import { Post } from "../types/post";
import { API_URL } from "../config/env";

export async function fetchPosts(): Promise<Post[]> {
  const res = await fetch(`${API_URL}/posts`);
  if (!res.ok) throw new Error(`Failed to fetch posts (${res.status})`);
  const data: Post[] = await res.json(); 
  return data; 
}

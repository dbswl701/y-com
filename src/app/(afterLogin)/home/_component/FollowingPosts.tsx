"use client";

import { useSuspenseQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import Post from "../../_component/Post";
import { Post as IPost } from "@/model/Post";

export default function FollowingPosts() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60000,
    gcTime: 300 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}

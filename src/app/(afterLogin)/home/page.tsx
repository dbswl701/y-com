import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import Post from "../_component/Post";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TabProvider from "./_component/TabProvider";
import style from "./home.module.css";

async function getPostRecommend() {
  const res = await fetch(`http://lcoalhost:9090/api/postRecommends`, {
    next: { tags: ["posts", "recommends"] },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["post", "recommends"],
    queryFn: getPostRecommend,
  });
  const dehydractedState = dehydrate(queryClient);

  queryClient.getQueryData(["post", "recommends"]);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydractedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}

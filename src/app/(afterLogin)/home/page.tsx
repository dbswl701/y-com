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
import { getPostRecommends } from "./_lib/getPostRecommends";
import TapDecider from "./_component/TapDecider";

export default async function Home() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
  });
  const dehydractedState = dehydrate(queryClient);

  queryClient.getQueryData(["post", "recommends"]);
  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydractedState}>
        <TabProvider>
          <Tab />
          <PostForm />
          <TapDecider />
        </TabProvider>
      </HydrationBoundary>
    </main>
  );
}

import style from "./profile.module.css";
import Post from "@/app/(afterLogin)/_component/Post";
import BackButton from "@/app/(afterLogin)/_component/BackButton";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import UserPosts from "./_component/UserPosts";
import { getUserPosts } from "./_lib/getUserPosts";
import { getUser } from "./_lib/getUser";
import UserInfo from "./_component/UserInfo";

type Props = {
  params: { username: string };
};
export default async function Profile({ params }: Props) {
  const { username } = params;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["users", username],
    queryFn: getUser,
  });
  await queryClient.prefetchQuery({
    queryKey: ["posts", "users", username],
    queryFn: getUserPosts,
  });
  const dehydractedState = dehydrate(queryClient);

  return (
    <main className={style.main}>
      <HydrationBoundary state={dehydractedState}>
        <UserInfo username={username} />
        <div>
          <UserPosts username={username} />
        </div>
      </HydrationBoundary>
    </main>
  );
}

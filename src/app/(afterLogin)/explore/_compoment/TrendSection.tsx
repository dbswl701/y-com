import { Hashtag } from "@/model/HashTag";
import { useQuery } from "@tanstack/react-query";
import { getTrends } from "../../_lib/getTrends";
import Trend from "../../_component/Trend";

export default function TrendSection() {
  const { data } = useQuery<Hashtag[]>({
    queryKey: ["trends"],
    queryFn: getTrends,
    staleTime: 60000,
    gcTime: 300 * 1000,
  });
  return data?.map((trend) => <Trend trend={trend} key={trend.tagId} />);
}

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import useAuthStore from "../../store/userTokenStore";
import { Song } from "../../types/song";

export const useGetRecommendedSongs = () => {
  const token = useAuthStore((state) => state.authToken);

  return useQuery({
    queryKey: ["top-songs"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/top-songs-egypt`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
      return data as Song[];
    },
  });
};

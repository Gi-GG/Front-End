import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import useAuthStore from "../../store/userTokenStore";
import { Song } from "../../types/song";

export const useGetRandomSongs = () => {
  const token = useAuthStore((state) => state.authToken);

  return useQuery({
    queryKey: ["songs"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/random-songs`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
      return data as Song[];
    },
    refetchInterval: 3600000, // Refetch every hour (3600000 ms)
  });
};

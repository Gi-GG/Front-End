import { useQuery } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { Song } from "../../types/song";

export const useSearchSongs = (query: string) => {
    return useQuery<Song[]>({
        queryKey: ["search-song", query],
        queryFn: async () => {
            try {
                const { data } = await axios.get(
                    `${baseUrl}/search-song?name=${query}`,
                    {
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                );
                return data;
            } catch (error) {
                console.error("Error fetching songs:", error);
                throw error;
            }
        },
        enabled: !!query,
    });
};

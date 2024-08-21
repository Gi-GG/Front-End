import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { Song } from "../../types/song";
import { useGetCurrentUser } from "../auth/useGetCurrentUser";
import useAuthStore from "../../store/userTokenStore";

interface ratingProp {
    userId: string | undefined;
    rating: number;
}

interface RatingWithSong extends ratingProp, Song {}

const useRating = () => {
    const { data } = useGetCurrentUser();
    const token = useAuthStore((state) => state.authToken);

    return useMutation({
        mutationKey: ["top-songs", data?._id],
        mutationFn: async (req: RatingWithSong) => {
            const response = await axios.post(`${baseUrl}/rate-song`, req, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return response.data;
        },
        onSuccess: () => {
            console.log("Rating submitted successfully.");
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.message ||
                "An unexpected error occurred.";
            throw new Error(errorMessage);
        },
    });
};

export default useRating;

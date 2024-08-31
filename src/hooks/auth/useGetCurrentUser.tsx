import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { User } from "../../types/user";
import useAuthStore from "../../store/userTokenStore";

export const useGetCurrentUser = () => {
    const token = useAuthStore((state) => state.authToken);

    return useQuery({
        queryKey: ["user"],
        queryFn: async () => {
            const { data } = await axios.get(`${baseUrl}/users/me`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            return data as User;
        },
    });
};

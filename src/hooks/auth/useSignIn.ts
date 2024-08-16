import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import useAuthStore from "../../store/userTokenStore";
import { useNavigate } from "react-router-dom";

interface User {
    email: string;
    password: string;
}

const useSignIn = () => {
    const setToken = useAuthStore((state) => state.signIn);
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ["user"],
        mutationFn: async (user: User) => {
            const response = await axios.post(`${baseUrl}/auth/login`, user);
            setToken(response.data.token);
            console.log(response.data);
            return response.data;
        },
        onSuccess: () => {
            navigate("/", { replace: true }); // Prevents back navigation to sign-in
        },
        onError: (error: any) => {
            const errorMessage =
                error.response?.data?.message ||
                "An unexpected error occurred.";
            throw new Error(errorMessage);
        },
    });
};

export default useSignIn;

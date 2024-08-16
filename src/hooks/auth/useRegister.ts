import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/userTokenStore";

interface User {
    username: string;
    email: string;
    password: string;
}

const useRegister = () => {
    const setToken = useAuthStore((state) => state.signIn);
    const navigate = useNavigate();

    return useMutation({
        mutationKey: ["user"],
        mutationFn: async (user: User) => {
            const response = await axios.post(`${baseUrl}/auth/register`, user);
            console.log(response.data);
            setToken(response.data.token);
            return response.data;
        },
        onSuccess: () => {
            navigate("/", { replace: true });
        },
        onError: (error: any) => {
            // Pass the error message to the component
            const errorMessage =
                error.response?.data?.message ||
                "An unexpected error occurred.";
            throw new Error(errorMessage);
        },
    });
};

export default useRegister;

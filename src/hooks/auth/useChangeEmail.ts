import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import useAuthStore from "../../store/userTokenStore";

interface Email {
    newEmail: string;
}

const useChangeEmail = () => {
    const token = useAuthStore((state) => state.authToken);

    return useMutation({
        mutationKey: ["user"],
        mutationFn: async (email: Email) => {
            const response = await axios.put(
                `${baseUrl}/users/change-email`,
                email,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            return response.data; // Return the response data for onSuccess
        },
        onSuccess: () => {
            // Handle success (e.g., show a success message)
            console.log("Email changed successfully");
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

export default useChangeEmail;

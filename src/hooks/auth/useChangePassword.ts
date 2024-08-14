import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Cookies from "js-cookie";
import { baseUrl } from "../../utils/baseUrl";

interface Passwords {
    oldPassword: string;
    newPassword: string;
}

const useChangePassword = () => {
    return useMutation({
        mutationKey: ["user"],
        mutationFn: async (passwords: Passwords) => {
            const response = await axios.put(
                `${baseUrl}/users/change-password`,
                passwords,
                {
                    headers: {
                        Authorization: `Bearer ${Cookies.get("token")}`,
                    },
                }
            );
            return response.data; // Return the response data for onSuccess
        },
        onSuccess: () => {
            // Handle success (e.g., show a success message)
            console.log("Password changed successfully");
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

export default useChangePassword;

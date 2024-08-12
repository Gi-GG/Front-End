import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";
import Cookies from "js-cookie";

interface User {
  email: string;
  password: string;
}

const useSignIn = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: async (user: User) => {
      const response = await axios.post(`${baseUrl}/auth/login`, user);
      console.log(response.data);
      Cookies.set("token", response.data.token, { expires: 7 });
      return response.data;
    },
    onSuccess: () => {
      // Handle success (e.g., show a success message)
    },
    onError: (error: any) => {
      // Pass the error message to the component
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred.";
      throw new Error(errorMessage);
    },
  });
};

export default useSignIn;

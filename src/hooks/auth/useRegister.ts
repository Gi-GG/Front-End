import { useMutation } from "@tanstack/react-query";
import { baseUrl } from "../../utils/baseUrl";
import axios from "axios";

interface User {
  username: string;
  email: string;
  password: string;
}

const useRegister = () => {
  return useMutation({
    mutationKey: ["user"],
    mutationFn: async (user: User) => {
      const response = await axios.post(`${baseUrl}/auth/register`, user);
      console.log(response.data);
      return response.data;
    },
    onSuccess: () => {
      // Handle success (e.g., show a success message)
    },
    onError: () => {
      // Handle error (e.g., show an error message)
    },
  });
};

export default useRegister;

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import { User } from "../../types/user";
import Cookies from "js-cookie";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const { data } = await axios.get(`${baseUrl}/users/me`, {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      });
      console.log(data);
      return data as User;
    },
  });
};

import create from "zustand";
import Cookies from "js-cookie";

interface State {
  authToken: string | null;
}

interface Actions {
  signIn: (token: string) => void;
  signOut: () => void;
}

const useAuthStore = create<State & Actions>((set) => ({
  authToken: Cookies.get("Gigg_Token") || null,
  signIn: (token: string) => {
    Cookies.set("Gigg_Token", token, { expires: 7 });
    set({ authToken: token });
  },
  signOut: () => {
    Cookies.remove("Gigg_Token");
    set({ authToken: null });
  },
}));

export default useAuthStore;

import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/userTokenStore";

const LogoutButton = () => {
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOut);
  return (
    <button
      onClick={() => {
        signOut();
        navigate("/sign-in");
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;

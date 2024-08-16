import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/userTokenStore";
import { LogoutIcon } from "../../assets";

const LogoutButton = () => {
  const navigate = useNavigate();
  const signOut = useAuthStore((state) => state.signOut);
  return (
    <button
      className="duration-200 || hover:bg-highlight || py-4 px-10 || rounded || flex items-center gap-2"
      onClick={() => {
        signOut();
        navigate("/sign-in");
      }}
    >
      Logout
      {/* <img src={powerBtn} className="w-4" /> */}
      <LogoutIcon color="#EF4444" width="20" height="20" />
    </button>
  );
};

export default LogoutButton;

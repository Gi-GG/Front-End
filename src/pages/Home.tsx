import LogoutButton from "../components/auth/LogoutButton";
import ProtectedRoute from "../components/shared/ProtectedRoute";
import { useGetCurrentUser } from "../hooks/auth/useGetCurrentUser";

const Home = () => {
  const { data: user } = useGetCurrentUser();
  return (
    <ProtectedRoute>
      <div>Hello, {user?.name}</div>
      <LogoutButton />
    </ProtectedRoute>
  );
};

export default Home;

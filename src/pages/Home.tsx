import { useGetCurrentUser } from "../hooks/auth/useGetCurrentUser";

const Home = () => {
  const { data: user } = useGetCurrentUser();
  return (
    <>
      <div>Hello, {user?.name}</div>
    </>
  );
};

export default Home;

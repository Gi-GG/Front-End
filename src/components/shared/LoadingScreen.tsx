import { logo } from "../../assets/index";

const LoadingScreen = () => {
  return (
    <div className="bg-base absolute top-0 left-0 w-screen h-screen flex justify-center items-center flex-col gap-4">
      <img src={logo} alt="GI-GG" />
      <p>Loading...</p>
    </div>
  );
};

export default LoadingScreen;

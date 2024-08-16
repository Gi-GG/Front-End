import { Link } from "react-router-dom";
import { billi, union, unoinRT } from "../../../assets";
import TypoLogo from "../TypoLogo";
import Button from "../Button";

const RegisterModal = () => {
  return (
    <div className="w-screen h-screen || fixed top-0 left-0 z-30 || bg-transparent backdrop-blur-md || flex justify-center items-center">
      <div className="absolute top-0 left-0 z-40 blur-xl w-full h-full"></div>

      <div className="w-full md:w-3/4 h-3/4 rounded-xl bg-base relative z-50">
        <img
          className="absolute top-0 right-0 z-[1]"
          src={union}
          alt="background image"
        />
        <div className="h-full w-full flex flex-col justify-center items-center gap-5 z-[10] relative">
          <TypoLogo />
          <div className="flex flex-col justify-center items-center gap-2">
            <h1 className="text-[26px] text-white">Enjoy The Life!</h1>
            <p className="text-highlight text-sm text-center max-w-[306px] mx-auto">
              GIGG is an Egyptian app for tracking concerts making it easy to
              discover and follow the latest performances in Egypt.
            </p>
            <div className="flex justify-between items-center gap-16 flex-wrap mt-8">
              <Link to={"/register"}>
                <Button className="px-8">Register</Button>
              </Link>

              <Link to={"/sign-in"}>
                <Button className="bg-transparent">Signin</Button>
              </Link>
            </div>
          </div>
        </div>
        <img
          className="absolute bottom-0 left-0 z-[2]"
          src={billi}
          alt="background image"
        />
        <img
          className="absolute bottom-0 right-0 z-[3]"
          src={unoinRT}
          alt="background image"
        />
      </div>
    </div>
  );
};

export default RegisterModal;

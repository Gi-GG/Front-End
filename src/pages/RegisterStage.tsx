import { Link } from "react-router-dom";
import { billi, union, unoinRT } from "../assets";
import { Button, Navigator, TypoLogo } from "../components";

const RegisterStage = () => {
    return (
        <>
            <img
                className="absolute top-0 right-0 z-[1]"
                src={union}
                alt="background image"
            />
            <Navigator />
            <div className="h-[calc(100svh-300px)] w-screen flex flex-col justify-center items-center gap-5 z-[10] relative">
                <TypoLogo />
                <div className="flex flex-col justify-center items-center gap-2">
                    <h1 className="text-[26px] text-white">Enjoy The Life!</h1>
                    <p className="text-highlight text-sm text-center w-[306px] mx-auto">
                        GIGG is an Egyptian app for tracking concerts making it
                        easy to discover and follow the latest performances in
                        Egypt.
                    </p>
                    <div className="flex justify-between items-center w-full flex-wrap mt-8">
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
        </>
    );
};

export default RegisterStage;

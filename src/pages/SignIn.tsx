import { Navigator, SignInForm, TypoLogo } from "../components";
import { appleIcon, googleIcon, twitterIcon, union } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/userTokenStore";
import { useEffect } from "react";

const styles = {
    formGroup: "w-full",
    input: "w-full || bg-transparent || outline-none || rounded-3xl || px-4 py-6 || border-[0.5px] border-secondary || text-white",
    btn: "bg-primary || text-white text-xl ||| font-semibold || outline-none || rounded-3xl || px-2 py-5 || disabled:bg-slate-500",
    platIcons: "w-[30px]",
};
const SignIn = () => {
    const navigate = useNavigate();
    const token = useAuthStore((state) => state.authToken);

    useEffect(() => {
        if (token) {
            navigate("/", { replace: true }); // Redirect to home if already signed in
        }
    }, [token, navigate]);
    return (
        <>
            <Navigator>
                <TypoLogo />
            </Navigator>
            <img className="absolute || top-0 right-0" src={union} />
            <div className="w-full h-[calc(100svh-80px)] flex justify-center items-center">
                <div className=" || ">
                    <div className="w-[300px] md:w-[450px] lg:w-[780px] mx-auto">
                        {/* Form Header */}
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-3xl || font-semibold">
                                Sign In
                            </h1>
                            <p className="text-highlight text-sm">
                                If you need any support{" "}
                                <Link
                                    className="text-primary || underline"
                                    to={"/"}
                                >
                                    click here
                                </Link>
                            </p>
                        </div>

                        {/* Form Body */}
                        <SignInForm />

                        {/* Platforms Auth Providers */}
                        <div className="flex justify-center items-center gap-3 || mt-5">
                            <img
                                className={styles.platIcons}
                                src={googleIcon}
                                alt="googleIcon"
                            />
                            <img
                                className={`${styles.platIcons} || w-[55px]`}
                                src={twitterIcon}
                                alt="twitterIcon"
                            />
                            <img
                                className={styles.platIcons}
                                src={appleIcon}
                                alt="appleIcon"
                            />
                        </div>

                        <p className="text-white text-sm text-center mt-5">
                            Not A Memeber ?{" "}
                            <Link
                                className="text-blue-500 underline"
                                to={"/register"}
                            >
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;

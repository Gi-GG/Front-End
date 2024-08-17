import { appleIcon, googleIcon, twitterIcon, union } from "../assets";
import { Link } from "react-router-dom";
import { Navigator, TypoLogo } from "../components";
import ChangeEmailForm from "../components/auth/ChangeEmailForm";

const styles = {
    formGroup: "w-full",
    input: "w-full || bg-transparent || outline-none || rounded-3xl || px-4 py-6 || border-[0.5px] border-secondary || text-white",
    btn: "bg-primary || text-white text-xl ||| font-semibold || outline-none || rounded-3xl || px-2 py-5 || transition duration-500 disabled:bg-slate-500",
    platIcons: "w-[30px]",
};
const ChangeEmail = () => {
    return (
        <>
            <Navigator>
                <TypoLogo />
            </Navigator>
            <div className="w-full min-h-[calc(100svh-80px)] flex flex-col justify-center items-center ">
                <img
                    className="absolute || top-0 right-0"
                    src={union}
                    alt="background image"
                />
                <div className="w-[330px] px-2 py-1 md:w-[500px] lg:w-[780px] mx-auto ">
                    {/* Form Header */}
                    <div className="flex flex-col items-center gap-2">
                        <h1 className="text-3xl text-white || font-semibold">
                            Change Email
                        </h1>
                    </div>

                    {/* Form Body */}
                    <ChangeEmailForm />

                    <p className="text-white text-sm text-center mt-5">
                        If you need any support{" "}
                        <Link className="text-blue-500 underline" to={"/"}>
                            click here
                        </Link>
                    </p>
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
                </div>
            </div>
        </>
    );
};

export default ChangeEmail;

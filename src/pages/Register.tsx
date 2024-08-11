import { appleIcon, googleIcon, twitterIcon, union } from "../assets";
import { Link } from "react-router-dom";
import FormNavigator from "../components/FormNavigator";

const styles = {
    formGroup: "w-full",
    input: "w-full || bg-transparent || outline-none || rounded-3xl || px-4 py-6 || border-[0.5px] border-secondary || text-white",
    btn: "bg-primary || text-white text-xl ||| font-semibold || outline-none || rounded-3xl || px-2 py-5 || disabled:bg-slate-500",
    platIcons: "w-[30px]",
};
const Register = () => {
    return (
        <>
            <FormNavigator />
            <img className="absolute || top-0 right-0" src={union} />
            <div className="w-full h-[calc(100svh-80px)] flex justify-center items-center">
                <div className=" || ">
                    <div className="w-[300px] md:w-[450px] lg:w-[780px] mx-auto">
                        {/* Form Header */}
                        <div className="flex flex-col items-center gap-2">
                            <h1 className="text-3xl text-white || font-semibold">
                                Register
                            </h1>
                            <p className="text-white text-sm">
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
                        <form className="mt-10 || flex flex-col gap-5">
                            <input
                                className={styles.input}
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                id="fullName"
                            />
                            <input
                                className={styles.input}
                                type="email"
                                name="email"
                                placeholder="Enter Email"
                                id="email"
                            />
                            <input
                                className={styles.input}
                                type="password"
                                name="password"
                                placeholder="Password"
                                id="password"
                            />
                            <button disabled={false} className={styles.btn}>
                                Creat Account
                            </button>
                        </form>

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
                            Do you have an account?{" "}
                            <Link className="text-blue-500 underline" to={"/"}>
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;

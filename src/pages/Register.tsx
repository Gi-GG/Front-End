import { appleIcon, googleIcon, twitterIcon, union } from "../assets";
import { Link } from "react-router-dom";
import FormNavigator from "../components/FormNavigator";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";

const styles = {
    formGroup: "w-full",
    input: "w-full || bg-transparent || outline-none || rounded-3xl || px-4 py-6 || border-[0.5px] border-secondary || text-white",
    btn: "bg-primary || text-white text-xl ||| font-semibold || outline-none || rounded-3xl || px-2 py-5 || transition duration-500 disabled:bg-slate-500",
    platIcons: "w-[30px]",
};

// Define a type for the form inputs
interface InputsState {
    fullName: string;
    email: string;
    password: string;
}

const initialState: InputsState = {
    fullName: "",
    email: "",
    password: "",
};

const Register = () => {
    const [inputs, setInputs] = useState<InputsState>(initialState);
    const [loading, setLoading] = useState<boolean>(false);
    const [disabled, setDisabled] = useState<boolean>(true);

    const handleInputs = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        /////////// on fulfilled /////////
        // setInputs(initialState);
        // setLoading(false);
        // setDisabled(true);
    };

    useEffect(() => {
        const { fullName, email, password } = inputs;

        if (fullName && email && password) {
            setDisabled(false);
        } else {
            setDisabled(true);
        }
    }, [inputs]);
    return (
        <>
            <FormNavigator />
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
                    <form
                        onSubmit={handleSubmit}
                        className="mt-10 || flex flex-col gap-5"
                    >
                        <input
                            onChange={handleInputs}
                            value={inputs.fullName}
                            className={styles.input}
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            id="fullName"
                        />
                        <input
                            onChange={handleInputs}
                            value={inputs.email}
                            className={styles.input}
                            type="email"
                            name="email"
                            placeholder="Enter Email"
                            id="email"
                        />
                        <input
                            onChange={handleInputs}
                            value={inputs.password}
                            className={styles.input}
                            type="password"
                            name="password"
                            placeholder="Password"
                            id="password"
                        />
                        <button
                            disabled={disabled || loading}
                            className={styles.btn}
                        >
                            Create Account
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
        </>
    );
};

export default Register;

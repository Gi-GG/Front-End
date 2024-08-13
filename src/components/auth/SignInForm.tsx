import React, { useState } from "react";
import useSignIn from "../../hooks/auth/useSignIn";
import { Input, Button } from "../";

interface Errors {
    username: boolean;
    password: boolean;
    root: boolean;
}

const SignInForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    const { mutateAsync, isSuccess } = useSignIn();

    const [errors, setErrors] = useState<Errors>({
        username: false,
        password: false,
        root: false,
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null); // Reset error message

        const newErrors: Errors = {
            username: username.trim().length <= 3,
            password: password.trim().length < 6,
            root: false,
        };

        setErrors(newErrors);

        if (!newErrors.username && !newErrors.password) {
            try {
                await mutateAsync({ email: username, password });
                setUsername("");
                setPassword("");
            } catch (error: any) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    };

    return (
        <form className="mt-10 || flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="w-full flex flex-col gap-2">
                <Input
                    type="text"
                    placeholder="Enter Username Or Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && (
                    <p className="text-red-600">Invalid Username Or Email</p>
                )}
            </div>

            <div className="w-full flex flex-col gap-2">
                <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                    <p className="text-red-600">Invalid Password</p>
                )}
            </div>

            <Button
                type="submit"
                isLoading={isLoading}
                className="duration-200 hover:bg-opacity-65"
                disabled={!username.trim() || !password.trim()}
            >
                Sign In
            </Button>

            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
            {isSuccess && (
                <p className="text-green-600">Signed in successfully!</p>
            )}
        </form>
    );
};

export default SignInForm;

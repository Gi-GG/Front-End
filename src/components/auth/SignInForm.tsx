import { useState } from "react";
import useSignIn from "../../hooks/auth/useSignIn";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";
import { Errors } from "../../types/erorrs";

const SignInForm = () => {
    const { mutateAsync, isSuccess } = useSignIn();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Errors>({
        username: false,
        password: false,
        root: false,
    });

    const formGroup: FormGroup[] = [
        {
            name: "username",
            placeholder: "username",
            type: "text",
            value: "",
            error: errors.username
                ? "Username must be at least 4 characters"
                : "",
        },
        {
            name: "password",
            placeholder: "password",
            type: "password",
            value: "",
            error: errors.password
                ? "Password must be at least 6 characters"
                : "",
        },
    ];

    const handleSubmit = async (formValues: any) => {
        setIsLoading(true);
        setErrorMessage(null); // Reset error message

        const newErrors: Errors = {
            username: formValues.username.trim().length <= 3,
            password: formValues.password.trim().length < 6,
            root: false,
        };

        setErrors(newErrors);

        if (!newErrors.username && !newErrors.password) {
            try {
                await mutateAsync({
                    email: formValues.username,
                    password: formValues.password,
                });
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
        <Form
            formGroups={formGroup}
            isLoading={isLoading}
            buttonText="Sign In"
            handleSubmit={handleSubmit}
            isSuccess={isSuccess}
            error={errors}
            errorMessage={errorMessage}
        />
    );
};

export default SignInForm;

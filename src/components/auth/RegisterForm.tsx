import React, { useState } from "react";
import useRegister from "../../hooks/auth/useRegister";
import { FormGroup } from "../../types/formGroup";
import { Errors } from "../../types/erorrs";
import Form from "../shared/Form";


const formGroup: FormGroup[] = [
    {
        name: "name",
        placeholder: "Full Name",
        type: "text",
        value: "",
        error: "",
    },
    {
        name: "username",
        placeholder: "Username",
        type: "text",
        value: "",
        error: "",
    },
    {
        name: "email",
        placeholder: "Enter Email",
        type: "email",
        value: "",
        error: "",
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
        value: "",
        error: "",
    },
];

const RegisterForm = () => {
    const { mutateAsync, isSuccess } = useRegister();

    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [errors, setErrors] = useState<Errors>({
        name: false,
        username: false,
        email: false,
        password: false,
        root: false,
    });

    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>,
        formValues: any
    ) => {
        e.preventDefault();
        setIsLoading(true);
        setErrorMessage(null); // Reset error message

        const newErrors: Errors = {
            name: formValues.name.trim().length <= 3,
            username: formValues.username.trim().length <= 3,
            email: formValues.email.trim().length <= 3,
            password: formValues.password.trim().length < 6,
            root: false,
        };

        setErrors(newErrors);

        if (
            !newErrors.name &&
            !newErrors.username &&
            !newErrors.email &&
            !newErrors.password
        ) {
            try {
                await mutateAsync(formValues);
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
            buttonText="Create Account"
            handleSubmit={handleSubmit}
            isSuccess={isSuccess}
            error={errors}
            errorMessage={errorMessage}
        />
    );
};

export default RegisterForm;

import React, { useState } from "react";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";
import { Errors } from "../../types/erorrs";
import useChangePassword from "../../hooks/auth/useChangePassword";
import useChangeEmail from "../../hooks/auth/useChangeEmail";

const formGroup: FormGroup[] = [
    {
        name: "username",
        placeholder: "User Name",
        type: "text",
        value: "",
        error: "",
    },
    {
        name: "oldEmail",
        placeholder: "Old Email",
        type: "email",
        value: "",
        error: "",
    },
    {
        name: "newEmail",
        placeholder: "New Email",
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



const ChangeEmailForm = () => {
    const { mutateAsync, isSuccess } = useChangeEmail();
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
            buttonText="Change My Password"
            handleSubmit={handleSubmit}
            isSuccess={isSuccess}
            error={errors}
            errorMessage={errorMessage}
        />
    );
};

export default ChangeEmailForm;

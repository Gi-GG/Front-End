import React, { useState } from "react";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";
import { Errors } from "../../types/erorrs";
import useChangePassword from "../../hooks/auth/useChangePassword";

const formGroup: FormGroup[] = [
    {
        name: "email",
        placeholder: "Email",
        type: "email",
        value: "",
        error: "",
    },
    {
        name: "newPassword",
        placeholder: "New Password",
        type: "password",
        value: "",
        error: "",
    },
    {
        name: "RepeatPassword",
        placeholder: "Repeat New Password",
        type: "password",
        value: "",
        error: "",
    },
    {
        name: "oldPassword",
        placeholder: "Old Password",
        type: "password",
        value: "",
        error: "",
    },
];



const ChangePasswordForm = () => {
    const { mutateAsync, isSuccess } = useChangePassword();
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
            buttonText="Change My Password"
            handleSubmit={handleSubmit}
            isSuccess={isSuccess}
            error={errors}
            errorMessage={errorMessage}
        />
    );
};

export default ChangePasswordForm;

import React, { useState } from "react";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";
import useChangePassword from "../../hooks/auth/useChangePassword";

interface Passwords {
    oldPassword: string;newPassword
    : string;
}

const formGroup: FormGroup[] = [
    {
        name: "email",
        placeholder: "Email",
        type: "text",
        value: "",
        errorMessage: "Invalid Email",
        validation: (...props) => {
            return props[0].trim().length <= 3;
        },
    },
    {
        name: "newPassword",
        placeholder: "New Password",
        type: "password",
        value: "",
        errorMessage: "Passwords are not identical",
        validation: (...props) => {
            return props[0].trim().length < 6;
        },
    },
    {
        name: "repeatPassword",
        placeholder: "Repeat Password",
        type: "password",
        value: "",
        errorMessage: "Passwords do not match",
        validation: (...props) => {
            return props[0] !== props[1];
        },
    },
    {
        name: "oldPassword",
        placeholder: "Old Password",
        type: "password",
        value: "",
        errorMessage: "Password is Invalid",
        validation: (...props) => {
            return props[0].trim().length < 6;
        },
    },
];

const ChangePasswordForm = () => {
    const { mutateAsync, isSuccess } = useChangePassword();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <Form<Passwords>
            formGroups={formGroup}
            isLoading={isLoading}
            buttonText="Change My Password"
            isSuccess={isSuccess}
            setIsLoading={setIsLoading}
            mutateFunction={mutateAsync}
        />
    );
};

export default ChangePasswordForm;

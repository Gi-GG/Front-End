import { useState } from "react";
import useRegister from "../../hooks/auth/useRegister";
import { FormGroup } from "../../types/formGroup";
import Form from "../shared/Form";
interface User {
    username: string;
    email: string;
    password: string;
}

const formGroup: FormGroup[] = [
    {
        name: "name",
        placeholder: "Full Name",
        type: "text",
        value: "",
        errorMessage: "Invalid Name",
        validation: (...props) => {
            return props[0].trim().length <= 3;
        },
    },
    {
        name: "username",
        placeholder: "Username",
        type: "text",
        value: "",
        errorMessage: "Invalid Username",
        validation: (...props) => {
            return props[0].trim().length <= 3;
        },
    },
    {
        name: "email",
        placeholder: "Enter Email",
        type: "email",
        value: "",
        errorMessage: "Invalid Email",
        validation: (...props) => {
            return props[0].trim().length <= 3;
        },
    },
    {
        name: "password",
        placeholder: "Password",
        type: "password",
        value: "",
        errorMessage: "Invalid Password",
        validation: (...props) => {
            return props[0].trim().length < 6;
        },
    },
];

const RegisterForm = () => {
    const { mutateAsync, isSuccess } = useRegister();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    return (
        <Form<User>
            formGroups={formGroup}
            isLoading={isLoading}
            buttonText="Create Account"
            isSuccess={isSuccess}
            setIsLoading={setIsLoading}
            mutateFunction={mutateAsync}
        />
    );
};

export default RegisterForm;

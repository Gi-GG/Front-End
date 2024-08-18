import { useState } from "react";
import useSignIn from "../../hooks/auth/useSignIn";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";

interface User {
    email: string;
    password: string;
}
const SignInForm = () => {
    const { mutateAsync, isSuccess } = useSignIn();
    const [isLoading, setIsLoading] = useState(false);
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

    return (
        <Form<User>
            formGroups={formGroup}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
            buttonText="Sign In"
            isSuccess={isSuccess}
            mutateFunction={mutateAsync}
        />
    );
};

export default SignInForm;

import { useState } from "react";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";
import useChangeEmail from "../../hooks/auth/useChangeEmail";

const formGroup: FormGroup[] = [
    {
        name: "username",
        placeholder: "User Name",
        type: "text",
        value: "",
        errorMessage: "Invalid username",
        validation: (...props) => {
            return props[0].trim().length <= 3;
        },
    },
    {
        name: "oldEmail",
        placeholder: "Old Email",
        type: "email",
        value: "",
        errorMessage: "Invalid Email",
        validation: (...props) => {
            return props[0].trim().length <= 3;
        },
    },
    {
        name: "newEmail",
        placeholder: "New Email",
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

const ChangeEmailForm = () => {
    const { mutateAsync, isSuccess } = useChangeEmail();
    const [isLoading, setIsLoading] = useState<boolean>(false);

    // const handleSubmit = async (
    //     e: React.FormEvent<HTMLFormElement>,
    //     formValues: any
    // ) => {
    //     e.preventDefault();
    //     setIsLoading(true);

    //     // const newErrors: Errors = {
    //     //     username: formValues.username.trim().length <= 3,
    //     //     email: formValues.email.trim().length <= 3,
    //     //     password: formValues.password.trim().length < 6,
    //     //     root: false,
    //     // };

    //     // setErrors(newErrors);

    //     if (!hasError) {
    //         try {
    //             await mutateAsync(formValues);
    //         } catch (error: any) {
    //             setErrorMessage(error.message);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     } else {
    //         setIsLoading(false);
    //     }
    // };

    return (
        <Form
            formGroups={formGroup}
            isLoading={isLoading}
            buttonText="Change My Password"
            isSuccess={isSuccess}
            setIsLoading={setIsLoading}
            mutateFunction={mutateAsync}
        />
    );
};

export default ChangeEmailForm;

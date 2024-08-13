import React, { useState } from "react";
import useSignIn from "../../hooks/auth/useSignIn";
import Form from "../shared/Form";
import { FormGroup } from "../../types/formGroup";

interface Errors {
  username: boolean;
  password: boolean;
  root: boolean;
}

const formGroup: FormGroup[] = [
  {
    name: "username",
    placeholder: "username",
    type: "text",
    value: "",
  },
  {
    name: "password",
    placeholder: "password",
    type: "password",
    value: "",
  },
];

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
    <Form
      formGroups={formGroup}
      isLoading={isLoading}
      buttonText="Sign In"
      handleSubmit={handleSubmit}
    />
  );
};

export default SignInForm;

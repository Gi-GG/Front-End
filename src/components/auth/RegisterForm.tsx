import React, { useState } from "react";
import useRegister from "../../hooks/auth/useRegister";
import Input from "../shared/Input";
import Button from "../shared/Button";

interface Errors {
  username: boolean;
  email: boolean;
  password: boolean;
  root: boolean;
}

// Define a type for the form inputs
interface InputsState {
  username: string;
  email: string;
  password: string;
}

const initialState: InputsState = {
  username: "",
  email: "",
  password: "",
};

const RegisterForm = () => {
  const { mutateAsync, isSuccess, isError } = useRegister();

  const [inputs, setInputs] = useState<InputsState>(initialState);
  const [loading, setLoading] = useState<boolean>(false);
  const [disabled, setDisabled] = useState<boolean>(true);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const [errors, setErrors] = useState<Errors>({
    username: false,
    email: false,
    password: false,
    root: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const newErrors: Errors = {
      username: inputs.username.trim().length <= 3,
      email: inputs.email.trim().length <= 3,
      password: inputs.password.trim().length < 6,
      root: false,
    };

    setErrors(newErrors);

    if (!newErrors.username && !newErrors.email && !newErrors.password) {
      await mutateAsync(inputs);
      setInputs(initialState);
      setLoading(false);
      setDisabled(true);
    }

    if (isError || isSuccess) setLoading(false);
  };
  return (
    <form onSubmit={handleSubmit} className="mt-10 || flex flex-col gap-5">
      <div className="w-full flex flex-col gap-2">
        <Input
          onChange={handleInputs}
          value={inputs.username}
          type="text"
          name="username"
          placeholder="Full Name"
          id="username"
        />

        {errors.username && (
          <p className="text-red-600">Invalid Username Or Email</p>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <Input
          onChange={handleInputs}
          value={inputs.email}
          type="email"
          name="email"
          placeholder="Enter Email"
          id="email"
        />

        {errors.email && (
          <p className="text-red-600">Invalid Username Or Email</p>
        )}
      </div>

      <div className="w-full flex flex-col gap-2">
        <Input
          onChange={handleInputs}
          value={inputs.password}
          type="password"
          name="password"
          placeholder="Password"
          id="password"
        />
        {errors.password && <p className="text-red-600">Invalid Password</p>}
      </div>
      <Button
        type="submit"
        isLoading={loading}
        className="duration-200 hover:bg-opacity-65"
        disabled={
          !inputs.username.trim() ||
          !inputs.password.trim() ||
          !inputs.email.trim() ||
          !disabled
        }
      >
        Create Account
      </Button>

      {isError && (
        <p className="text-red-600">Error signing in. Please try again.</p>
      )}
      {isSuccess && <p className="text-green-600">Signed in successfully!</p>}
    </form>
  );
};

export default RegisterForm;

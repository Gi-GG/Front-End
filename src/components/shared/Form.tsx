import React, { useState } from "react";
import Button from "./Button";
import { TailSpin } from "react-loader-spinner";
import { FormGroup } from "../../types/formGroup";
import Input from "./Input";
import { Errors } from "../../types/erorrs";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    isLoading: boolean;
    isSuccess: boolean;
    error: Errors;
    buttonText?: string;
    errorMessage: string | null;
    formGroups: FormGroup[];
    handleSubmit: (e: React.FormEvent<HTMLFormElement>, formValues: any) => Promise<void>;
}

const Form = ({
    isLoading,
    isSuccess,
    errorMessage,
    buttonText = "Submit",
    handleSubmit,
    formGroups,
    ...props
}: FormProps) => {
    // States
    const [inputsState, setInputsState] = useState<any>(() => {
        const initialState: any = {};
        formGroups.forEach(group => {
            initialState[group.name] = group.value || "";
        });
        return initialState;
    });

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputsState({
            ...inputsState,
            [name]: value,
        });
    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e, inputsState);
            }}
            {...props}
            className={`mt-10 || flex flex-col gap-5 ${props.className}`}
        >
            {formGroups?.map((input, idx) => (
                <div className="w-full flex flex-col gap-2" key={idx}>
                    <Input
                        type={input.type || "text"}
                        placeholder={input.placeholder}
                        value={inputsState?.[input.name]}
                        onChange={handleInputs}
                        name={input.name}
                        className={input.className}
                    />
                    {input.error && (
                        <p className="text-red-600">{input.error}</p>
                    )}
                </div>
            ))}

            <Button type="submit">
                {buttonText}{" "}
                {isLoading && (
                    <TailSpin
                        visible={true}
                        height="30"
                        width="30"
                        color="#D6D6D6"
                        ariaLabel="tail-spin-loading"
                        radius="1"
                    />
                )}
            </Button>
            {errorMessage && <p className="text-red-600">{errorMessage}</p>}
        </form>
    );
};

export default Form;


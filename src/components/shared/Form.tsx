import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "./Button";
import { TailSpin } from "react-loader-spinner";
import { FormGroup } from "../../types/formGroup";
import Input from "./Input";
import { fadeLeftLine, fadeRightLine } from "../../assets";
import { UseMutateAsyncFunction } from "@tanstack/react-query";


type MutateFunction<T> = UseMutateAsyncFunction<any, any, T, unknown>;

interface FormProps<T> extends React.FormHTMLAttributes<HTMLFormElement> {
    isLoading: boolean;
    isSuccess: boolean;
    buttonText?: string;
    formGroups: FormGroup[];
    setIsLoading: Dispatch<SetStateAction<boolean>>;
    mutateFunction: MutateFunction<T>;
}

const Form = <T,>({
    isLoading,
    isSuccess,
    buttonText = "Submit",
    formGroups,
    mutateFunction,
    setIsLoading,
    ...props
}: FormProps<T>) => {
    // States
    const [errorMessage, setErrorMessage] = useState("");
    const [inputsState, setInputsState] = useState<any>(() => {
        const initialState: any = {};
        formGroups.forEach((group) => {
            initialState[group.name] = group.value || "";
        });
        return initialState;
    });

    const [errors, setErrors] = useState<Record<string, boolean>>(() => {
        return formGroups.reduce((acc, group) => {
            acc[group.name] = false;
            return acc;
        }, {} as Record<string, boolean>);
    });
    const [disabled, setDisabled] = useState<boolean>(true);

    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInputsState((prevState: any) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);

        let newErrors: Record<string, boolean> = {};
        let hasError = false;

        formGroups.forEach((group) => {
            const isError = group.validation(
                inputsState[group.name],
                inputsState.password
            );
            newErrors[group.name] = isError;

            if (isError) {
                hasError = true;
            }
        });
        setErrors(newErrors);

        if (!hasError) {
            try {
                await mutateFunction(inputsState);
            } catch (error: any) {
                setErrorMessage(error.message);
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        const allFilled = formGroups.every((group) => {
            const value = inputsState[group.name];
            return value !== "" && value !== undefined && value !== null;
        });

        setDisabled(!allFilled);
    }, [inputsState, formGroups]);

    return (
        <>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(e);
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
                        {errors[input.name] && (
                            <span className="py-1 text-red-600 font-semibold">
                                {input.errorMessage || "Invalid Input"}
                            </span>
                        )}
                    </div>
                ))}

                <Button
                    className="disabled:bg-slate-400 transition duration-300 ease-in-out"
                    disabled={disabled || isLoading}
                    type="submit"
                >
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
            <div className="flex justify-center gap-5 my-5">
                <img src={fadeRightLine} alt="fade-line" />
                <span>Or</span>
                <img src={fadeLeftLine} alt="fade-line" />
            </div>
        </>
    );
};

export default Form;

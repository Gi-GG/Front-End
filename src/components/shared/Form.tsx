import React, { useEffect, useState } from "react";
import Button from "./Button";
import { TailSpin } from "react-loader-spinner";
import { FormGroup } from "../../types/formGroup";
import Input from "./Input";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  isLoading: boolean;
  buttonText?: string;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  formGroups: FormGroup[];
}

const Form = ({
  isLoading,
  buttonText = "Submit",
  handleSubmit,
  formGroups,
  ...props
}: FormProps) => {
  const [inputsState, setInputsState] = useState<any>({
    username: "",
    password: "",
  });

  useEffect(() => {
    const appendValue = () => {
      let values: any = {};

      formGroups.forEach((group) => {
        values[group.name] = group.value;
      });

      setInputsState(values);
    };

    appendValue();
  }, [formGroups]);

  const handleInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  useEffect(() => {
    console.log(inputsState);
  }, [inputsState]);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(e);
      }}
      {...props}
      className={`mt-10 || flex flex-col gap-5 ${props.className}`}
    >
      {/* {children} */}

      {formGroups?.map((input, idx) => (
        <div className="w-full flex flex-col gap-2" key={idx}>
          <Input
            type={input.type || "text"}
            placeholder={input.placeholder}
            value={inputsState?.[formGroups[idx]?.name]}
            onChange={handleInputs}
            name={input.name}
            className={input.className}
          />
          {input.error && <p className="text-red-600">{input.error}</p>}
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
            wrapperStyle={{}}
            wrapperClass=""
          />
        )}
      </Button>
    </form>
  );
};

export default Form;

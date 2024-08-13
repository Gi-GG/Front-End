import React from "react";
import { TailSpin } from "react-loader-spinner";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, isLoading, ...props }) => {
  return (
    <button
      {...props}
      className={`bg-primary text-white text-xl font-semibold outline-none rounded-3xl px-2 py-5 flex justify-center items-center gap-4 disabled:bg-highlight ${props.className}`}
    >
      {children}
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
    </button>
  );
};

export default Button;

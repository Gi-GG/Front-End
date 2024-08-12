import React from "react";
// import ShowPasswordIcon from "./ui/ShowPasswordIcon";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  // You can add custom props here if needed
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <>
      <input
        {...props}
        className={`w-full || bg-transparent || outline-none || rounded-3xl || px-4 py-6 || border-[0.5px] border-secondary || placeholder:text-highlight || text-white ${props.className}`}
      />

      {/* <ShowPasswordIcon className="cursor-pointer " /> */}
    </>
  );
};

export default Input;

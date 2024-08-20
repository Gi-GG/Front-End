import React from "react";
import { leftArrow } from "../../assets";
import { useNavigate } from "react-router-dom";

interface NavigatorProps {
  children?: React.ReactNode;
  className?: string;
}

const Navigator: React.FC<NavigatorProps> = ({ children, className }) => {
  const navigate = useNavigate();

  const handleBackword = () => {
    navigate(-1);
  };
  return (
    <nav className="w-full">
      <div
        className={`container mx-auto flex items-center justify-center h-[80px] relative ${className}`}
      >
        <div
          onClick={handleBackword}
          className="w-[30px] h-[30px] rounded-full bg-[#242222] flex justify-center items-center absolute left-[10%] cursor-pointer"
        >
          <img className="w-full" src={leftArrow} alt="Back" />
        </div>
        {children}
      </div>
    </nav>
  );
};

export default Navigator;

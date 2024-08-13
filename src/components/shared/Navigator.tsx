import React from "react";
import { Link } from "react-router-dom";
import { leftArrow } from "../../assets";

interface NavigatorProps {
    children?: React.ReactNode;
    path?: string; // optional for now
    className?: string;
}

const Navigator: React.FC<NavigatorProps> = ({ children, path, className }) => {
    return (
        <nav className="w-full">
            <div
                className={`container mx-auto flex items-center justify-center h-[80px] relative ${className}`}
            >
                <Link
                    to={path || "/"}
                    className="w-[30px] h-[30px] rounded-full bg-[#242222] flex justify-center items-center absolute left-[10%]"
                >
                    <img className="w-full" src={leftArrow} alt="Back" />
                </Link>
                {children}
            </div>
        </nav>
    );
};

export default Navigator;

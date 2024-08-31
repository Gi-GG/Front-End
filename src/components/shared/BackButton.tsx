import { useNavigate } from "react-router-dom";
import { leftArrow } from "../../assets";

const BackButton = () => {
    const navigate = useNavigate();

    const handleBackword = () => {
        navigate(-1);
    };
    return (
        <div
            onClick={() => handleBackword()}
            className="w-[30px] h-[30px] rounded-full bg-[#4d4848] flex justify-center items-center cursor-pointer relative z-40"
        >
            <img className="w-full" src={leftArrow} alt="Back" />
        </div>
    );
};

export default BackButton;

// #242222

// #4d4848

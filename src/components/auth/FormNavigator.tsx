import { Link } from "react-router-dom";
import { leftArrow } from "../../assets";
import TypoLogo from "../shared/TypoLogo";

const FormNavigator = () => {
    return (
        <>
            <nav className="w-full">
                <div className="container mx-auto || flex items-center justify-center || h-[80px] || relative">
                    <Link
                        to={"/"}
                        className="w-[30px] h-[30px] || rounded-full || bg-[#242222] || flex justify-center items-center || absolute left-[10%]"
                    >
                        <img className="w-full" src={leftArrow} alt="arrow" />
                    </Link>
                    <TypoLogo />
                </div>
            </nav>
        </>
    );
};

export default FormNavigator;

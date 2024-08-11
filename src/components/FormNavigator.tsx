import { Link } from "react-router-dom";
import { leftArrow, logo, typoLogo } from "../assets";

const FormNavigator = () => {
    return (
        <>
            <nav className="w-full">
                <div className="container mx-auto || flex items-center justify-center || px-8 h-[80px] py-5 || relative">
                    <Link
                        to={"/"}
                        className="w-[25px] h-[25px] || rounded-full || bg-[#242222] || flex justify-center items-center || absolute left-[10%]"
                    >
                        <img className="w-full" src={leftArrow} alt="arrow" />
                    </Link>
                    <div className="flex items-center justify-center">
                        <img
                            className="w-[50px] md:w-[70px]"
                            src={logo}
                            alt="logo"
                        />
                        <img
                            className="w-[70px] md:w-[90px]"
                            src={typoLogo}
                            alt="logo"
                        />
                    </div>
                </div>
            </nav>
        </>
    );
};

export default FormNavigator;

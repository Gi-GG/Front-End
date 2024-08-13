import { logo, typoLogo } from "../../assets";

// interface Props {
//     logoWidth?: string;
//     typoWidth?: string;
// }

const TypoLogo = () => {
    return (
        <>
            <div className="flex items-center justify-center">
                <img
                    className={`w-[50px] md:w-[70px]`}
                    src={logo}
                    alt="logo"
                />
                <img
                    className={`w-[70px] md:w-[100px]`}
                    src={typoLogo}
                    alt="logo"
                />
            </div>
        </>
    );
};

export default TypoLogo;

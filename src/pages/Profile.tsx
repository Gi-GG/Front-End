import { BsThreeDotsVertical } from "react-icons/bs";
import { abyo, leftArrow } from "../assets";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();

    const handleBackword = () => {
        navigate(-1);
    };
    return (
        <>
            <div className="rounded-b-[6rem] p-5 bg-[#ffffff1a]">
                <div className="py-3 flex justify-between items-center">
                    <div
                        onClick={handleBackword}
                        className="w-[30px] h-[30px] rounded-full bg-[#242222] flex justify-center items-center"
                    >
                        <img className="w-full" src={leftArrow} alt="Back" />
                    </div>
                    <h1 className="text-2xl font-semibold">Profile</h1>
                    <BsThreeDotsVertical size={25} />
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                        <img
                            className="max-w-[100%] object-cover"
                            src={abyo}
                            alt="abyo"
                        />
                    </div>
                    <p className="text-slate-300 text-base">@abyusif</p>
                    <h1 className="text-3xl font-semibold text-white">
                        Abyusif
                    </h1>
                </div>

                <div className="flex justify-evenly items-center gap-5 mt-10">
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-semibold text-white">10</p>
                        <Link to="followers">Followers</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-semibold text-white">2</p>
                        <Link to="following">Following</Link>
                    </div>
                    <div className="flex flex-col items-center">
                        <p className="text-3xl font-semibold text-white">5</p>
                        <Link to="concerts-you-went">Concerts</Link>
                    </div>
                </div>
            </div>
            <div className="p-3">
                <Outlet />
            </div>
        </>
    );
};

export default Profile;

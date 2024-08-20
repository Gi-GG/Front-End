import { BsThreeDotsVertical } from "react-icons/bs";
import { neutron, usnionSVG } from "../assets";
import { Link, Outlet } from "react-router-dom";
import { PageContainer } from "../components";
import { useGetCurrentUser } from "../hooks/auth/useGetCurrentUser";
import BackButton from "../components/shared/BackButton";

const Profile = () => {
  const { data: user } = useGetCurrentUser();
  return (
    <PageContainer>
      <div className="rounded-b-[6rem] p-5 bg-[#ffffff1a] relative overflow-hidden">
        <img
          className="absolute || top-1/2 left-full -translate-y-1/2 -translate-x-3/4"
          src={usnionSVG}
          alt="background image"
        />

        <img
          className="absolute || top-0 left-0 -translate-x-3/4 -translate-y-1/2"
          src={usnionSVG}
          alt="background image"
        />

        <img
          className="absolute || top-full left-0 -translate-x-3/4 -translate-y-3/4"
          src={usnionSVG}
          alt="background image"
        />
        <div className="py-3 flex justify-between items-center">
          <BackButton />
          <h1 className="text-2xl font-semibold">Profile</h1>
          <BsThreeDotsVertical size={25} />
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
            <img
              className="max-w-[100%] object-cover"
              src={neutron}
              alt="neutron"
            />
          </div>
          <p className="text-slate-300 text-base">@{user?.username}</p>
          <h1 className="text-3xl font-semibold text-white">
            {user?.name ? user.name : "عمي"}
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
    </PageContainer>
  );
};

export default Profile;

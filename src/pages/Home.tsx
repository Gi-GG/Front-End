import ProtectedRoute from "../components/shared/ProtectedRoute";
import "swiper/css";
import { notification } from "../assets";
import { TypoLogo } from "../components";
import { BsThreeDotsVertical } from "react-icons/bs";
import ConcertCardsList from "../components/home/ConcertCardsList";
import RecommendedSongs from "../components/home/RecommendedSongs";

const Home = () => {
  return (
    <>
      <ProtectedRoute>
        <div className="flex justify-between items-center px-5 py-3">
          <img src={notification} alt="notification" />
          <TypoLogo />
          <BsThreeDotsVertical />
        </div>

        <ConcertCardsList />
        <RecommendedSongs />
      </ProtectedRoute>
    </>
  );
};

export default Home;

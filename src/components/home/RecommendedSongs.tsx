import { useGetRecommendedSongs } from "../../hooks/songs/useGetRecommendedSongs";
import { ModalProvider } from "../shared/ModalProvider";
import Skeleton from "../shared/ui/Skeleton";
import RecommendedSongsList from "./RecommendedSongsList";

const RecommendedSongs = () => {
  const { data: songs, isLoading } = useGetRecommendedSongs();

  return (
    <div className="my-10 p-4">
      <h3 className="font-bold">Recommended Songs</h3>

      {isLoading ? (
        <div>
          <Skeleton className="w-full h-12 rounded my-4" />
          <Skeleton className="w-full h-12 rounded my-4" />
          <Skeleton className="w-full h-12 rounded my-4" />
          <Skeleton className="w-full h-12 rounded my-4" />
          <Skeleton className="w-full h-12 rounded my-4" />
          <Skeleton className="w-full h-12 rounded my-4" />
        </div>
      ) : (
        <ModalProvider>
          <RecommendedSongsList songs={songs} />
        </ModalProvider>
      )}
    </div>
  );
};

export default RecommendedSongs;

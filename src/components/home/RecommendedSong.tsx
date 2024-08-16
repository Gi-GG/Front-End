import { heartIcon, playIcon } from "../../assets";
import { Song } from "../../types/song";

// Define the type for the props
interface RecommendedSongProps {
  song: Song;
  handlePlay: () => void;
  setSongUrl: React.Dispatch<React.SetStateAction<string>>;
}

const RecommendedSong = ({
  song,
  handlePlay,
  setSongUrl,
}: RecommendedSongProps) => {
  return (
    <div className="grid grid-cols-4 px-4 items-center place-items-center lg:place-items-start">
      <button
        onClick={() => {
          setSongUrl(song.preview_url);
          handlePlay();
        }}
        className="p-3 rounded-full bg-highlight w-fit h-fit duration-150 hover:bg-primary"
      >
        <img src={playIcon} alt="play" />
      </button>

      <div className="flex flex-col col-span-2 gap-3">
        <h4 className="font-medium">{song.song}</h4>
        <p>{song.artist}</p>
      </div>

      <button className="w-fit">
        <img src={heartIcon} alt="heart" />
      </button>
    </div>
  );
};

export default RecommendedSong;

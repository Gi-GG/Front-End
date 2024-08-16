import { heartIcon, pauseIcon, playIcon } from "../../assets";
import { Song } from "../../types/song";
import React from "react";

// Define the type for the props
interface RecommendedSongProps {
  song: Song;
  handlePlayPause: () => void;
  setSongUrl: React.Dispatch<React.SetStateAction<string>>;
  isPlaying: boolean;
}

const RecommendedSong = ({
  song,
  handlePlayPause,
  setSongUrl,
  isPlaying,
}: RecommendedSongProps) => {
  const handleButtonClick = () => {
    setSongUrl(song.preview_url);
    handlePlayPause();
  };

  return (
    <div className="relative grid grid-cols-4 px-4 items-center place-items-center lg:place-items-start">
      <div className="relative">
        {/* Circular progress animation */}
        <svg
          className="absolute -inset-[5px] w-12 h-12"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            className="text-transparent"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            cx="50%"
            cy="50%"
            r="45"
          />
          <circle
            className={`text-primary transition-transform duration-30000 ${
              isPlaying ? "animate-progress-circle" : ""
            }`}
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
            cx="50%"
            cy="50%"
            r="45"
            strokeDasharray="283"
            strokeDashoffset="283"
          />
        </svg>

        <button
          onClick={handleButtonClick}
          className="relative z-10 p-3 rounded-full bg-highlight w-fit h-fit duration-150 hover:bg-primary"
        >
          <img src={isPlaying ? pauseIcon : playIcon} alt="play" />
        </button>
      </div>

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

import { useRef, useState } from "react";
import { Song } from "../../types/song";
import RecommendedSong from "./RecommendedSong";
import { motion } from "framer-motion";

const RecommendedSongsList = ({ songs }: { songs: Song[] | undefined }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [songUrl, setSongUrl] = useState("");

  const handlePlay = () => {
    if (audioRef.current) {
      if (!audioRef.current.paused) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {songs?.map((song, index) => (
        <motion.div
          transition={{ duration: 0.8, delay: index * 0.1 }}
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -40 }}
          key={index}
        >
          <RecommendedSong
            handlePlay={handlePlay}
            setSongUrl={setSongUrl}
            key={song.song}
            song={song}
          />
        </motion.div>
      ))}

      <audio ref={audioRef} src={songUrl} className="hidden"></audio>
    </div>
  );
};

export default RecommendedSongsList;

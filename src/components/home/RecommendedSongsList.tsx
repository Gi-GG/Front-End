import { useRef, useState, useEffect } from "react";
import { Song } from "../../types/song";
import RecommendedSong from "./RecommendedSong";
import { motion } from "framer-motion";

const RecommendedSongsList = ({ songs }: { songs: Song[] | undefined }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [songUrl, setSongUrl] = useState("");
  const [playingSongUrl, setPlayingSongUrl] = useState<string | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      if (playingSongUrl) {
        audioRef.current.play();
      } else {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [playingSongUrl, songUrl]);

  const handlePlayPause = (songUrl: string) => {
    if (playingSongUrl === songUrl) {
      setPlayingSongUrl(null);
    } else {
      setPlayingSongUrl(songUrl);
      setTimeout(() => {
        setPlayingSongUrl(null);
      }, 30000);
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
          key={song.preview_url} // Use `preview_url` as a unique identifier
        >
          <RecommendedSong
            handlePlayPause={() => handlePlayPause(song.preview_url)}
            setSongUrl={setSongUrl}
            isPlaying={playingSongUrl === song.preview_url}
            song={song}
          />
        </motion.div>
      ))}

      <audio ref={audioRef} src={songUrl} className="hidden"></audio>
    </div>
  );
};

export default RecommendedSongsList;

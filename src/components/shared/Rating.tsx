import { useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { Song } from "../../types/song";
import { useGetCurrentUser } from "../../hooks/auth/useGetCurrentUser";
import useRating from "../../hooks/songs/useRating";
import { useModalContext } from "./ModalProvider";

interface RatingProp {
  maxRating?: number; // Make maxRating optional and define its type
  song: Song;
}

const Rating = ({ maxRating = 5, song }: RatingProp) => {
  // Modal States
  const { setIsModalVisible, setSelectedSong } = useModalContext();

  const [rating, setRating] = useState(0);
  const { data } = useGetCurrentUser();
  const { mutateAsync } = useRating();

  const handleRating = (i: number) => {
    setRating(i + 1);
    setIsModalVisible(true);
    setSelectedSong(song);
  };

  // useEffect(() => {
  //     console.log({ ...song, userId: data?._id, rating });
  // }, [rating]);

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxRating }, (_, i) => {
        return i < rating ? (
          <FaStar
            onClick={async () => {
              handleRating(i);
              console.log(rating);
              mutateAsync({ ...song, userId: data?._id, rating });
            }}
            className="text-primary cursor-pointer"
            key={i}
            size={25}
          />
        ) : (
          <CiStar
            onClick={() => handleRating(i)}
            className="text-primary cursor-pointer"
            key={i}
            size={25}
          />
        );
      })}
    </div>
  );
};

export default Rating;
